"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = __importDefault(require("gsap"));
const utils_1 = require("../utils");
const Events_1 = __importDefault(require("./Events"));
class Raf {
    constructor() {
        this.target = 0;
        this.current = 0;
        this.currentRounded = 0;
        this.ease = 0.115;
        this.init();
    }
    tick() {
        this.current = (0, utils_1.lerp)(this.current, this.target, this.ease);
        this.currentRounded = Math.round(this.current * 100) / 100;
        Events_1.default.emit('tick', {
            target: this.target,
            current: this.currentRounded,
        });
    }
    onScroll({ y }) {
        this.target = y;
    }
    on() {
        gsap_1.default.ticker.add(this.tick.bind(this));
        Events_1.default.on('scroll', this.onScroll.bind(this));
    }
    init() {
        this.on();
    }
}
exports.default = new Raf();
//# sourceMappingURL=Raf.js.map