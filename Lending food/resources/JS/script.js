// For Sticky navigation
const sectionFeatures = document.querySelector('.section-features');
const topOfSec = sectionFeatures.offsetTop;

function fixNav(){
  if (window.scrollY >= topOfSec - 60){
    document.querySelector('.navigation').classList.add('sticky');
  }else{
    document.querySelector('.navigation').classList.remove('sticky');
  }

}

window.addEventListener('scroll', fixNav);

// // Scrolling on buttons
// const sectionSignUp = document.querySelector('.signUp');
// const btnToSignUp = document.querySelector('.scrollToSignUp');

// btnToSignUp.addEventListener('click', function(){
//   console.log('hi');
//   sectionSignUp.scrollIntoView();
// });

// Animation on Scroll
const sectionHowItWorks = document.querySelector('.section-steps')
const topOfHow = sectionHowItWorks.offsetTop;
const textHowIt = document.querySelector('.how');
const iPhone = document.querySelector('.app-screen');
const steps = document.querySelector('.steps')

const sectionCities = document.querySelector('.section-cities');
const topOfCities = sectionCities.offsetTop;

const sectionStartEating = document.querySelector('.signUp')
const topOfEating = sectionStartEating.offsetTop;

function addAnimateOnRow(){
  if (window.scrollY >= topOfSec - 420){
    sectionFeatures.classList.add('fadeIn');
    sectionFeatures.classList.add('animated');
  }
  if(window.scrollY >= topOfHow - 180){
    textHowIt.classList.add('fadeInDown');
    textHowIt.classList.add('animated');
    iPhone.classList.add('fadeInLeft');
    iPhone.classList.add('animated');
    steps.classList.add('fadeInRight');
    steps.classList.add('animated');
  }
  if(window.scrollY >= topOfCities - 200){
    sectionCities.classList.add('fadeIn');
    sectionCities.classList.add('animated');
  }
  if (window.scrollY >= topOfEating - 300){
    sectionStartEating.classList.add('fadeIn');
    sectionStartEating.classList.add('animated');
  }
}

window.addEventListener('scroll', addAnimateOnRow);

// Mobile nav
const btn = document.querySelector('.mobile-nav-icon');
btn.addEventListener('click', function(){
  document.querySelector('.main-nav').classList.toggle('current');
  document.getElementById('icon-navi').classList.toggle('ion-navicon-round');
  document.getElementById('icon-navi').classList.toggle('ion-close-round');
});
