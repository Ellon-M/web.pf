import gsap from 'gsap';
import * as THREE from 'three';
import { Events } from '../events';
import { lerp } from '../utils';

interface MyObject3D extends THREE.Object3D {
  updatePosition(current: number): void;
  updateTime(elapsed: number): void;
  resize(): void;
}

export default new class {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  clock: THREE.Clock;
  container: HTMLElement | null;
  scrollable: any;

  constructor() {
    this.scene = new THREE.Scene();
    // let perspective = 1000;
    // const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
    
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.container = document.querySelector('[data-scroll-content]')
    this.scrollable = document.querySelector('[data-scroll]');
    this.camera.position.z = 50;
    // this.camera.position.set(0, 0, perspective);
    document.body.style.height = `${this.scrollable.getBoundingClientRect().height}px`;
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    this.renderer.setPixelRatio(gsap.utils.clamp(1.5, 1, window.devicePixelRatio));
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

  run = ({ current }: { current: number }) => {
    let elapsed = this.clock.getElapsedTime();
  
    for (let i = 0; i < this.scene.children.length; i++) {
      const plane: MyObject3D = this.scene.children[i] as MyObject3D;
      plane.updatePosition(current);
      plane.updateTime(elapsed);
    }
    
    requestAnimationFrame(() => this.render());
  }

  addEvents() {
    Events.on('tick', this.run);
    Events.on('resize', this.resize);
  }

  addToDom() {
    const canvas = this.renderer.domElement;
    canvas.classList.add('dom-gl');
    document.body.appendChild(canvas);
  }

  resize = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.updateProjectionMatrix();

    for (let i = 0; i < this.scene.children.length; i++) {
      const plane: MyObject3D = this.scene.children[i] as MyObject3D;
      plane.resize();
    }
  }
}