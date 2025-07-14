"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marquee = void 0;
const gsap_1 = require("gsap");
class Marquee {
    constructor() {
        this.handleIntersection = (entries, observer) => {
            console.log(entries);
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => this.play());
                    observer.unobserve(entry.target);
                }
            });
        };
        this.resizeHandler = () => {
            this.tl.pause();
            const itemWidth = this.marqueeItems[0].offsetWidth;
            const marqueeWidth = this.marquee.offsetWidth;
            let wrapWidth = ((gsap_1.gsap.utils.toArray(this.marqueeItems).length - 1) * itemWidth); // Use total width of all items
            // Create and set up the GSAP timeline
            this.tl = gsap_1.gsap.timeline({
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
            this.tl.to(this.marquee, {
                x: `+=${+wrapWidth - marqueeWidth}`,
                duration: 2.4,
                repeat: -1,
                modifiers: {
                    x: gsap_1.gsap.utils.unitize(gsap_1.gsap.utils.wrap(-marqueeWidth, wrapWidth)),
                },
            }, '<');
            this.tl.resume();
        };
        this.skills = document.querySelector('.section-skills');
        this.marquee = document.querySelector('.skills-marquee');
        this.marqueeItems = [...this.marquee.querySelectorAll('div')];
        this.observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.5 });
        this.observer.observe(this.skills);
        window.addEventListener('resize', this.resizeHandler);
    }
    play() {
        const itemWidth = this.marqueeItems[0].offsetWidth;
        const marqueeWidth = this.marquee.offsetWidth;
        let wrapWidth = ((gsap_1.gsap.utils.toArray(this.marqueeItems).length - 1) * itemWidth); // Use total width of all items
        // Create and set up the GSAP timeline
        this.tl = gsap_1.gsap.timeline({
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
        this.tl.to(this.marquee, {
            x: `+=${+wrapWidth - marqueeWidth}`,
            duration: 2.4,
            repeat: -1,
            modifiers: {
                x: gsap_1.gsap.utils.unitize(gsap_1.gsap.utils.wrap(-marqueeWidth, wrapWidth)),
            },
        }, '<');
    }
    destroy() {
        this.observer.unobserve(this.skills);
        window.removeEventListener('resize', this.resizeHandler);
    }
}
exports.Marquee = Marquee;
//# sourceMappingURL=marquee.js.map