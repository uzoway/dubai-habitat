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


// Register scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger, CustomEase, Draggable);

//Custom eases 
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


// Function to run the gsap animations only when the DOM is done loading
function initializeAnimations() {

  // Hero animation using matchmedia
  let mm = gsap.matchMedia();

  mm.add({ isDesktop: "(min-width: 280px) and (prefers-reduced-motion: no-preference)"}, (context) => {
    let { isDesktop } = context.conditions;

  })


}





// Run initializeAnimations as the DOM is completely loaded
window.addEventListener("DOMContentLoaded", initializeAnimations);