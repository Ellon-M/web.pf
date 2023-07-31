"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Events_1 = __importDefault(require("./Events"));
class Scroll {
    constructor() {
        this.init();
    }
    onScroll() {
        Events_1.default.emit('scroll', { y: window.scrollY });
    }
    on() {
        window.addEventListener('scroll', this.onScroll);
    }
    init() {
        this.on();
    }
}
exports.default = new Scroll();
//# sourceMappingURL=Scroll.js.map