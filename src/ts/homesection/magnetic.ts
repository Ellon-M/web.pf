import { gsap } from 'gsap';
import { calcWinsize, getMousePos, lerp } from '../utils';

let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

let mousepos = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

interface ScrollObj {
  x: number;
  y: number;
}

interface RenderedObjVal {
  previous: number;
  current: number;
  amt: number;
}

interface RenderedObj {
  [key: string ]: RenderedObjVal
}

export class Magnetic {
  renderedStyles: RenderedObj;
  scrollVal!: ScrollObj;
  rect!: DOMRect;
  reqId: number | undefined;
  el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.1 },
      ty: { previous: 0, current: 0, amt: 0.1 }
    }
  }

  calculateSizePosition() {
    this.scrollVal = {x: window.scrollX, y: window.scrollY};
    this.rect = this.el.getBoundingClientRect();
  }
}