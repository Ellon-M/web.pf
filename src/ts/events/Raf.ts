import gsap from 'gsap';
import { lerp } from '../utils';
import Events from './Events';

class Raf {
  target: number;
  current: number;
  currentRounded: number;
  ease: number;

  constructor() {
    this.target = 0;
    this.current = 0;
    this.currentRounded = 0;
    this.ease = 0.095;

    this.init();
  }

  tick() {
    this.current = lerp(this.current, this.target, this.ease);
    this.currentRounded = Math.round(this.current * 100) / 100;

    Events.emit('tick', {
      target: this.target,
      current: this.currentRounded,
    });
  }

  onScroll({ y }: { y: number }) {
    this.target = y;
  }

  on() {
    gsap.ticker.add(this.tick.bind(this));
    Events.on('scroll', this.onScroll.bind(this));
  }

  init() {
    this.on();
  }
}

export default new Raf();