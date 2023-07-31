"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imagesloaded_1 = __importDefault(require("imagesloaded"));
const events_1 = __importDefault(require("../events"));
class Smooth {
    constructor() {
        this.bindMethods();
        this.dom = {
            el: document.querySelector('[data-scroll]'),
            content: document.querySelector('[data-scroll-content]')
        };
        this.init();
    }
    bindMethods() {
        ['scroll', 'run', 'resize']
            .forEach((fn) => this[fn] = this[fn].bind(this));
    }
    setStyles() {
        Object.assign(this.dom.el.style, {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            overflow: 'hidden'
        });
    }
    setHeight() {
        document.body.style.height = `${this.dom.content.offsetHeight}px`;
    }
    resize() {
        this.setHeight();
        this.scroll();
    }
    preload() {
        (0, imagesloaded_1.default)(this.dom.content, (instance) => this.setHeight());
    }
    scroll() {
        this.data.current = window.scrollY;
    }
    run({ current, target }) {
        const diff = target - current;
        const acc = diff / window.innerWidth;
        const velo = +acc;
        this.dom.content.style.transform = `translate3d(0, -${current}px, 0)`;
    }
    on() {
        this.setStyles();
        this.setHeight();
        events_1.default.on('tick', this.run);
        events_1.default.on('resize', this.resize);
    }
    off() {
        events_1.default.off('tick', this.run);
        events_1.default.off('resize', this.resize);
    }
    destroy() {
        document.body.style.height = '';
        this.data = null;
        this.removeEvents();
        this.cancelAnimationFrame();
    }
    resize() {
        this.setHeight();
    }
    init() {
        this.preload();
        this.on();
    }
}
exports.default = Smooth;
//# sourceMappingURL=Smooth.js.map