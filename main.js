import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initLiquidEther } from './LiquidEther.js';

// Init background
initLiquidEther(document.getElementById('liquid-bg'), {
  colors: ['#5227FF', '#FF9FFC', '#B19EEF'],
  mouseForce: 7,
  cursorSize: 100,
  viscous: 40,
  resolution: 0.35,
  iterationsPoisson: 16,
  iterationsViscous: 16,
});

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. CURSEUR CUSTOMISÉ & EFFET MAGNÉTIQUE
// ==========================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const magneticElements = document.querySelectorAll('.magnetic');

let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    gsap.set(follower, {
      css: { left: posX, top: posY }
    });
    
    gsap.set(cursor, {
      css: { left: mouseX, top: mouseY }
    });
  }
});

document.addEventListener("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Effet magnétique
magneticElements.forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const bounding = el.getBoundingClientRect();
    const centerX = bounding.left + bounding.width / 2;
    const centerY = bounding.top + bounding.height / 2;
    
    const distX = (e.clientX - centerX) * 0.3;
    const distY = (e.clientY - centerY) * 0.3;
    
    gsap.to(el, {
      x: distX,
      y: distY,
      duration: 0.4,
      ease: "power2.out"
    });
    
    // Le follower s'agrandit légèrement
    gsap.to(follower, {
      width: 60,
      height: 60,
      backgroundColor: "rgba(255,255,255,0.1)",
      duration: 0.3
    });
  });
  
  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
    
    gsap.to(follower, {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      duration: 0.3
    });
  });
});

// Agrandir le curseur sur les projets
const projects = document.querySelectorAll('.project-item');
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    gsap.to(follower, { scale: 1.5, duration: 0.3 });
  });
  project.addEventListener('mouseleave', () => {
    gsap.to(follower, { scale: 1, duration: 0.3 });
  });
});

// ==========================================
// 2. ANIMATIONS AU CHARGEMENT (INTRO)
// ==========================================
// Encapsulation des mots pour l'animation Y-axis
document.querySelectorAll('.hero-title .line').forEach(line => {
    line.innerHTML = `<span>${line.innerHTML}</span>`;
});

const tl = gsap.timeline();

tl.fromTo('.hero-title .line span', 
    { y: "100%" },
    { y: "0%", duration: 1.2, ease: "power4.out", stagger: 0.15 },
    "+=0.2"
  )
  .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.8")
  .fromTo('.hero-desc', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
    "-=0.6"
  )
  .to('.scroll-indicator', { opacity: 1, duration: 1 }, "-=0.4");


// ==========================================
// 3. ANIMATIONS AU DEFILEMENT (SCROLL)
// ==========================================

// Le bandeux texte tourne à l'infini
gsap.to('.marquee-track', {
  xPercent: -50,
  ease: "none",
  duration: 12,
  repeat: -1
});

// Projects Scroll Reveal
gsap.utils.toArray('.project-item').forEach(project => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top 85%", // Déclenche quand le haut du projet est à 85% de l'écran
    },
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out"
  });
});

// Effet Parallax sur le titre de la section contact
gsap.from('.contact-title', {
  scrollTrigger: {
    trigger: '.contact',
    start: "top bottom",
    end: "bottom top",
    scrub: 1 // Relie l'animation au vrai défilement
  },
  y: -100, // Monte au fur et à mesure
  opacity: 0.5
});
