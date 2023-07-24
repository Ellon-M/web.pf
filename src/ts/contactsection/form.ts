import { gsap } from 'gsap';

export class Form {
  backBtn: HTMLElement;
  nextBtnName: HTMLElement;
  nextBtnEmail: HTMLElement;
  nextBtnDetails: HTMLElement;
  form: HTMLElement;
  formBody: HTMLElement;
  formBodyName: HTMLElement;
  formBodyEmail: HTMLElement;
  formBodyDetails: HTMLElement;
  formScreen: HTMLElement;
  formName: HTMLElement;
  formEmail: HTMLElement;
  formDetails: HTMLElement;
  postMessage: HTMLElement;

  constructor() {
    this.backBtn = document.querySelector('.form-back-btn') as HTMLElement;
    this.nextBtnName = document.querySelector('.btn-name') as HTMLElement;
    this.nextBtnEmail = document.querySelector('.btn-email') as HTMLElement;
    this.nextBtnDetails = document.querySelector('.form-submit') as HTMLElement;
    this.form = document.querySelector('form') as HTMLFormElement;
    this.formBody = document.querySelector('.form-body') as HTMLElement;
    this.formBodyName = document.querySelector('.name-body') as HTMLElement;
    this.formBodyEmail = document.querySelector('.email-body') as HTMLElement;
    this.formBodyDetails = document.querySelector('.form-body-details') as HTMLElement;
    this.formScreen = document.querySelector('.form-screen') as HTMLElement;
    this.formName = document.querySelector('.form-name') as HTMLElement;
    this.formEmail = document.querySelector('.form-email') as HTMLElement;
    this.formDetails = document.querySelector('.form-details') as HTMLElement;
    this.postMessage = document.querySelector('.post-submit-message') as HTMLElement;

    this.formName.classList.remove('hidden');
    this.formEmail.classList.add('hidden');
    this.formDetails.classList.add('hidden');

    this.initEvents();
    this.initLoad();
  }

  initEvents() {
    this.nextBtnName.addEventListener('click', () => {
      this.toEmail();
    });

    this.nextBtnEmail.addEventListener('click', () => {
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue === '' || !emailRegex.test(emailValue)) {
        alert('Invalid email address. Please enter a valid email.');
      } else {
        this.toDetails();
      }
    });

    this.backBtn.addEventListener('click', () => {
      this.toName();
    });

    this.nextBtnDetails.addEventListener('click', (e) => {
      e.preventDefault();
      this.onSubmit();
    })
  }

  initLoad() {
    gsap.set(this.formScreen, {
      opacity: 0,
    });
    gsap.set(this.formBodyName, {
      opacity: 0,
      y: -150,
    });
    gsap.to(this.formScreen, {
      opacity: 1,
      ease: 'expo.out',
      duration: 1,
    });
    gsap.to(this.formBodyName, {
      opacity: 1,
      ease: 'expo',
      y: 0,
      duration: 1,
    });
  }

  toEmail() {
    gsap.set(this.formBodyEmail, {
      opacity: 1,
      y: 0,
    });
    gsap.to(this.formBodyName, {
      opacity: 0,
      y: -150,
      duration: .6,
      ease: 'sine.out',
      onComplete: () => {
        this.formName.classList.add('hidden');
        this.formEmail.classList.remove('hidden');
        gsap.fromTo(
          this.formEmail,
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 1, ease: 'expo' }
        );
      },
    });
  }

  toDetails() {
    gsap.set(this.formBodyDetails, {
      opacity: 1,
      y: 0,
    });
    gsap.to(this.formBodyEmail, {
      opacity: 0,
      y: -150,
      duration: .6,
      ease: 'sine.out',
      onComplete: () => {
        this.formEmail.classList.add('hidden');
        this.formDetails.classList.remove('hidden');
        gsap.fromTo(
          this.formBodyDetails,
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 1, ease: 'expo' }
        );
      },
    });
  }

  toName() {
    gsap.to(this.formBodyEmail, {
      opacity: 0,
      y: -150,
      duration: 0.5,
      ease: 'sine.out',
      onComplete: () => {
        this.formDetails.classList.add('hidden');
        this.formEmail.classList.add('hidden');
        this.formName.classList.remove('hidden');
        gsap.fromTo(
          this.formBodyName,
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 1, ease: 'expo' }
        );
      },
    });
    gsap.to(this.formBodyDetails, {
      opacity: 0,
      y: -150,
      duration: 0.5,
      ease: 'sine.out',
      onComplete: () => {
        this.formDetails.classList.add('hidden');
        this.formEmail.classList.add('hidden');
        this.formName.classList.remove('hidden');
        gsap.fromTo(
          this.formBodyName,
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 1, ease: 'expo' }
        );
      },
    });
  }

  onSubmit() {
    gsap.to(this.formBodyDetails, {
      opacity: 0,
      y: -150,
      duration: 0.8,
      ease: 'sine.out',
      onComplete: () => {
        this.form.classList.add('hidden');
        this.backBtn.classList.add('hidden');
        this.postMessage.classList.remove('hidden');
        gsap.fromTo(
          this.postMessage,
          { opacity: 0, y: -150 },
          { opacity: 1, y: 0, duration: 1, ease: 'expo' }
        );
      },
    });

    const formElement = document.querySelector('.form') as HTMLFormElement;
    formElement.submit();
  }
}
