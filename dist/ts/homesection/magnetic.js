"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magnetic = void 0;
const gsap_1 = require("gsap");
const utils_1 = require("../utils");
let winsize = (0, utils_1.calcWinsize)();
window.addEventListener('resize', () => winsize = (0, utils_1.calcWinsize)());
let mousepos = { x: 0, y: 0 };
window.addEventListener('mousemove', ev => mousepos = (0, utils_1.getMousePos)(ev));
class Magnetic {
    constructor(el) {
        this.el = el;
        this.sticky = this.el.querySelector('.footer-btn-sticky-area');
        this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.1 },
            ty: { previous: 0, current: 0, amt: 0.1 }
        };
        this.calculateSizePosition();
        this.initEvents();
    }
    calculateSizePosition() {
        this.scrollVal = { x: window.scrollX, y: window.scrollY };
        this.rect = this.el.getBoundingClientRect();
    }
    initEvents() {
        window.addEventListener('resize', () => this.calculateSizePosition());
        this.el.addEventListener('mouseenter', () => {
            this.loopRender();
        });
        this.el.addEventListener('mouseleave', () => {
            this.stopRender();
            this.renderedStyles['tx'].previous = this.renderedStyles['ty'].previous = 0;
        });
    }
    loopRender() {
        if (!this.reqId) {
            this.reqId = requestAnimationFrame(() => this.render());
        }
    }
    stopRender() {
        if (this.reqId) {
            window.cancelAnimationFrame(this.reqId);
            this.reqId = undefined;
        }
        gsap_1.gsap.to(this.el, {
            duration: 0.8,
            ease: 'power3',
            x: 0,
            y: 0
        });
    }
    render() {
        this.reqId = undefined;
        const scrollDiff = {
            x: this.scrollVal.x - window.scrollX,
            y: this.scrollVal.y - window.scrollY
        };
        this.renderedStyles['tx'].current = (mousepos.x - (scrollDiff.x + this.rect.left + this.rect.width / 2)) * .3;
        this.renderedStyles['ty'].current = (mousepos.y - (scrollDiff.y + this.rect.top + this.rect.height / 2)) * .3;
        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = (0, utils_1.lerp)(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }
        gsap_1.gsap.set(this.el, {
            x: this.renderedStyles['tx'].previous,
            y: this.renderedStyles['ty'].previous
        });
        this.loopRender();
    }
}
exports.Magnetic = Magnetic;
//# sourceMappingURL=magnetic.js.map