// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-spy: highlight active nav link
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.links a');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.links a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => spyObserver.observe(section));

// Terminal typing effect
const typedOutput = document.getElementById('typedOutput');
const message = "Full-Stack Python Developer building reliable web apps end-to-end.";
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  typedOutput.textContent = message;
} else {
  let i = 0;
  const typeChar = () => {
    if (i < message.length) {
      typedOutput.textContent += message.charAt(i);
      i++;
      setTimeout(typeChar, 28);
    }
  };
  // start slightly after page load for a natural feel
  setTimeout(typeChar, 500);
}
