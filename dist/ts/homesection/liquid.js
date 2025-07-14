"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Liquid = void 0;
const gsap_1 = require("gsap");
const utils_1 = require("../utils");
class Liquid {
    constructor() {
        this.DOM = { mask: undefined, circle: undefined, circleSmall: undefined, heading: undefined, footer: undefined, words: undefined };
        this.DOM.circle = document.querySelector('.footer-btn');
        this.DOM.circleSmall = document.querySelector('.footer-btn-small');
        this.DOM.mask = document.querySelector('#request-btn');
        this.DOM.footer = document.querySelector('.footer');
        this.DOM.heading = document.querySelector('.before-footer-h2');
        this.DOM.words = [...document.querySelectorAll('.word')];
        requestAnimationFrame(() => this.initEvents());
    }
    initEvents() {
        window.addEventListener('mousemove', ev => (0, utils_1.getMousePos)(ev));
        this.DOM.circle.addEventListener('mouseenter', () => this.mouseEnter());
        this.DOM.circle.addEventListener('mouseleave', () => this.mouseLeave());
        this.DOM.circle.addEventListener('click', () => {
            this.open();
        });
        this.DOM.circleSmall.addEventListener('click', () => {
            window.location.assign('/contact');
        });
    }
    mouseEnter() {
        gsap_1.gsap.to(this.DOM.mask, {
            startAt: { opacity: 1, x: 75, y: 250 },
            opacity: 1,
            ease: 'sine.inout',
            duration: 0.6,
            y: 165,
            rotation: -55,
        });
    }
    mouseLeave() {
        gsap_1.gsap.killTweensOf(this.DOM.mask);
        gsap_1.gsap.to(this.DOM.mask, {
            startAt: { opacity: 1, y: 165 },
            ease: 'sine.out',
            duration: .3,
            y: 180,
            rotation: 30,
        });
    }
    open() {
        gsap_1.gsap.to(this.DOM.heading, {
            startAt: { opacity: 1, y: 0 },
            y: -70,
            opacity: 0,
            duration: 0.6,
            ease: 'expo'
        });
        gsap_1.gsap.to(this.DOM.footer, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                window.location.assign('/contact');
            }
        });
    }
}
exports.Liquid = Liquid;
//# sourceMappingURL=liquid.js.map