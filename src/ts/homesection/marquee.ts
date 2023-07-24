import { gsap } from 'gsap';

export class Marquee {
  skills: Element;
  marquee: HTMLElement;
  marqueeItems: Array<any>;
  tl!: GSAPTimeline;
  observer: IntersectionObserver;

  constructor() {
    this.skills = document.querySelector('.section-skills') as Element;
    this.marquee = document.querySelector('.skills-marquee') as HTMLElement;
    this.marqueeItems = [...this.marquee.querySelectorAll('div')];
    this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.5 })
    this.observer.observe(this.skills);
    window.addEventListener('resize', this.resizeHandler);
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

  resizeHandler = () => {
    this.tl.pause();

    const itemWidth = this.marqueeItems[0].offsetWidth;
    const marqueeWidth = this.marquee.offsetWidth;
    let wrapWidth = ((gsap.utils.toArray(this.marqueeItems).length - 1) * itemWidth); // Use total width of all items
  
    // Create and set up the GSAP timeline
    this.tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: 'none',
      },
    });
  
    this.tl.to(this.marquee, {
      startAt: { opacity: 0, yPercent: -80 },
      duration: 0.6,
      opacity: 1,
      yPercent: 0,
    });
  
    this.tl.to(
      this.marquee,
      {
        x: `+=${+wrapWidth - marqueeWidth}`,
        duration: 2.4,
        repeat: -1, 
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-marqueeWidth, wrapWidth)),
        },
      },
      '<'
    );

    this.tl.resume();
  };

  play() {
    const itemWidth = this.marqueeItems[0].offsetWidth;
    const marqueeWidth = this.marquee.offsetWidth;
    let wrapWidth = ((gsap.utils.toArray(this.marqueeItems).length - 1) * itemWidth); // Use total width of all items
  
    // Create and set up the GSAP timeline
    this.tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
    });
  
    this.tl.to(this.marquee, {
      startAt: { opacity: 0, yPercent: -80 },
      duration: 0.6,
      opacity: 1,
      yPercent: 0,
    });
  
    this.tl.to(
      this.marquee,
      {
        x: `+=${+wrapWidth - marqueeWidth}`,
        duration: 2.4,
        repeat: -1, 
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-marqueeWidth, wrapWidth)),
        },
      },
      '<'
    );
  }

  destroy() {
    this.observer.unobserve(this.skills);
    window.removeEventListener('resize', this.resizeHandler);
  }
}