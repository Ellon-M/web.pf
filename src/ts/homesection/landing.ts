import Splitting from "splitting";
import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";


Splitting({});

export class Home {
  text!: Element;
  home!: Element;
  smallText!: Element;
  navLinks!: Element;
  chars!: Array<Element>;
  charsSub!: Array<Element>;
  tl!: gsap.core.Timeline;

  constructor(el: Element) {
    this.text = el;
    this.home = document.querySelector('.home') as Element;
    this.chars = [...el.querySelectorAll('.char-inner')];
    this.charsSub = [...el.querySelectorAll('.char-inner-sub')];
    this.smallText = document.querySelector('.home-bottom-left') as Element;
    this.navLinks = document.querySelector('.home-nav') as Element;
    this.init();
  }

  init() {
    this.play();
  }

  play() {
    this.tl = gsap.timeline()
    .addLabel('load', 0)
    .from(this.text, {
      opacity: 0,
      visibility: 'hidden',
    }, 'load')
    .set(this.text, {
      x: '0%',
      ease: 'quad.in',
      opacity: 0,
      visibility: 'hidden'
    }, 'load+=0.2')
    .set(this.smallText, {
      opacity: 0,
      visibility: 'hidden',
      y: -70
    }, 'load+=0.45')
    .set(this.navLinks, {
      opacity: 0,
      visibility: 'hidden',
    }, 'load+=0.75')
    .to(this.chars, {
      duration: 1.0,
      ease: 'expo',
      startAt: {x: '106%'},
      x: '0%',
      opacity: 1,
      visibility: 'visible',
    }, 'load+=0.2')
    .to(this.charsSub, {
        duration: 1.15,
        ease: 'power3',
        startAt: {x: '103%'},
        x: '0%',
        opacity: 1,
        visibility: 'visible',
      }, 'load+=0.33')
      .to(this.smallText, {
        duration: 1.6,
        opacity: 1,
        y: 0,
        ease: 'expo',
        visibility: 'visible'
      }, 'load+=0.45')
      .to(this.navLinks, {
        duration: 1.6,
        opacity: 1,
        ease: 'expo',
        visibility: 'visible'
      }, 'load+=0.75')
  }
}
