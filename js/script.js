var toggler = document.querySelector('.toggle-button');

var open = false;
toggler.addEventListener('click', function (event) {
  event.preventDefault();
  if (!open) {
    this.classList.add('open');
    open = true;
  } else {
    this.classList.remove('open');
    open = false;
  }
});

// var toggler = document.querySelector('.toggle-button');

// function navListOpen() {
//     getNavListBackground.classList.remove('mobileBackgroundWidth0');
//     getNavListBackground.classList.add('mobileBackgroundWidth100');
//     toggler.classList.toggle("open");
//     alert('Button clicked!');
// }

// function navListClose() {
//     getNavListBackground.classList.add('mobileBackgroundWidth0');
//     getNavListBackground.classList.remove('mobileBackgroundWidth100');
//     toggler.classList.remove("open");
//     return false;
// }

// toggler.addEventListener('click', navListOpen);

// toggler.addEventListener('click', function (event) {
//     var open = false;
//     event.preventDefault();
//     if (!open) {
//         this.classList.add('open');
//         open = true;
//     } else {
//         this.classList.remove('open');
//         open = false;
//     }
// });