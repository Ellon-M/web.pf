import { gsap } from 'gsap';
import { EventEmitter } from 'events';
import { calcWinsize } from '../utils';


let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

interface EmitType {
  emit: gsap.Callback;
}

export default class Thumbmotion extends EventEmitter {
  el: Element;
  content: Element;
  intro: HTMLElement;
  introImg: HTMLElement;
  titleBlock: Element;
  titleMeta: Element;
  subTitleBlock: Element;
  subTitleMeta: Element;
  config: any;

  constructor(el: Element) {
    super();
    this.el = el;
    this.content = document.querySelector('.content') as Element;
    this.intro = this.el.querySelector('.work-image') as HTMLElement;
    this.introImg = this.el.querySelector('.aspect') as HTMLElement;
    this.titleMeta = this.el.querySelector('work-title') as Element;
    this.titleBlock = this.el.querySelector('work-title-full') as Element;
    this.subTitleMeta = this.el.querySelector('work-bottom-text') as Element;
    this.subTitleBlock = this.el.querySelector('work-description') as Element;
    console.log(this.intro);

    this.config = {
      isThumbView: true
    };

    this.layout();
    this.initEvents();
    
  }

  layout() {
    gsap.set(this.titleBlock, {y: '100%'});
    gsap.set(this.subTitleBlock, {y: '100%'});

    const bodyComputedStyle = getComputedStyle(document.body);

    let imageSettings = {
      imageWidthStart: winsize.width,
      imageHeightStart: parseFloat(bodyComputedStyle.getPropertyValue('--image-height-start')),
      imageWidthEnd: parseFloat(bodyComputedStyle.getPropertyValue('--image-width-end')),
      imageHeightEnd: parseFloat(bodyComputedStyle.getPropertyValue('--image-height-end')),
      metaOffset: parseFloat(bodyComputedStyle.getPropertyValue('--meta-offset'))
    }

    let introRect = this.intro.getBoundingClientRect();
    let introTransform = {
        scaleX: imageSettings.imageWidthEnd / imageSettings.imageWidthStart,
        scaleY: imageSettings.imageHeightEnd / imageSettings.imageHeightStart,
        y: (winsize.height/2 - introRect.top) - introRect.height/2
    };

    gsap.set(this.intro, {
      y: introTransform.y,
      scaleX: introTransform.scaleX,
      scaleY: introTransform.scaleY
    });

    gsap.set(this.introImg, {
        scaleX: 1/introTransform.scaleX * imageSettings.imageWidthEnd / this.introImg.clientWidth,
        scaleY: 1/introTransform.scaleY * imageSettings.imageHeightEnd / this.introImg.clientHeight
    });

  }

  initEvents() {
    this.onClickIntro = () => this.onClickIntro();
    //this.onResize = () => this.onResize();
    this.intro.addEventListener('click', this.onClickIntro);
    //window.addEventListener('resize', this.onResize);
  }

  onResize() {
    if ( !this.config.isThumbView ) return false;
    this.intro.style.transform = 'none';
    this.introImg.style.transform ='none';
    this.layout();
  }

  onClickIntro() {
    console.log('clicked');
    
    this.intro.removeEventListener('click', this.onClickIntro);
    this.config.isThumbView = false;
    
    gsap
    .timeline({
      onStart: function(this: EmitType) {
        this.emit('start');
      },
      onComplete: function(this: EmitType) {
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
        startAt: {rotation: 3},
        y: '0%',
        rotation: 0,
        stagger: 0.3
    }, 0.7);
}
}