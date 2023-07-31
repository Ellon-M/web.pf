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
const utils_1 = require("../utils");
const fragment_glsl_1 = __importDefault(require("./shaders/fragment.glsl"));
const vertex_glsl_1 = __importDefault(require("./shaders/vertex.glsl"));
const GLObject_1 = require("../gl/GLObject");
const index_1 = __importDefault(require("../gl/index"));
const gsap_1 = __importDefault(require("gsap"));
const glslify_1 = __importDefault(require("glslify"));
const planeGeometry = new THREE.PlaneGeometry(1, 1, 100, 100);
const planeMaterial = new THREE.ShaderMaterial({
    vertexShader: (0, glslify_1.default)(vertex_glsl_1.default),
    fragmentShader: (0, glslify_1.default)(fragment_glsl_1.default),
    transparent: true,
    side: THREE.DoubleSide
});
class ScrollCanvas extends GLObject_1.GlObject {
    constructor(el) {
        var _a;
        super(el);
        this.geometry = planeGeometry;
        this.material = planeMaterial.clone();
        this.material.uniforms = {
            uTexture: {
                value: 0
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
        this.img = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector('.gl-img');
        this.texture = new THREE.TextureLoader().load(this.img.src, (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            this.material.uniforms.uTexture.value = texture;
        });
        this.offset = new THREE.Vector2(0, 0);
        this.sizes = new THREE.Vector2(0, 0);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
        this.add(this.mesh);
        this.scene = index_1.default.scene;
        this.scene.add(this);
        this.initEvents();
        this.render();
    }
    getDimensions() {
        const { width, height, top, left } = this.img.getBoundingClientRect();
        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2);
    }
    updateTime(time) {
        this.material.uniforms.uTime.value = time;
    }
    render() {
        this.getDimensions();
        let target = window.scrollY;
        let current = (0, utils_1.lerp)(0, target, 0.065);
        this.material.uniforms.uOffset.value.set(this.offset.x * 0.0, -(target - current) * -0.000085);
        requestAnimationFrame(this.render.bind(this));
    }
    initEvents() {
        this.mouseEnter();
        this.mouseLeave();
    }
    mouseEnter() {
        this.img.addEventListener('mouseenter', () => {
            gsap_1.default.to(this.material.uniforms.uProg, {
                value: 1,
                ease: 'power.inOut',
            });
        });
    }
    mouseLeave() {
        this.img.addEventListener('mouseleave', () => {
            // console.log(this.element);
            gsap_1.default.to(this.material.uniforms.uProg, {
                value: 0,
                ease: 'power.inOut',
            });
        });
    }
}
exports.ScrollCanvas = ScrollCanvas;
//# sourceMappingURL=work.js.map