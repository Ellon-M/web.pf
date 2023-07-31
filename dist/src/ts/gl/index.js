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
const gsap_1 = __importDefault(require("gsap"));
const THREE = __importStar(require("three"));
const events_1 = require("../events");
const utils_1 = require("../utils");
let current = 0;
let target = 0;
let ease = 0.055;
exports.default = new class {
    constructor() {
        this.run = ({ current }) => {
            let elapsed = this.clock.getElapsedTime();
            for (let i = 0; i < this.scene.children.length; i++) {
                const plane = this.scene.children[i];
                plane.updatePosition(current);
                plane.updateTime(elapsed);
            }
            console.log('run');
            this.render();
        };
        this.resize = () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.updateProjectionMatrix();
            for (let i = 0; i < this.scene.children.length; i++) {
                const plane = this.scene.children[i];
                plane.resize();
            }
        };
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.z = 50;
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
        });
        this.renderer.setPixelRatio(gsap_1.default.utils.clamp(1.5, 1, window.devicePixelRatio));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xF2F2F2, 0);
        this.clock = new THREE.Clock();
        this.scrollable = document.querySelector('.home');
        this.init();
    }
    init() {
        this.addToDom();
        this.addEvents();
    }
    smoothScroll() {
        target = window.scrollY;
        current = (0, utils_1.lerp)(current, target, ease);
        this.scrollable.style.transform = `translate3d(0,${-current}px, 0)`;
    }
    render() {
        // this.smoothScroll();
        this.renderer.render(this.scene, this.camera);
    }
    addEvents() {
        events_1.Events.on('tick', this.run);
        events_1.Events.on('resize', this.resize);
    }
    addToDom() {
        const canvas = this.renderer.domElement;
        canvas.classList.add('dom-gl');
        document.body.appendChild(canvas);
    }
};
//# sourceMappingURL=index.js.map