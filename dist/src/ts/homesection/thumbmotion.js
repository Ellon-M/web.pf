"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = require("gsap");
const events_1 = require("events");
const utils_1 = require("../utils");
let winsize = (0, utils_1.calcWinsize)();
window.addEventListener('resize', () => winsize = (0, utils_1.calcWinsize)());
class Thumbmotion extends events_1.EventEmitter {
    constructor(el) {
        super();
        this.el = el;
        this.content = document.querySelector('.content');
        this.intro = this.el.querySelector('.work-image');
        this.introImg = this.el.querySelector('.aspect');
        this.titleMeta = this.el.querySelector('work-title');
        this.titleBlock = this.el.querySelector('work-title-full');
        this.subTitleMeta = this.el.querySelector('work-bottom-text');
        this.subTitleBlock = this.el.querySelector('work-description');
        console.log(this.intro);
        this.config = {
            isThumbView: true
        };
        this.layout();
        this.initEvents();
    }
    layout() {
        gsap_1.gsap.set(this.titleBlock, { y: '100%' });
        gsap_1.gsap.set(this.subTitleBlock, { y: '100%' });
        const bodyComputedStyle = getComputedStyle(document.body);
        let imageSettings = {
            imageWidthStart: winsize.width,
            imageHeightStart: parseFloat(bodyComputedStyle.getPropertyValue('--image-height-start')),
            imageWidthEnd: parseFloat(bodyComputedStyle.getPropertyValue('--image-width-end')),
            imageHeightEnd: parseFloat(bodyComputedStyle.getPropertyValue('--image-height-end')),
            metaOffset: parseFloat(bodyComputedStyle.getPropertyValue('--meta-offset'))
        };
        let introRect = this.intro.getBoundingClientRect();
        let introTransform = {
            scaleX: imageSettings.imageWidthEnd / imageSettings.imageWidthStart,
            scaleY: imageSettings.imageHeightEnd / imageSettings.imageHeightStart,
            y: (winsize.height / 2 - introRect.top) - introRect.height / 2
        };
        gsap_1.gsap.set(this.intro, {
            y: introTransform.y,
            scaleX: introTransform.scaleX,
            scaleY: introTransform.scaleY
        });
        gsap_1.gsap.set(this.introImg, {
            scaleX: 1 / introTransform.scaleX * imageSettings.imageWidthEnd / this.introImg.clientWidth,
            scaleY: 1 / introTransform.scaleY * imageSettings.imageHeightEnd / this.introImg.clientHeight
        });
    }
    initEvents() {
        this.onClickIntro = () => this.onClickIntro();
        //this.onResize = () => this.onResize();
        this.intro.addEventListener('click', this.onClickIntro);
        //window.addEventListener('resize', this.onResize);
    }
    onResize() {
        if (!this.config.isThumbView)
            return false;
        this.intro.style.transform = 'none';
        this.introImg.style.transform = 'none';
        this.layout();
    }
    onClickIntro() {
        console.log('clicked');
        this.intro.removeEventListener('click', this.onClickIntro);
        this.config.isThumbView = false;
        gsap_1.gsap
            .timeline({
            onStart: function () {
                this.emit('start');
            },
            onComplete: function () {
                this.emit('end');
            }
        })
            .to(this.intro, {
            duration: 1,
            ease: 'expo.inOut',
            y: 0,
            scaleX: 1,
            scaleY: 1,
            onComplete: () => {
                this.emit('scrollready');
            }
        })
            .to(this.introImg, {
            duration: 1,
            ease: 'expo.inOut',
            scaleX: 1,
            scaleY: 1
        }, 0)
            .to([this.titleBlock, this.subTitleBlock], {
            duration: 0.8,
            ease: 'expo',
            startAt: { rotation: 3 },
            y: '0%',
            rotation: 0,
            stagger: 0.3
        }, 0.7);
    }
}
exports.default = Thumbmotion;
//# sourceMappingURL=thumbmotion.js.map