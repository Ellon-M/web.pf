import { gsap } from 'gsap';

export class Marquee {
  skills: Element;
  marquee: Element;
  marqueeItems: Array<HTMLElement>;
  tl!: GSAPTimeline;
  observer: IntersectionObserver;

  constructor() {
    this.skills = document.querySelector('.section-skills') as Element;
    this.marquee = document.querySelector('.skills-marquee') as Element;
    this.marqueeItems = [...this.marquee.querySelectorAll('div')];
    this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.5 })
    this.observer.observe(this.skills);
  }

  handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    console.log(entries);
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => this.play());
        observer.unobserve(entry.target);
      }
    });
  }

  play() {
    console.log('play');
    const itemWidth = this.marqueeItems[0].offsetWidth;
    const wrapWidth = ((gsap.utils.toArray(this.marqueeItems).length - 1) * itemWidth);
    this.tl = gsap.timeline()
    .to(this.marquee, {
      startAt: {opacity: 0, yPercent: -80},
      ease: 'power3',
      duration: .8,
      opacity: 1,
      yPercent: 0,
    })
    .to(this.marquee, {
      x: `+=${-wrapWidth + itemWidth}`,
      ease: 'none',
      duration: 3, 
      repeat: -1, 
      modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-itemWidth, wrapWidth))  
      }           
  }, '<')
  }
}