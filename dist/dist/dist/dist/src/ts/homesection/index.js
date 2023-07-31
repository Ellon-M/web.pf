"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Smooth_1 = __importDefault(require("../components/Smooth"));
const work_1 = require("./work");
let body = document.querySelector('.sec-home-2');
let elements = document.querySelectorAll('.js-plane');
function init() {
    document.body.style.height = `${body === null || body === void 0 ? void 0 : body.getBoundingClientRect().height}px`;
}
init();
elements.forEach((el) => new work_1.ScrollCanvas(el));
const smooth = new Smooth_1.default();
//# sourceMappingURL=index.js.map