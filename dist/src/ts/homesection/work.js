"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollCanvas = void 0;
const THREE = __importStar(require("three"));
const fragment_glsl_1 = __importDefault(require("./shaders/fragment.glsl"));
const vertex_glsl_1 = __importDefault(require("./shaders/vertex.glsl"));
const GLObject_1 = require("../gl/GLObject");
const index_1 = __importDefault(require("../gl/index"));
const gsap_1 = __importDefault(require("gsap"));
const events_1 = require("../events");
const planeGeometry = new THREE.PlaneGeometry(1, 1, 100, 100);
const planeMaterial = new THREE.ShaderMaterial({
    vertexShader: vertex_glsl_1.default,
    fragmentShader: fragment_glsl_1.default,
    transparent: true,
    side: THREE.DoubleSide
});
class ScrollCanvas extends GLObject_1.GlObject {
    constructor(el) {
        var _a, _b, _c;
        super(el);
        this.geometry = planeGeometry;
        this.material = planeMaterial.clone();
        this.img = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector('[data-src]');
        this.scrollable = document.querySelector('[data-scroll-content]');
        const imgAttr = (_b = this.img) === null || _b === void 0 ? void 0 : _b.getAttribute('data-src');
        this.offset = new THREE.Vector2(0, 0);
        this.sizes = new THREE.Vector2(0, 0);
        this.texture = new THREE.TextureLoader().load(imgAttr, (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            this.material.uniforms.uTexture.value = texture;
        });
        this.material.uniforms = {
            uTexture: {
                value: this.texture
            },
            uOffset: {
                value: new THREE.Vector2(0.0, 0.0)
            },
            uAlpha: {
                value: 1.
            },
            uTime: { value: 0 },
            uProg: { value: 0 },
        };
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        window.addEventListener('resize', this.handleWindowResize.bind(this));
        (_c = window.visualViewport) === null || _c === void 0 ? void 0 : _c.addEventListener('resize', this.handleWindowResize.bind(this));
        this.handleWindowResize();
        // this.updateX(this.offset.x);
        // this.updateY(this.offset.y);
        // this.updateSize(this.sizes.x, this.sizes.y);
        this.add(this.mesh);
        index_1.default.scene.add(this);
        this.initEvents();
        events_1.Events.on('scroll', this.render.bind(this));
    }
    handleWindowResize() {
        const viewportWidth = window.visualViewport.width;
        const viewportHeight = window.visualViewport.height;
        this.sizes.set(viewportWidth, viewportHeight);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
    }
    updateTime(time) {
        this.material.uniforms.uTime.value = time;
    }
    getDimensions() {
        var _a, _b;
        const { width, height, top, left } = (_a = this.scrollable) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        (_b = this.sizes) === null || _b === void 0 ? void 0 : _b.set(width, height);
        // console.log('sizes:', width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2);
    }
    render() {
        this.getDimensions();
        events_1.Events.on('tick', (data) => {
            var _a;
            const target = data.target;
            const current = data.current;
            (_a = this.material) === null || _a === void 0 ? void 0 : _a.uniforms.uOffset.value.set(this.offset.x * 0.0, -(target - current) * 0.0003);
            // console.log(this.material?.uniforms.uOffset.value);
        });
    }
    initEvents() {
        // Events.on('scroll', this.render.bind(this));
        this.mouseEnter();
        this.mouseLeave();
    }
    mouseEnter() {
        var _a;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', () => {
            var _a;
            gsap_1.default.to((_a = this.material) === null || _a === void 0 ? void 0 : _a.uniforms.uProg, {
                value: 1,
                ease: 'power.inOut',
            });
        });
    }
    mouseLeave() {
        var _a;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseleave', () => {
            var _a;
            gsap_1.default.to((_a = this.material) === null || _a === void 0 ? void 0 : _a.uniforms.uProg, {
                value: 0,
                ease: 'power.inOut',
            });
        });
    }
}
exports.ScrollCanvas = ScrollCanvas;
//# sourceMappingURL=work.js.map