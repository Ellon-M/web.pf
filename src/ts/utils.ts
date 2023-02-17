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
}

const preloadImages = (selector: string) => {
  return new Promise((resolve) => {
    imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  });
}