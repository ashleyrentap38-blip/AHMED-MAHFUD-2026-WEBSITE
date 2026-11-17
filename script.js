// EDIT THIS when Ahmed provides an email address. Leave blank until then.
const AHMED_EMAIL = '';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: 0.07});
  reveals.forEach(el => observer.observe(el));
} else { reveals.forEach(el => el.classList.add('visible')); }
const filters = document.querySelectorAll('.filter');
const photos = document.querySelectorAll('.gallery-item');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
  photos.forEach(photo => { photo.hidden = button.dataset.filter !== 'all' && photo.dataset.category !== button.dataset.filter; });
}));
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const close = () => { lightbox.hidden = true; document.body.style.overflow = ''; };
  photos.forEach(photo => photo.addEventListener('click', () => {
    const imagePath = photo.dataset.image;
    if (!imagePath) { alert('Photo placeholder: add your image first. See README.txt.'); return; }
    lightbox.querySelector('img').src = imagePath;
    lightbox.querySelector('img').alt = photo.dataset.title;
    lightbox.querySelector('p').textContent = photo.dataset.title;
    lightbox.hidden = false; document.body.style.overflow = 'hidden';
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) close(); });
}
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const status = document.querySelector('#form-status');
  if (!AHMED_EMAIL) { status.textContent = 'Please add Ahmed’s real email to AHMED_EMAIL in script.js first.'; return; }
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent('Message from ' + name + ' (Biodata Website)');
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
  window.location.href = 'mailto:' + AHMED_EMAIL + '?subject=' + subject + '&body=' + body;
  status.textContent = 'Opening your email application. Please send the message there.';
});
