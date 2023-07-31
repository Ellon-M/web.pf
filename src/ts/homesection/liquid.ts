import { gsap } from 'gsap';
import { getMousePos } from '../utils';
import { Magnetic } from './magnetic';

interface DOMEl {
    mask: any;
    circle: any;
    circleSmall: any;
    heading: any,
    footer: any,
    words: any
}

export class Liquid {
  DOM: DOMEl;

  constructor() {
    this.DOM = { mask: undefined, circle: undefined, circleSmall: undefined, heading: undefined, footer: undefined, words: undefined };
    this.DOM.circle = document.querySelector('.footer-btn') as Element;
    this.DOM.circleSmall = document.querySelector('.footer-btn-small') as Element;
    this.DOM.mask = document.querySelector('#request-btn');
    this.DOM.footer = document.querySelector('.footer');
    this.DOM.heading = document.querySelector('.before-footer-h2');
    this.DOM.words = [...document.querySelectorAll('.word')] as Array<Element>;
    requestAnimationFrame(() => this.initEvents());
  }

  initEvents() {
    window.addEventListener('mousemove', ev => getMousePos(ev));
    this.DOM.circle.addEventListener('mouseenter', () => this.mouseEnter());
    this.DOM.circle.addEventListener('mouseleave', () => this.mouseLeave());
    this.DOM.circle.addEventListener('click', () => {
      this.open();
    })
    this.DOM.circleSmall.addEventListener('click', () => {
      window.location.assign('/contact');
    })
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

  open() {
    gsap.to(this.DOM.heading, {
      startAt: { opacity: 1, y: 0},
      y: -70,
      opacity: 0,
      duration: 0.6,
      ease: 'expo'
    });
    gsap.to(this.DOM.footer, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        window.location.assign('/contact');
      }
    })
  }
}