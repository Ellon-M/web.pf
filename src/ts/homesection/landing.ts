import Splitting from "splitting";
import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";


Splitting({});

export class Home {
  text!: Element;
  chars!: Array<Element>;
  charsSub!: Array<Element>;
  tl!: gsap.core.Timeline;

  constructor(el: Element) {
    this.text = el;
     this.chars = [...el.querySelectorAll('.char-inner')];
     this.charsSub = [...el.querySelectorAll('.char-inner-sub')];
     this.init();
  }

  init() {
    window.addEventListener('load', () => {
      this.play();
    })
  }

  play() {
    this.tl = gsap.timeline()
    .addLabel('load', 0)
    .from(this.text, {
      visibility: 'hidden',
    }, 'load')
    .set(this.text, {
      x: '0%',
      ease: 'quad.in',
      visibility: 'hidden'
    }, 'load+=0.2')
    .to(this.chars, {
      duration: 1.0,
      ease: 'expo',
      startAt: {x: '106%'},
      x: '0%',
      visibility: 'visible',
    }, 'load+=0.2')
    .to(this.charsSub, {
        duration: 1.15,
        ease: 'power3',
        startAt: {x: '103%'},
        x: '0%',
        visibility: 'visible',
      }, 'load+=0.33')  
  }
}
