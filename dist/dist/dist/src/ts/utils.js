"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapElements = exports.map = exports.getRandomFloat = exports.distance = exports.getMousePos = exports.getViewport = exports.calcWinsize = exports.lineEquation = exports.dist = exports.lerp = exports.sin = exports.cos = exports.HALF_PI = exports.angle = exports.fadeInOut = exports.fadeOut = exports.fadeIn = exports.randRange = exports.randIn = exports.rand = exports.floor = exports.preloadImages = exports.preloadFonts = void 0;
const webfont = require('webfontloader');
const imagesLoaded = require('imagesloaded');
const preloadFonts = () => {
    return new Promise((resolve) => {
        webfont.load({
            custom: {
                families: ['SFUIDisplay']
            },
            active: resolve
        });
    });
};
exports.preloadFonts = preloadFonts;
const preloadImages = (selector) => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};
exports.preloadImages = preloadImages;
const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;
exports.cos = cos;
exports.sin = sin;
const HALF_PI = 0.5 * PI;
exports.HALF_PI = HALF_PI;
const TAU = 2 * PI;
const TO_RAD = PI / 180;
const floor = (n) => n | 0;
exports.floor = floor;
const rand = (n) => n * random();
exports.rand = rand;
const randIn = (min, max) => rand(max - min) + min;
exports.randIn = randIn;
const randRange = (n) => n - rand(2 * n);
exports.randRange = randRange;
const fadeIn = (t, m) => t / m;
exports.fadeIn = fadeIn;
const fadeOut = (t, m) => (m - t) / m;
exports.fadeOut = fadeOut;
const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return abs((t + hm) % m - hm) / (hm);
};
exports.fadeInOut = fadeInOut;
const dist = (x1, y1, x2, y2) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
exports.dist = dist;
const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1);
exports.angle = angle;
const lerp = (a, b, n) => (1 - n) * a + n * b;
exports.lerp = lerp;
const lineEquation = (y2, y1, x2, x1, currentVal) => {
    // y = mx + b 
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};
exports.lineEquation = lineEquation;
const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};
exports.calcWinsize = calcWinsize;
const getViewport = () => {
    return { width: window.innerWidth, height: window.innerHeight, aspectRatio: window.innerWidth / window.innerHeight };
};
exports.getViewport = getViewport;
const getMousePos = (e) => {
    return {
        x: e.clientX,
        y: e.clientY
    };
};
exports.getMousePos = getMousePos;
const distance = (x1, y1, x2, y2) => {
    var a = x1 - x2;
    var b = y1 - y2;
    return Math.hypot(a, b);
};
exports.distance = distance;
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
exports.getRandomFloat = getRandomFloat;
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
const map = (x, a, b, c, d) => clamp((x - a) * (d - c) / (b - a) + c, Math.min(c, d), Math.max(c, d));
exports.map = map;
const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        // add a wrap for every char (overflow hidden)
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList.value = wrapClass;
        if (char.parentNode)
            char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
};
exports.wrapElements = wrapElements;
//# sourceMappingURL=utils.js.map