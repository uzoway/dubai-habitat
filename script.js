// Calling the cloudinary responsive method for image responsiveness
let cl = cloudinary.Cloudinary.new({cloud_name: "dp20bvzhn"}); 
cl.responsive();


// Initialize and set up Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// REGISTER SCROLLTRIGGER & CUSTOM EASE PLUGIN
gsap.registerPlugin(ScrollTrigger, CustomEase);

// CUSTOM EASES
CustomEase.create("drop", "M0,0 C0.007,0.011 0.01,-0.002 0.019,0 0.072,0.012 0.078,0.009 0.09,0.014 0.116,0.024 0.091,0.022 0.168,0.036 0.203,0.041 0.474,0.132 0.544,0.206 0.725,0.382 0.916,0.642 0.976,0.864 0.99,0.912 0.993,1 1,1");
CustomEase.create("ease-out-quad", "0.25,0.46,0.45,0.94");
CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");
CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");
CustomEase.create("ease-out-quint", "0.23,1,0.32,1");
CustomEase.create("ease-out-expo", "0.19,1,0.22,1");
CustomEase.create("ease-out-circ", "0.075,0.82,0.165,1");
CustomEase.create("ease-in-out-quad", "0.455,0.03,0.515,0.955");
CustomEase.create("ease-in-out-cubic", "0.645,0.045,0.355,1");
CustomEase.create("ease-in-out-quart", "0.77,0,0.175,1");
CustomEase.create("ease-in-out-quint", "0.86,0,0.07,1");
CustomEase.create("ease-in-out-expo", "1,0,0,1");
CustomEase.create("ease-in-out-circ", "0.785,0.135,0.15,0.86");


// // Function to run the gsap animations only when the DOM is done loading
// function initializeAnimations() {

//   // Hero animation using matchmedia
//   let mm = gsap.matchMedia();

//   mm.add({ isDesktop: "(min-width: 280px) and (prefers-reduced-motion: no-preference)"}, (context) => {
//     let { isDesktop } = context.conditions;

//   })


// }

// // Run initializeAnimations as the DOM is completely loaded
// window.addEventListener("DOMContentLoaded", initializeAnimations);


// ABOUT SECTION MODAL TOGGLE
const modal = document.querySelector("#modal");
const modalCloser = document.querySelector("#modal-closer");
const modalOpener = document.querySelector("#modal-opener");
const aboutSection = document.querySelector("#about-section");

modalOpener.addEventListener("click", () => {
  modal.classList.add("active");
  aboutSection.classList.add("active");
});

modalCloser.addEventListener("click", () => {
  modal.classList.remove("active");
  aboutSection.classList.remove("active");
});


// Loader & Hero section animation
const homeLoaderAnimation = () => {
  const heroTl = gsap.timeline({
    defaults: {
      ease: "ease-out-quart"
    }
  })

  .to(".preloader__logoContainer", { autoAlpha: 1, y: 0, duration: .7, delay: 1 })
  .to(".preloader__logoContainer--overlay", { xPercent: "35" }, 1.3)
  .to(".preloader__logoContainer--overlay", { xPercent: "100", delay: .6, duration: 0.8 })
  .to(".preloader__logoContainer", { autoAlpha: 0, yPercent: "-100", duration: 0.6 })
  .to(".preloader__overlay--green", { yPercent: "-100", ease: "ease-in-out-quart", duration: 1.1 }, ">-0.73")
  .to(".preloader__overlay--light", { yPercent: "-100", ease: "ease-in-out-quart", duration: 1.3 }, "<")
  .to(".navigation__link--image", { autoAlpha: 1, x: "0", y: "0", rotateX: "0deg", duration: 1.1 }, ">-0.2")
  .to("#navigation-link", { autoAlpha: 1, x: 0, duration: 1.2 }, ">-0.9")
  .from("#header-heading", { y: 200, skewY: 15, duration: .8, stagger: 0.2 }, ">-1.2")
  .fromTo("#hero-link", { autoAlpha: 0, skewY: 5, y: 50 }, { autoAlpha: 1, skewY: 0, y: 0, duration: .4, }, ">-0.6")
}

const sectionsAnimation = () => {
  // About section title & subtitle animation
  const textAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 20%"
    }
  });
  textAnimation.from("#section-text", { y: 200, skewY: 15, duration: 0.8, stagger: 0.1, ease: "ease-out-quart" })
  .from(".about__image", { clipPath: "polygon(0 100%, 100% 100%, 100% 99.9%, 0% 99.9%)", duration: 1.2, ease: "ease-in-out-quart" }, "<")


  // About section paragraph & button fade effect
  const aboutFadeEffect = gsap.timeline({
    scrollTrigger: {
      trigger: ".about__fade", 
      start: "top 90%"
    }
  });
  aboutFadeEffect.fromTo(".about__fade", { opacity: 0 }, { autoAlpha: 1, stagger: 0.2, duration: .8, ease: "ease-out-quart" })
}


document.addEventListener( 'DOMContentLoaded', function() {  

  homeLoaderAnimation();
  sectionsAnimation();

  // SPLIDE CAROUSEL 
  var splide = new Splide( '.splide', {
    perMove: 1,
    gap: "1rem",
    autoWidth: "true",
    autoHeight: "true",
    type: "loop",
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 2,
    }
  }).mount( window.splide.Extensions );

  // Contact us image slider carousel
  var splide = new Splide( '#contact-splide', {
    perMove: 1,
    gap: "1rem",
    autoWidth: "true",
    autoHeight: "true",
    type: "loop",
    arrows: false,
    pagination: false,
    drag: false,
    swipe: false,
    autoScroll: {
      speed: 3.2,
      pauseOnHover: false,
    }
  }).mount( window.splide.Extensions );
} );
