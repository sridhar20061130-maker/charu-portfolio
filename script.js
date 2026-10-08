const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', (e) => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
  cursorRing.animate(
    { left: e.clientX + 'px', top: e.clientY + 'px' },
    { duration: 450, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.2,1)' }
  );
});

document.querySelectorAll('a,button,.skill-chip,.timeline-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.12;
    const y = (e.clientY - r.top - r.height / 2) * 0.12;
    btn.style.transform = `translate(${x}px,${y}px)`;
  });
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.topbar nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '70px' : '';
  nav.style.left = open ? '0' : '';
  nav.style.right = open ? '0' : '';
  nav.style.padding = open ? '24px' : '';
  nav.style.background = open ? 'rgba(8,9,11,.96)' : '';
  nav.style.flexDirection = open ? 'column' : '';
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.display = '';
    }
  });
});

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (hero) {
    hero.querySelector('.hero-grid').style.transform = `translateY(${y * 0.12}px)`;
    hero.querySelector('.orb-a').style.transform = `translateY(${y * 0.05}px)`;
  }
});
