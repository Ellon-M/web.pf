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
exports.default = new class {
    constructor() {
        this.run = ({ current }) => {
            let elapsed = this.clock.getElapsedTime();
            for (let i = 0; i < this.scene.children.length; i++) {
                const plane = this.scene.children[i];
                plane.updatePosition(current);
                plane.updateTime(elapsed);
            }
            requestAnimationFrame(() => this.render());
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
        // let perspective = 1000;
        // const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        this.container = document.querySelector('[data-scroll-content]');
        this.scrollable = document.querySelector('[data-scroll]');
        this.camera.position.z = 50;
        // this.camera.position.set(0, 0, perspective);
        document.body.style.height = `${this.scrollable.getBoundingClientRect().height}px`;
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
        });
        this.renderer.setPixelRatio(gsap_1.default.utils.clamp(1.5, 1, window.devicePixelRatio));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xF2F2F2, 0);
        this.clock = new THREE.Clock();
        this.init();
    }
    init() {
        this.addToDom();
        this.addEvents();
    }
    render() {
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