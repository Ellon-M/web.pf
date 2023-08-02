import * as THREE from 'three';
import fragment from './shaders/fragment.glsl';
import vertex from './shaders/vertex.glsl';
import { GlObject } from '../gl/GLObject';
import Gl from '../gl/index';
import gsap from 'gsap';
import { Events } from '../events';

const planeGeometry = new THREE.PlaneGeometry(1, 1, 100, 100);
const planeMaterial = new THREE.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
  transparent: true,
  side: THREE.DoubleSide
});

interface MeshRect {
  width: number,
  height: number,
  top: number,
  left: number
}

interface scrollOffset {
  target: number,
  current: number
}

export class ScrollCanvas extends GlObject {
  geometry!: THREE.BufferGeometry;
  material!: THREE.ShaderMaterial;
  scene!: THREE.Scene;
  uniforms!: any;
  texture!: THREE.Texture;
  offset: THREE.Vector2;
  sizes: THREE.Vector2;
  img!: Element;
  mesh!: THREE.Mesh;
  scrollable!: Element;

  constructor(el: Element) {
    super(el);
    this.geometry = planeGeometry;
    this.material = planeMaterial.clone();
    this.img = this.el?.querySelector('[data-src]')!;
    this.scrollable = document.querySelector('[data-scroll-content]')!;
    const imgAttr: string = this.img?.getAttribute('data-src') as string;
    this.offset = new THREE.Vector2(0,0);
    this.sizes = new THREE.Vector2(0,0);

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
    }

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    let previousViewportHeight = window.visualViewport!.height;
    // window.addEventListener('resize', this.handleWindowResize.bind(this));
    // window.visualViewport?.addEventListener('resize', this.handleWindowResize.bind(this));
    // this.updateX(this.offset.x);
    // this.updateY(this.offset.y);
    // this.updateSize(this.sizes.x, this.sizes.y);
    this.add(this.mesh);
    Gl.scene.add(this);
    this.initEvents();
  
    Events.on('scroll', this.render.bind(this));
  }

  updateTime(time: number) {
    this.material.uniforms.uTime.value = time;
  }

  getDimensions() {
    const {width, height, top, left} = this.scrollable?.getBoundingClientRect() as MeshRect;
    this.sizes?.set(width, height);
    const viewportWidth = window.visualViewport?.width;
    const viewportHeight = window.visualViewport!.height;
    
    this.offset.set(left - window.innerWidth / 2 + width / 2, -top + viewportHeight / 2 - height / 2);

  }

  render() {
    this.getDimensions();
    Events.on('tick', (data: scrollOffset) => {
      const target = data.target;
      const current = data.current;
      
      this.material?.uniforms.uOffset.value.set(this.offset.x * 0.0, -(target - current) * 0.0003);
      // console.log(this.material?.uniforms.uOffset.value);
    });
  }

  initEvents() {
    Events.on('scroll', this.render.bind(this));
    this.mouseEnter();
    this.mouseLeave();
  }

  mouseEnter() {
    this.el?.addEventListener('mouseenter', () => {
      gsap.to(this.material?.uniforms.uProg, {
        value: 1,
        ease: 'power.inOut',
      });
    })
  }

  mouseLeave() {
    this.el?.addEventListener('mouseleave', () => {
      gsap.to(this.material?.uniforms.uProg, {
        value: 0,
        ease: 'power.inOut',
      });
    })
  }
}