"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home = `
<div class="loading-page">
  <div class="counter">
    <h1>0%</h1>
  </div>
</div>
<div class="home-container loading">
<div class="home-nav-top-container home-nav-up">
  <div class="home-nav-container-inner">
    <div class="home-nav-top-left">
      <a href="/" aria-current="page" class="home-nav-top-logo-link">E. M.</a>
    </div>
    <div class="home-nav-top-right">
      <button aria-label="menu" class="home-nav-burger">
        <div class="home-nav-burger-line"></div>
        <div class="home-nav-burger-line"></div>
      </button>
      <nav class="home-nav-top-nav">
        <ul class="home-nav-top-list">
          <li class="home-nav-top-item">
            <a href="#projects" aria-current="page" class="">Projects</a>
          </li>
          <li class="home-nav-top-item">
            <a href="#skills" aria-current="page" class="">Skills</a>
          </li>
          <li class="home-nav-top-item">
            <a href="#about" aria-current="page" class="">About</a>
          </li>
          <li class="home-nav-top-item">
            <a href ="#contacts" aria-current="page" class="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
<div data-scroll>
<div data-scroll-content>
  <div class="main">
    <div id="home" class="home">
      <div class="home-top">
       <h1 class="home-h1 splitted">
         <span class="word">
           <span class="char">
             <span class="char-inner-sub">E</span>
           </span>
           <span class="char">
             <span class="char-inner">L</span>
           </span>
           <span class="char">
             <span class="char-inner">L</span>
           </span>
           <span class="char">
             <span class="char-inner-sub">O</span>
           </span>
           <span class="char">
             <span class="char-inner">N</span>
           </span>
         </span>
         <span class="word">
           <span class="char">
             <span class="char-inner ita">モ</span>
           </span>
           <span class="char">
             <span class="char-inner-sub">ル</span>
           </span>
           <span class="char">
             <span class="char-inner">デ</span>
           </span>
           <span class="char">
             <span class="char-inner">カ</span>
           </span>
           <span class="char">
             <span class="char-inner">イ</span>
           </span>
         </span>
         </h1>
         <div class="home-nav-container">
           <nav class="home-nav opaque">
               <ul class="home-nav-top">
                 <li><a href="#home">Home</a></li>
                 <li><a href="#about">About</a></li>
                 <li><a href="#projects">Projects</a></li>
                 <li><a href="#skills">Skills</a></li>
                 <li><a href="#contacts">Contacts</a></li> 
               </ul>
           </nav>
         </div>
      </div>
      <div class="home-bottom">
        <div class="home-bottom-left opaque">
          I thrive on creativity in problem solving, as well as discovery of new ideas and solutions.
        </div>
        <div class="home-bottom-right splitted">
          <span class="word">
            <span class="char">
             <span class="char-inner">F</span>
            </span>
            <span class="char">
             <span class="char-inner-sub">U</span>
            </span>
            <span class="char">
             <span class="char-inner">L</span>
            </span>
            <span class="char">
             <span class="char-inner-sub">L</span>
            </span>
            <span class="char">
             <span class="char-inner">-</span>
            </span>
            <span class="char">
             <span class="char-inner ita">S</span>
            </span>
            <span class="char">
             <span class="char-inner">T</span>
            </span>
            <span class="char">
             <span class="char-inner">A</span>
            </span>
            <span class="char">
             <span class="char-inner-sub ita">C</span>
            </span>
            <span class="char">
             <span class="char-inner">K</span>
            </span>
          </span>
          <span class="word">
            <span class="char">
              <span class="char-inner ita">E</span>
            </span>
            <span class="char">
              <span class="char-inner">N</span>
            </span>
            <span class="char">
              <span class="char-inner">G</span>
            </span>
            <span class="char">
              <span class="char-inner-sub">I</span>
            </span>
            <span class="char">
              <span class="char-inner">N</span>
            </span>
            <span class="char">
              <span class="char-inner-sub">E</span>
            </span>
            <span class="char">
              <span class="char-inner">E</span>
            </span>
            <span class="char">
              <span class="char-inner-sub">R</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  <div id="projects" class="sec-2-container">
    <h2 class="projects-title">
      <span class="projects-title-h2">Some</span>
      <span class="projects-title-h2"><span class="ita">o</span>f my</span>
      <span class="projects-title-h2">projects</span>
    </h2>
    <div class="projects-description"></div>
    <div class="content">
      <div class="work" data-src="https://github.com/Lancelot-SO/carbnb-frontend">
        <div class="work-date">06 / 23</div>
        <div class="work-title">CarBnB</div>
        <figure class="work-image js-plane">
          <div class="aspect" style="--aspect: 151.75%"></div>
          <div class="gl-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222277/flavien-7z0vOADmu7c-unsplash_tukidx.jpg"></div>
        </figure>
        <figure class="work-image no-plane">
          <div class="mob-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222277/flavien-7z0vOADmu7c-unsplash_tukidx.jpg"></div>
        </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">Like AirBnB, but for cars. Users can rent and reserve cars for specific dates.</div>
            <div class="work-bottom-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="work" data-src="https://spmetrics.netlify.app/">
        <div class="work-date">03 / 23</div>
        <div class="work-title">Spotify Metrics</div>
          <figure class="work-image js-plane">
            <div class="aspect" style="--aspect: 109.25%"></div>
            <div class="gl-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222277/david-svihovec-xMH2vteiEY4-unsplash_g9oz9i.jpg"></div>
          </figure>
          <figure class="work-image no-plane">
            <div class="mob-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222277/david-svihovec-xMH2vteiEY4-unsplash_g9oz9i.jpg"></div>
          </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">displays featured Spotify playlists based on the Spotify algorithm selection; shows details of the most popular tracks in each playlist.</div>
            <div class="work-bottom-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="work" data-src="https://github.com/Ellon-M/space-exploration">
        <div class="work-date">11 / 22</div>
        <div class="work-title">Space Exploration</div>
          <figure class="work-image js-plane">
            <div class="aspect" style="--aspect: 140.25%"></div>
            <div class="gl-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222261/spacex-9dF7pCyaM9s-unsplash_cfshxa.jpg"></div>
          </figure>
          <figure class="work-image no-plane">
            <div class="mob-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222261/spacex-9dF7pCyaM9s-unsplash_cfshxa.jpg"></div>
          </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">A web application for a company that provides commercial and scientific space travel services. Allows users to book rockets and join selected space missions.</div>
            <div class="work-bottom-icon">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="work" data-src="https://github.com/Ellon-M/OlympicsDash">
        <div class="work-date">04 / 22</div>
        <div class="work-title">Olympics Dash</div>
          <figure class="work-image js-plane">
            <div class="aspect" style="--aspect: 75.25%"></div>
            <div class="gl-img" data-src="https://images.unsplash.com/photo-1595663823598-931cd6b854fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></div>
          </figure>
          <figure class="work-image no-plane">
            <div class="mob-img" data-src="https://images.unsplash.com/photo-1595663823598-931cd6b854fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></div>
          </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">Plotly-Dash interface of previously held summer and winter olympic games dating back to the 1920s.</div>
            <div class="work-bottom-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="work" data-src="https://casavenida.com/">
        <div class="work-date">01 / 22</div>
        <div class="work-title">Casavenida</div>
          <figure class="work-image js-plane">
            <div class="aspect" style="--aspect: 86.5%"></div>
            <div class="gl-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222264/jessica-furtney-YOoucEImrKw-unsplash_uhnmja.jpg"></div>  
          </figure>
          <figure class="work-image no-plane">
            <div class="mob-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222264/jessica-furtney-YOoucEImrKw-unsplash_uhnmja.jpg"></div>  
          </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">Real Estate Search Engine that links buyers with verified direct sellers of Real Estate.</div>
            <div class="work-bottom-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="work" data-src="https://car-dealer-40c1f.web.app/">
        <div class="work-date">10 / 21</div>
        <div class="work-title">Car Dealers </div>
          <figure class="work-image js-plane">
            <div class="aspect" style="--aspect: 94.5%"></div>
            <div class="gl-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222260/mos-sukjaroenkraisri-njHhuZCuRjo-unsplash_gyhls0.jpg"></div>
          </figure>
          <figure class="work-image no-plane">
            <div class="mob-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222260/mos-sukjaroenkraisri-njHhuZCuRjo-unsplash_gyhls0.jpg"></div>
          </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">Design-oriented automobile display application that features cars for sale.</div>
            <div class="work-bottom-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
      <div class="work" data-src="https://github.com/Ellon-M/studio-tour/">
        <div class="work-date">10 / 22</div>
        <div class="work-title">Studio Tour</div>
          <figure class="work-image js-plane">
            <div class="aspect" style="--aspect: 90.75%"></div>
            <div class="gl-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222245/aditya-vyas-wmXVABZ7JBk-unsplash_kbd1m9.jpg"></div>
          </figure>
          <figure class="work-image no-plane">
            <div class="mob-img" data-src="https://res.cloudinary.com/denphvygd/image/upload/v1691222245/aditya-vyas-wmXVABZ7JBk-unsplash_kbd1m9.jpg"></div>
          </figure>
        <div class="work-bottom">
          <div class="hl"></div>
          <div class="work-bottom-content">
            <div class="work-bottom-text">A web page for a popular film intended to exhibit and display information about a tour of the studio where the film was produced. </div>
            <div class="work-bottom-icon">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="s-arrow work-bottom__icon-svg"><path d="M20 100V90H82.95L0 7.05L7.05 0L90 82.95V20H100V100H20Z"></path></svg>
            </div>
          </div>
          <div class="hl"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="skills" class="section-skills">
    <div class="skills-title">
      <div class="skills-title-text">My skills</div>
      <div class="skills-marquee">
        <div class="skills-item">&nbsp; — My skills</div>
        <div class="skills-item">&nbsp; — My skills</div>
        <div class="skills-item">&nbsp; — My skills</div>
        <div class="skills-item">&nbsp; — My skills</div>
        <div class="skills-item">&nbsp; — My skills</div>
        <div class="skills-item">&nbsp; — My skills</div>
      </div>
    </div>
    <div class="skills">
      <div class="skill">
        <div class="skill-name">HTML/CSS</div>
        <div class="skill-desc">Basic markup technologies that bring my designs and apps to the browser</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">JS/TS</div>
        <div class="skill-desc">(JavaScript/TypeScript) for frontend implementation and broswer logic</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">React.js</div>
        <div class="skill-desc">Favorite Frontend framework, for apps that require heavy functionality and reactivity</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">Solid.js</div>
        <div class="skill-desc">I use it for the same purposes as React, but for better, more optimal performance in large apps that have a lot of DOM updates</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">Next.js</div>
        <div class="skill-desc">Always hand in hand with React - for server side rendering and static site generation</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">GraphQL</div>
        <div class="skill-desc">For writing API queries from an existing server-side backend implementation</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">Ruby on Rails</div>
        <div class="skill-desc">Server side implemenation. Writing API's and DB models</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">Node.js</div>
        <div class="skill-desc">For the same reasons I use Ruby, but used mainly with serverless technologies </div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">PHP/Laravel</div>
        <div class="skill-desc">Favorite PHP framework. For server side implementations</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">Docker</div>
        <div class="skill-desc">DevOps purposes. App containerization</div>
        <div class="skill-line"></div>
      </div>
      <div class="skill">
        <div class="skill-name">Kubernates</div>
        <div class="skill-desc">Hand in hand with docker - creating clusters for management and deployment of containerized apps</div>
        <div class="skill-line"></div>
      </div>
    </div>
  </div>
  <div id="about" class="about">
    <div class="about-container">
      <h2> ab<span class="ita">o</span>ut myself </h2>
      <div class="about-more-info">
        <p> I love to engineer stimulating, interactive but user friendly experiences on the web </p>
        <p> I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE </p>
        <p>I always desire to achieve the most optimal solution to a problem above all else</p>
      </div>
    </div>
  </div>
  <div id="contacts" class="section-contacts">
    <div class="section-before-footer">
    <div class="before-footer">
      <h2 class="before-footer-h2">
        Get in touch
      </h2>
    </div>
    </div>
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-content-grid">
          <div class="footer-text">   
            Please contact me in any way you like
          </div>
          <div class="footer-links">
            <div class="footer-links-title">
              Social
            </div>
            <div class="footer-links-items">
              <div class="footer-links-item">
                <div class="footer-num">01</div>
                <a href="https://www.linkedin.com/in/ellon-m/" class="footer-link">LinkedIn</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">02</div>
                <a href="https://github.com/Ellon-M" class="footer-link">Github</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">03</div>
                <a href="https://wellfound.com/u/ellon-mordecai" class="footer-link">Wellfound</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">04</div>
                <a href="https://www.behance.net/ellon/" class="footer-link">Behance</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">05</div>
                <a href="https://ellon-m.medium.com" class="footer-link">Medium</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">06</div>
                <a href="https://www.instagram.com/ocuvine/" class="footer-link">Instagram</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">07</div>
                <a href="https://www.twitter.com/ellonm4/" class="footer-link">Twitter</a>
              </div>
            </div>
          </div>
          <div class="footer-contact-info">
            <div class="footer-links-title">
              Contacts
            </div>
            <div class="footer-links-items">
              <div class="footer-links-item">
                <div class="footer-num">01</div>
                <a href="" class="footer-link">mordecellon@gmail.com</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">02</div>
                <a href="" class="footer-link">e11on@icloud.com</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">03</div>
                <a href="" class="footer-link">+254 (706) 528 027</a>
              </div>
              <div class="footer-links-item">
                <div class="footer-num">04</div>
                <a href="https://wa.me/+254706528027" class="footer-link">WhatsApp</a>
              </div>
            </div>
          </div>
          <div class="footer-end">
            <div class="footer-other-links">
              <div class="footer-links-title">
                Other Pages
              </div>
              <div class="footer-links-items">
                <div class="footer-links-items-g">
                  <div class="footer-links-item">
                    <div class="footer-num">01</div>
                    <a href="#home" class="footer-link">home</a>
                  </div>
                </div>
                <div class="footer-links-items-g">
                  <div class="footer-links-item">
                    <div class="footer-num">02</div>
                    <a href="#about" class="footer-link">about</a>
                  </div>
                  <div class="footer-links-item">
                    <div class="footer-num">03</div>
                    <a href="#skills" class="footer-link">skills</a>
                  </div>
                </div>
                <div class="footer-links-items-g">
                  <div class="footer-links-item">
                    <div class="footer-num">04</div>
                    <a href="#projects" class="footer-link">projects</a>
                  </div>
                  <div class="footer-links-item">
                    <div class="footer-num">05</div>
                    <a href="#contacts" class="footer-link">contacts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="footer-btn-small">
            <span class="footer-btn-text"><span>Send a request</span></span>
            <span class="footer-btn-sticky">
              <span class="footer-btn-bg"></span>
              <span class="footer-btn-border"></span>
            </span>
          </button>
          <button class="button footer-btn">
            <span class="footer-btn-text"><span>Send a request</span></span>
            <span class="footer-btn-sticky">
              <span class="footer-btn-bg"></span>
              <span class="footer-btn-border"></span>
            </span>
            <svg viewBox="0 0 200 200" class="footer-request-blob">
            <path fill="#FFFFFF" d="M13.7,-27.7C18,-21.3,21.8,-18,25,-14C28.2,-9.9,30.8,-4.9,32,0.7C33.3,6.4,33.3,12.8,30.6,17.7C27.8,22.6,22.4,25.9,16.8,39.3C11.3,52.7,5.6,76.2,-3.5,82.2C-12.6,88.2,-25.1,76.8,-35.3,66C-45.4,55.2,-53,45.1,-60,34.2C-67.1,23.4,-73.4,11.7,-70.7,1.6C-68,-8.6,-56.2,-17.1,-50.5,-30.2C-44.8,-43.3,-45.1,-60.9,-37.6,-65.5C-30.2,-70.2,-15.1,-61.8,-5.2,-52.8C4.7,-43.8,9.4,-34.2,13.7,-27.7Z" transform="translate(100 100)" id="request-btn"/>
            </svg>
            </svg>
            <div class="footer-btn-sticky-area"></div>
          </button>
        </div>
        </div>
        <div class="footer-info">
          <div class="footer-info-time">
            <div class="footer-info-time-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.0011V9.99614C20 7.03697 18.7117 4.37947 16.6658 2.55197L16.6558 2.54364C16.6306 2.5164 16.6023 2.49208 16.5717 2.47114L16.57 2.47031C14.753 0.874914 12.4163 -0.00273996 9.99834 0.001972C7.47167 0.001972 5.165 0.940305 3.40667 2.48864L3.4175 2.47947C3.39631 2.49555 3.37677 2.51369 3.35917 2.53364V2.53447C2.30211 3.47046 1.456 4.62038 0.876884 5.90805C0.297771 7.19572 -0.00112241 8.59174 3.16722e-06 10.0036C3.16722e-06 12.962 1.28667 15.6195 3.33084 17.4478L3.34084 17.4561C3.36731 17.4862 3.39692 17.5133 3.42917 17.537L3.43084 17.5378C5.24737 19.1308 7.58224 20.0072 9.99834 20.0028C12.4257 20.0065 14.7706 19.1221 16.5908 17.5161L16.58 17.5253C17.6554 16.5904 18.5174 15.4353 19.1077 14.1384C19.698 12.8414 20.0029 11.4328 20.0017 10.0078V10.002L20 10.0011ZM16.2817 16.5053C15.7863 16.1046 15.2536 15.7524 14.6908 15.4536L14.6367 15.427C15.1475 13.9545 15.455 12.257 15.4842 10.4911V10.4778H19.035C18.9153 12.7623 17.932 14.916 16.2842 16.5028L16.2817 16.5053ZM10.4767 15.2511C11.5458 15.3086 12.545 15.5436 13.4667 15.9261L13.4067 15.9045C12.6683 17.5878 11.6292 18.7445 10.4767 18.9986V15.2511ZM10.4767 14.2978V10.4778H14.5333C14.5012 12.0597 14.2269 13.6273 13.72 15.1261L13.7525 15.017C12.7179 14.5917 11.6175 14.3487 10.5 14.2986L10.4775 14.2978H10.4767ZM10.4767 9.52447V5.70447C11.6243 5.65209 12.7541 5.40086 13.8158 4.96197L13.75 4.98614C14.2125 6.33531 14.4967 7.89031 14.5333 9.50697V9.52447H10.4767ZM10.4767 4.75114V1.00531C11.6292 1.25947 12.6683 2.41114 13.4067 4.09947C12.545 4.45781 11.5458 4.69197 10.5008 4.75031L10.4767 4.75114ZM12.855 1.41781C13.837 1.74533 14.7553 2.23919 15.57 2.87781L15.5508 2.86281C15.1817 3.15281 14.7675 3.42614 14.3308 3.66364L14.2842 3.68697C13.9313 2.85424 13.4462 2.08403 12.8475 1.40614L12.855 1.41531V1.41781ZM9.52167 1.00781V4.75114C8.49375 4.6987 7.48243 4.47039 6.53167 4.07614L6.59167 4.09781C7.33334 2.41447 8.37084 1.25864 9.52334 1.00447L9.52167 1.00781ZM5.715 3.68447C5.26328 3.44144 4.83286 3.16072 4.42834 2.84531L4.44834 2.86031C5.23928 2.24043 6.12893 1.75814 7.08 1.43364L7.14334 1.41447C6.56035 2.074 6.08532 2.82156 5.73584 3.62947L5.715 3.68364V3.68447ZM9.52334 5.70364V9.52364H5.46667C5.50334 7.88947 5.7875 6.33447 6.2825 4.87614L6.25 4.98531C7.28422 5.40986 8.384 5.6526 9.50084 5.70281L9.52334 5.70364ZM9.52334 10.477V14.297C8.3757 14.3494 7.24586 14.6006 6.18417 15.0395L6.25 15.0153C5.7875 13.667 5.50334 12.1111 5.46667 10.4945V10.477H9.52334ZM9.52334 15.2503V18.9961C8.37084 18.742 7.33167 17.5903 6.59334 15.902C7.455 15.5436 8.45417 15.3103 9.49917 15.252L9.52334 15.2511V15.2503ZM7.14834 18.5836C6.16663 18.2571 5.24829 17.7644 4.43334 17.127L4.45334 17.142C4.8225 16.852 5.23667 16.5786 5.67334 16.3411L5.72 16.3178C6.06991 17.1509 6.55505 17.9204 7.15584 18.5953L7.14834 18.587V18.5836ZM14.285 16.317C14.7683 16.5795 15.1825 16.852 15.5717 17.1561L15.5517 17.1411C14.7607 17.761 13.8711 18.2433 12.92 18.5678L12.8567 18.587C13.4397 17.9277 13.9147 17.1805 14.2642 16.3728L14.285 16.3186V16.317ZM19.035 9.52447H15.4842C15.4586 7.80026 15.1611 6.0909 14.6025 4.45947L14.6367 4.57447C15.2253 4.26452 15.7827 3.89838 16.3008 3.48114L16.2808 3.49614C17.9252 5.077 18.9089 7.22267 19.0333 9.50031L19.0342 9.52364L19.035 9.52447ZM3.71834 3.49697C4.19834 3.88697 4.7375 4.24447 5.30917 4.54864L5.36334 4.57531C4.8525 6.04781 4.545 7.74531 4.51584 9.51114V9.52447H0.96417C1.08391 7.23997 2.06721 5.08631 3.715 3.49947L3.7175 3.49697H3.71834ZM0.965003 10.4778H4.51584C4.54138 12.202 4.83893 13.9114 5.3975 15.5428L5.36334 15.4278C4.7375 15.7603 4.19917 16.1178 3.69917 16.5211L3.71917 16.5061C2.07478 14.9253 1.09114 12.7796 0.96667 10.502L0.965837 10.4786L0.965003 10.4778Z" fill="white"></path></svg>
            </div>
            <div class="footer-info-time-country">
              Kenya
            </div>
            <div class="footer-info-time-hrs">
            [00:00]
            </div>
          </div>
          <div class="footer-info-copyright">
            © 2023. Ellon Mordecai. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  </div>
  </div>
</div>
</div>
</div>
`;
//# sourceMappingURL=home.js.map