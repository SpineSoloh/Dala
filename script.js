
const navbar = document.querySelector('.navbar');
const searchbar = document.querySelector('#searchbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // User is scrolling down
    navbar.classList.add('hidden');
    searchbar.classList.add('visible');
  } else {
    // User is scrolling up
    navbar.classList.remove('hidden');
    searchbar.classList.remove('visible');
  }
  lastScrollY = window.scrollY;
});
