import Smooth from '../components/Smooth';
import { Home } from './landing';
import { Marquee } from './marquee';
import Navbar from './nav';
import { ScrollCanvas } from './work';
import { Magnetic } from './magnetic';
import { Liquid } from './liquid';
import { preloadFonts, preloadImages } from '../utils';

const loader = document.querySelector('.loading-page') as HTMLElement;
const home = document.querySelector('.home-container') as HTMLElement;

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
  return new Promise<void>((resolve) => { 
    var counter = 0;
    var c = 0;
    var h1 = document.querySelector(".loading-page .counter h1") as HTMLElement;
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
  words.forEach((word) => new Home(word));
};

const initializeElements = () => {
  let elements = document.querySelectorAll('.js-plane');
  elements.forEach((el) => new ScrollCanvas(el));
};

const initializeSticky = () => {
  let sticky = document.querySelector('.footer-btn') as HTMLElement;
  new Magnetic(sticky);
};

const initializeLiquid = () => {
  new Liquid();
};

const initializeNavbar = () => {
  new Navbar();
};

const initializeMarquee = () => {
  new Marquee();
};

const initializeSmooth = () => {
  new Smooth();
};

function showTime(){
  var date = new Date();
  let h: string | number = date.getHours(); // 0 - 23
  let m: string | number = date.getMinutes(); // 0 - 59
  let s: string | number = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClock")!.innerText = time;
  document.getElementById("MyClock")!.textContent = time;
  
  setTimeout(showTime, 1000);
  
}

function handleLinkClick(event: any) {
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
    loader.style.display = "none";
    // Initialize other classes after loading is complete
    setTimeout(() => {
      home.classList.remove('loading');
      document.body.style.overflow = "auto";
      initializeWords();
    }, 250);
    initializeElements();
    initializeSticky();
    initializeLiquid();
    initializeNavbar();
    initializeMarquee();
    initializeSmooth();

    markAsLoaded(); // Mark the page as loaded for the first time
  });
}

Promise.all([preloadImages('.gl-img')]).then(() => {
  if (isFirstLoad()) {
    // This block will only execute on the first load of the page
    performLoadingEffect();
    showTime();
  } else {
    // This block will execute on subsequent loads or route changes within the same page
    if (!isNavigatingAway) {
      // If the user is not navigating away (just changing sections within the same page), perform the loading effect
      performLoadingEffect();
      showTime();
    } else {
      home.classList.remove('loading');
      loader.style.display = "none";
      document.body.style.overflow = "auto";

      isNavigatingAway = false;
    }
  }
});