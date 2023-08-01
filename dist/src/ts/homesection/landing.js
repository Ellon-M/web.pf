"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const splitting_1 = __importDefault(require("splitting"));
const gsap_1 = require("gsap");
require("splitting/dist/splitting.css");
require("splitting/dist/splitting-cells.css");
(0, splitting_1.default)({});
class Home {
    constructor(el) {
        this.text = el;
        this.home = document.querySelector('.home');
        this.chars = [...el.querySelectorAll('.char-inner')];
        this.charsSub = [...el.querySelectorAll('.char-inner-sub')];
        this.smallText = document.querySelector('.home-bottom-left');
        this.navLinks = document.querySelector('.home-nav');
        this.init();
    }
    init() {
        this.play();
    }
    play() {
        this.tl = gsap_1.gsap.timeline()
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
            startAt: { x: '106%' },
            x: '0%',
            opacity: 1,
            visibility: 'visible',
        }, 'load+=0.2')
            .to(this.charsSub, {
            duration: 1.15,
            ease: 'power3',
            startAt: { x: '103%' },
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
        }, 'load+=0.75');
    }
}
exports.Home = Home;
//# sourceMappingURL=landing.js.map