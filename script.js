// script.js - Interactive Features for Safe Place

// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.section, .card');
const appearOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Card click interaction
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Optional: Reveal alert when clicking the header
const header = document.querySelector('header h1');
header.addEventListener('click', () => {
  alert('Welcome to Safe Place – your safe space to grow and heal!');
});

console.log('Interactive scripts loaded.');
