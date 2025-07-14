"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Navbar {
    constructor() {
        this.didScroll = false;
        this.lastScrollTop = 0;
        this.delta = 5;
        this.navbar = document.querySelector('.home-nav-top-container');
        this.navbarItems = [...document.querySelectorAll('.home-nav-top-item')];
        this.navbarHeight = this.navbar.offsetHeight;
        this.navLinks = document.querySelector('.home-nav-top-nav');
        this.navBurger = document.querySelector('.home-nav-burger');
        this.initEvents();
        setInterval(() => {
            this.checkScroll();
        }, 150);
    }
    initEvents() {
        window.addEventListener('scroll', () => {
            this.didScroll = true;
            this.navLinks.classList.remove('open');
        });
        this.navBurger.addEventListener('click', (e) => {
            this.navLinks.classList.toggle('open');
        });
        const navLinksLinks = document.querySelectorAll('.home-nav-top-item a');
        navLinksLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
                this.navLinks.classList.remove('open');
            });
        });
        window.addEventListener('click', (e) => {
            const isClickedInside = this.navBurger.contains(e.target) || this.navLinks.contains(e.target);
            if (!isClickedInside) {
                this.navLinks.classList.remove('open');
            }
        });
    }
    checkScroll() {
        if (this.didScroll) {
            this.hasScrolled();
            this.didScroll = false;
        }
    }
    hasScrolled() {
        let st = window.pageYOffset;
        if (Math.abs(this.lastScrollTop - st) <= this.delta)
            return;
        if (st > this.lastScrollTop && st > this.navbarHeight) {
            this.navAnim();
            this.navbar.classList.add('home-nav-up');
            this.navbarItems.forEach((item) => {
                item.classList.add('home-nav-up');
            });
            this.navbar.classList.remove('home-nav-down');
            this.navbarItems.forEach((item) => {
                item.classList.remove('home-nav-down');
            });
        }
        else {
            const height = Math.max(document.body.getBoundingClientRect().height, document.querySelector('html').getBoundingClientRect().height);
            if (st + window.innerHeight < height) {
                this.navAnim();
                this.navbar.classList.remove('home-nav-up');
                this.navbarItems.forEach((item) => {
                    item.classList.remove('home-nav-up');
                });
                this.navbar.classList.add('home-nav-down');
                this.navbarItems.forEach((item) => {
                    item.classList.add('home-nav-down');
                });
            }
            if (st <= 150) {
                this.navAnim();
                this.navbar.classList.add('home-nav-up');
                this.navbarItems.forEach((item) => {
                    item.classList.add('home-nav-up');
                });
                this.navbar.classList.remove('home-nav-down');
                this.navbarItems.forEach((item) => {
                    item.classList.remove('home-nav-down');
                });
            }
        }
        this.lastScrollTop = st;
    }
    navAnim() {
        this.navbarItems.forEach((item, index) => {
            item.classList.add(`home-nav-delay-${index}`);
        });
    }
}
exports.default = Navbar;
//# sourceMappingURL=nav.js.map