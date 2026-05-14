const toggle = document.querySelector('#menuToggle');
const mobileMenu = document.querySelector('#mobileMenu');
if(toggle && mobileMenu){
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

const modal = document.querySelector('#imageModal');
const modalImg = document.querySelector('#modalImg');
const closeModal = document.querySelector('#closeModal');
document.querySelectorAll('[data-gallery]').forEach(img => {
  img.addEventListener('click', () => {
    if(!modal || !modalImg) return;
    modalImg.src = img.src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});
if(closeModal){ closeModal.addEventListener('click', () => { modal.classList.add('hidden'); modal.classList.remove('flex'); }); }
if(modal){ modal.addEventListener('click', e => { if(e.target === modal){ modal.classList.add('hidden'); modal.classList.remove('flex'); } }); }

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.remove('opacity-0','translate-y-8');
      entry.target.classList.add('opacity-100','translate-y-0');
    }
  });
},{threshold:.18});
revealItems.forEach(item => observer.observe(item));
