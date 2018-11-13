var togglerOpen = document.querySelector('.open-button');
var togglerClose = document.querySelector('.close-button');
var navBarNotFixed = document.querySelector('.navbar');
var navLogoContainer = navBarNotFixed.querySelector('.nav-container > .logo-container');
var navListOpen = document.querySelector('.header-navlist-container');
var primaryInfoP = document.querySelector('.primary-info > p');
var primaryInfoH1Span = document.querySelector('.primary-info > h1 > span');
var scheduleLocation = document.querySelector('.primary-info > .schedule-loc');
var organizedBy = document.querySelector('.primary-info > .organized-by');
var getTickets = document.querySelector('.primary-info > .tickets-container');
var ticketAvailability = document.querySelector('.primary-info > .ticket-availability');

// Animation effects should not be repeated after they have played once and the user has scrolled past the header.
function removeEffects(){
    navLogoContainer.classList.remove('opacity');
    navLogoContainer.classList.remove('slide-in-from-top');
    primaryInfoP.classList.remove('opacity');
    primaryInfoP.classList.remove('slide-in-from-bottom');
    primaryInfoH1Span.classList.remove('opacity');
    primaryInfoH1Span.classList.remove('slide-in-from-bottom');
    scheduleLocation.classList.remove('opacity');
    scheduleLocation.classList.remove('slide-in-from-bottom');
    organizedBy.classList.remove('opacity');
    organizedBy.classList.remove('slide-in-from-bottom');
    getTickets.classList.remove('opacity');
    getTickets.classList.remove('slide-in-from-bottom');
    ticketAvailability.classList.remove('opacity');
    ticketAvailability.classList.remove('slide-in-from-bottom');
    document.querySelector('.geometric1').classList.remove('opacity');
    document.querySelector('.geometric1').style.animationName = 'none';
    document.querySelector('.geometric2').classList.remove('opacity');
    document.querySelector('.geometric2').style.animationName = 'none';
    document.querySelector('.geometric3').classList.remove('opacity');
    document.querySelector('.geometric3').style.animationName = 'none';
    document.querySelector('.geometric4').classList.remove('opacity');
    document.querySelector('.geometric4').style.animationName = 'none';
}
var accessedOrNot = localStorage.getItem('pageAccessed');
if (accessedOrNot) {
  removeEffects();
}

// Toggler
function openNavlist(event) {
  event.preventDefault();
  this.classList.toggle('open-list');
  navListOpen.classList.toggle('navlist-open');
}

function closeNavlist(event) {
  event.preventDefault();
  togglerOpen.classList.toggle('open-list');
  navListOpen.classList.toggle('navlist-open');
}

togglerOpen.addEventListener('click', openNavlist);
togglerClose.addEventListener('click', closeNavlist);

function scaleIncrease() {
  this.style.transform = 'scale3d(1, 1, 1)';
}

function scaleDecrease() {
  this.style.transform = 'scale3d(.88, .88, .88)';
}

togglerOpen.addEventListener('mouseout', scaleIncrease);
togglerClose.addEventListener('mouseout', scaleIncrease);
togglerOpen.addEventListener('mouseover', scaleDecrease);
togglerClose.addEventListener('mouseover', scaleDecrease);

// Fixed menu
var previousPosition = window.pageYOffset;

function fixedNav() {
  var currentPosition = window.pageYOffset;
  if ((previousPosition < currentPosition) || (currentPosition <= 630)) {
    document.body.style.paddingTop = 0;
    navBarNotFixed.classList.remove('nav-fixed');
  } else {
    document.body.style.paddingTop = navBarNotFixed.offsetHeight + 'px';
    navBarNotFixed.classList.add('nav-fixed');
    localStorage.setItem('pageAccessed', 'yes');
  }
  previousPosition = currentPosition;
}

window.addEventListener('scroll', fixedNav);

// Replace animation with static elements when user begins to scroll.
function noAnimationAfterScroll(){
    var presentPosition = window.pageYOffset;
    if (presentPosition > 500){
        removeEffects();
    }
}
window.addEventListener('scroll', noAnimationAfterScroll);