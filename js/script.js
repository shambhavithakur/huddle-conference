var togglerOpen = document.querySelector('.open-button');
var togglerClose = document.querySelector('.close-button');
var navBarNotFixed = document.querySelector('.navbar');
var navFixed = document.querySelector('.nav-fixed');
var navListOpen = document.querySelector('.header-navlist-container');

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
    }
    previousPosition = currentPosition;
}

window.addEventListener('scroll', fixedNav);