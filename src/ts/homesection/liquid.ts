import { gsap } from 'gsap';
import { getMousePos } from '../utils';
import { Magnetic } from './magnetic';

interface DOMEl {
    mask: any;
    circle: any;
}

export class Liquid {
  DOM: DOMEl;

  constructor() {
    this.DOM = { mask: undefined, circle: undefined };
    this.DOM.circle = document.querySelector('.footer-btn') as Element;
    this.DOM.mask = document.querySelector('#request-btn');
    requestAnimationFrame(() => this.initEvents());
  }

  initEvents() {
    window.addEventListener('mousemove', ev => getMousePos(ev));
    this.DOM.circle.addEventListener('mouseenter', () => this.mouseEnter());
    this.DOM.circle.addEventListener('mouseleave', () => this.mouseLeave()); 
  } 

  mouseEnter() {
    gsap.to(this.DOM.mask, {
      startAt: {opacity: 1, x: 75,  y: 250},
      opacity: 1,
      ease: 'sine.inout',
      duration: 0.6,
      y: 165,
      rotation: -55,
    })
  }

  mouseLeave() {
    gsap.killTweensOf(this.DOM.mask);
    gsap.to(this.DOM.mask, {
      startAt: {opacity: 1, y: 165},
      ease: 'sine.out',
      duration: .3,
      y: 180,
      rotation: 30,
    })
  }
}