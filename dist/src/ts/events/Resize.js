"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Events_1 = __importDefault(require("./Events"));
class Resize {
    constructor() {
        this.init();
    }
    onResize() {
        Events_1.default.emit('resize');
    }
    on() {
        window.addEventListener('resize', this.onResize);
    }
    init() {
        this.on();
    }
}
exports.default = new Resize();
//# sourceMappingURL=Resize.js.map