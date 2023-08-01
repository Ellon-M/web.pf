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
exports.GlObject = void 0;
const gsap_1 = __importDefault(require("gsap"));
const THREE = __importStar(require("three"));
const index_1 = __importDefault(require("./index"));
class GlObject extends THREE.Object3D {
    constructor(el) {
        super();
        this.el = el;
        this.resize();
    }
    setBounds() {
        this.rect = this.el.getBoundingClientRect();
        this.bounds = {
            left: this.rect.left,
            top: this.rect.top + window.scrollY,
            width: this.rect.width,
            height: this.rect.height
        };
        this.updateSize();
        this.updatePosition();
    }
    resize() {
        if (!this.visible)
            return;
        this.setBounds();
    }
    calculateUnitSize(distance = this.position.z) {
        const vFov = index_1.default.camera.fov * Math.PI / 180;
        const height = 2 * Math.tan(vFov / 2) * distance;
        const width = height * index_1.default.camera.aspect;
        return { width, height };
    }
    updateSize(x = this.bounds.width / window.innerWidth, y = this.bounds.height / window.innerHeight) {
        this.camUnit = this.calculateUnitSize(index_1.default.camera.position.z - this.position.z);
        if (!x || !y)
            return;
        this.scale.x = this.camUnit.width * x;
        this.scale.y = this.camUnit.height * y;
    }
    updateY(y = 0) {
        const { top, height } = this.bounds;
        this.position.y = (this.camUnit.height / 2) - (this.scale.y / 2);
        this.position.y -= ((top - y) / window.innerHeight) * this.camUnit.height;
        this.progress = gsap_1.default.utils.clamp(0, 1, 1 - (-y + top + height) / (window.innerHeight + height));
    }
    updateX(x = 0) {
        const { left } = this.bounds;
        this.position.x = -(this.camUnit.width / 2) + (this.scale.x / 2);
        this.position.x += ((left + x) / window.innerWidth) * this.camUnit.width;
    }
    updatePosition(y = 0) {
        this.updateY(y);
        this.updateX(0);
    }
}
exports.GlObject = GlObject;
//# sourceMappingURL=GLObject.js.map