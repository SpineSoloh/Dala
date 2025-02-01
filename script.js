
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

function showTab(tabName) {
  let contents = document.querySelectorAll(".tab-content");
  let buttons = document.querySelectorAll(".tab-button");

  // Hide all content sections
  contents.forEach(content => content.style.display = "none");

  // Remove active class from all buttons
  buttons.forEach(button => button.classList.remove("active"));

  // Show selected tab
  document.getElementById(tabName).style.display = "flex";

  // Add active class to clicked button
  event.currentTarget.classList.add("active");
}

document.querySelector(".search-btn").addEventListener("click", function() {
  let query = document.querySelector(".search-bar input").value;
  if (query) {
      alert("Searching for: " + query);
  } else {
      alert("Please enter an address, city, zip, or neighborhood.");
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");
  const footer = document.querySelector("footer");
  const navbar = document.querySelector(".nav-bar"); // Check if this is correct

  // Observe when footer enters the viewport
  const observer = new IntersectionObserver(
      (entries) => {
          if (entries[0].isIntersecting) {
              backToTop.classList.add("show");
          } else {
              backToTop.classList.remove("show");
          }
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is visible
  );

  observer.observe(footer);

  // Smoothly scroll to nav-bar when clicking the arrow
  window.scrollToNav = function () {
      if (navbar) {
          navbar.scrollIntoView({ behavior: "smooth" });
      } else {
          console.error("Navbar not found! Check the class or ID.");
      }
  };
});

  