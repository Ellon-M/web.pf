"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Smooth_1 = __importDefault(require("../components/Smooth"));
const landing_1 = require("./landing");
const marquee_1 = require("./marquee");
const nav_1 = __importDefault(require("./nav"));
const work_1 = require("./work");
const magnetic_1 = require("./magnetic");
const liquid_1 = require("./liquid");
const utils_1 = require("../utils");
const loader = document.querySelector('.loading-page');
const home = document.querySelector('.home-container');
let isPageLoaded = false;
let isNavigatingAway = false;
document.body.style.overflow = "hidden";
function isFirstLoad() {
    return sessionStorage.getItem('isPageLoaded') === null;
}
function markAsLoaded() {
    sessionStorage.setItem('isPageLoaded', 'true');
}
function deletePageLoadedFlag() {
    sessionStorage.removeItem('isPageLoaded');
}
window.addEventListener('beforeunload', () => {
    deletePageLoadedFlag();
});
window.addEventListener('popstate', () => {
    isNavigatingAway = true;
});
const progLoad = () => {
    return new Promise((resolve) => {
        var counter = 0;
        var c = 0;
        var h1 = document.querySelector(".loading-page .counter h1");
        var i = setInterval(function () {
            h1.textContent = c + "%";
            counter++;
            c++;
            if (counter === 102) {
                clearInterval(i);
                resolve();
            }
        }, 20);
    });
};
const initializeWords = () => {
    let words = document.querySelectorAll('.word');
    words.forEach((word) => new landing_1.Home(word));
};
const initializeElements = () => {
    let elements = document.querySelectorAll('.js-plane');
    elements.forEach((el) => new work_1.ScrollCanvas(el));
};
const initializeSticky = () => {
    let sticky = document.querySelector('.footer-btn');
    new magnetic_1.Magnetic(sticky);
};
const initializeLiquid = () => {
    new liquid_1.Liquid();
};
const initializeNavbar = () => {
    new nav_1.default();
};
const initializeMarquee = () => {
    new marquee_1.Marquee();
};
const initializeSmooth = () => {
    new Smooth_1.default();
};
function showTime() {
    var date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;
    setTimeout(showTime, 1000);
}
function handleLinkClick(event) {
    const link = event.currentTarget;
    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
        event.preventDefault(); // Prevent the default link behavior
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    }
}
// Add event listeners to the internal links to handle clicks
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
});
function performLoadingEffect() {
    progLoad().then(() => {
        home.classList.remove('loading');
        loader.style.display = "none";
        document.body.style.overflow = "auto";
        // Initialize other classes after loading is complete
        initializeWords();
        initializeElements();
        initializeSticky();
        initializeLiquid();
        initializeNavbar();
        initializeMarquee();
        initializeSmooth();
        markAsLoaded(); // Mark the page as loaded for the first time
    });
}
Promise.all([(0, utils_1.preloadImages)('.gl-img')]).then(() => {
    if (isFirstLoad()) {
        // This block will only execute on the first load of the page
        performLoadingEffect();
        showTime();
    }
    else {
        // This block will execute on subsequent loads or route changes within the same page
        if (!isNavigatingAway) {
            // If the user is not navigating away (just changing sections within the same page), perform the loading effect
            performLoadingEffect();
            showTime();
        }
        else {
            home.classList.remove('loading');
            loader.style.display = "none";
            document.body.style.overflow = "auto";
            isNavigatingAway = false;
        }
    }
});
//# sourceMappingURL=index.js.map