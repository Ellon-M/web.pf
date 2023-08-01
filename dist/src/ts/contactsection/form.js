"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const gsap_1 = require("gsap");
class Form {
    constructor() {
        this.animIn = () => {
            this.bodyIn = gsap_1.gsap.to(this.formBodyName, {
                opacity: 1,
                ease: 'expo',
                y: 0,
                duration: 1,
            });
        };
        this.backBtn = document.querySelector('.form-back-btn');
        this.nextBtnName = document.querySelector('.btn-name');
        this.nextBtnEmail = document.querySelector('.btn-email');
        this.nextBtnDetails = document.querySelector('.form-submit');
        this.form = document.querySelector('form');
        this.formBody = document.querySelector('.form-body');
        this.formBodyName = document.querySelector('.name-body');
        this.formBodyEmail = document.querySelector('.email-body');
        this.formBodyDetails = document.querySelector('.form-body-details');
        this.formScreen = document.querySelector('.form-screen');
        this.formName = document.querySelector('.form-name');
        this.formEmail = document.querySelector('.form-email');
        this.formDetails = document.querySelector('.form-details');
        this.postMessage = document.querySelector('.post-submit-message');
        this.closeBtn = document.querySelector('.form-close-btn');
        this.formName.classList.remove('hidden');
        this.formEmail.classList.add('hidden');
        this.formDetails.classList.add('hidden');
        this.initLoad();
        this.initEvents();
    }
    initEvents() {
        this.nextBtnName.addEventListener('click', () => {
            this.toEmail();
        });
        this.nextBtnEmail.addEventListener('click', () => {
            const emailInput = document.getElementById('email');
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailValue === '' || !emailRegex.test(emailValue)) {
                alert('Invalid email address. Please enter a valid email.');
            }
            else {
                this.toDetails();
            }
        });
        this.backBtn.addEventListener('click', () => {
            this.toName();
        });
        this.nextBtnDetails.addEventListener('click', (e) => {
            e.preventDefault();
            this.onSubmit();
        });
        this.closeBtn.addEventListener('click', () => {
            this.close();
        });
    }
    initLoad() {
        this.formBodyName.classList.remove('hidden');
        gsap_1.gsap.set(this.formScreen, {
            opacity: 0,
        });
        gsap_1.gsap.set(this.formBodyName, {
            opacity: 0,
            y: -150,
        });
        gsap_1.gsap.to(this.formScreen, {
            opacity: 1,
            ease: 'expo.out',
            duration: 1,
        });
        this.animIn();
    }
    close() {
        gsap_1.gsap.to(this.formScreen, {
            startAt: { opacity: 1 },
            opacity: 0,
            duration: 0.6,
            ease: 'expo.out',
            onComplete: () => {
                this.formBodyName.classList.add('hidden');
                this.bodyIn.kill();
                window.location.assign('/');
            }
        });
    }
    toEmail() {
        gsap_1.gsap.set(this.formBodyEmail, {
            opacity: 1,
            y: 0,
        });
        gsap_1.gsap.to(this.formBodyName, {
            opacity: 0,
            y: -150,
            duration: .6,
            ease: 'sine.out',
            onComplete: () => {
                this.formName.classList.add('hidden');
                this.formEmail.classList.remove('hidden');
                gsap_1.gsap.fromTo(this.formEmail, { opacity: 0, y: -150 }, { opacity: 1, y: 0, duration: 1, ease: 'expo' });
            },
        });
    }
    toDetails() {
        gsap_1.gsap.set(this.formBodyDetails, {
            opacity: 1,
            y: 0,
        });
        gsap_1.gsap.to(this.formBodyEmail, {
            opacity: 0,
            y: -150,
            duration: .6,
            ease: 'sine.out',
            onComplete: () => {
                this.formEmail.classList.add('hidden');
                this.formDetails.classList.remove('hidden');
                gsap_1.gsap.fromTo(this.formBodyDetails, { opacity: 0, y: -150 }, { opacity: 1, y: 0, duration: 1, ease: 'expo' });
            },
        });
    }
    toName() {
        gsap_1.gsap.to(this.formBodyEmail, {
            opacity: 0,
            y: -150,
            duration: 0.5,
            ease: 'sine.out',
            onComplete: () => {
                this.formDetails.classList.add('hidden');
                this.formEmail.classList.add('hidden');
                this.formName.classList.remove('hidden');
                gsap_1.gsap.fromTo(this.formBodyName, { opacity: 0, y: -150 }, { opacity: 1, y: 0, duration: 1, ease: 'expo' });
            },
        });
        gsap_1.gsap.to(this.formBodyDetails, {
            opacity: 0,
            y: -150,
            duration: 0.5,
            ease: 'sine.out',
            onComplete: () => {
                this.formDetails.classList.add('hidden');
                this.formEmail.classList.add('hidden');
                this.formName.classList.remove('hidden');
                gsap_1.gsap.fromTo(this.formBodyName, { opacity: 0, y: -150 }, { opacity: 1, y: 0, duration: 1, ease: 'expo' });
            },
        });
    }
    onSubmit() {
        gsap_1.gsap.to(this.formBodyDetails, {
            opacity: 0,
            y: -150,
            duration: 0.8,
            ease: 'sine.out',
            onComplete: () => {
                this.form.classList.add('hidden');
                this.backBtn.classList.add('hidden');
                this.postMessage.classList.remove('hidden');
                gsap_1.gsap.fromTo(this.postMessage, { opacity: 0, y: -150 }, { opacity: 1, y: 0, duration: 1, ease: 'expo' });
            },
        });
        const formElement = document.querySelector('.form');
        formElement.submit();
    }
}
exports.Form = Form;
//# sourceMappingURL=form.js.map