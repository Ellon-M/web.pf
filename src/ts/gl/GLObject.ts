import gsap from 'gsap';
import * as THREE from 'three';
import gl from './index';

interface Bounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface CamUnit {
  width: number;
  height: number;
}

export class GlObject extends THREE.Object3D {
  el: Element | null;
  rect!: DOMRect;
  bounds!: Bounds;
  camUnit!: CamUnit;
  progress!: number;

  constructor(el: Element) {
    super();
    this.el = el;
    this.resize();
  }

  setBounds() {
    this.rect = this.el!.getBoundingClientRect();
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
    if (!this.visible) return;
    this.setBounds();
  }

  calculateUnitSize(distance = this.position.z) {
    const vFov = gl.camera.fov * Math.PI / 180;
    const height = 2 * Math.tan(vFov / 2) * distance;
    const width = height * gl.camera.aspect;

    return { width, height };
  }

  updateSize(x = this.bounds.width / window.innerWidth, y = this.bounds.height / window.innerHeight) {
    this.camUnit = this.calculateUnitSize(gl.camera.position.z - this.position.z);

    if (!x || !y) return;

    this.scale.x = this.camUnit.width * x;
    this.scale.y = this.camUnit.height * y;
  }

  updateY(y = 0) {
    const { top, height } = this.bounds;

    this.position.y = (this.camUnit.height / 2) - (this.scale.y / 2);
    this.position.y -= ((top - y) / window.innerHeight) * this.camUnit.height;

    this.progress = gsap.utils.clamp(0, 1, 1 - (-y + top + height) / (window.innerHeight + height));
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