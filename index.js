document.addEventListener('DOMContentLoaded',()=>{
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const homeLink = document.getElementById('homeLink');
  const sections = document.querySelectorAll('.section');

  hamburger.addEventListener('click',()=>navMenu.classList.toggle('open'));

  navMenu.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      const target = link.dataset.section;
      sections.forEach(s=>s.classList.remove('active'));
      document.getElementById(target).classList.add('active');
      navMenu.classList.remove('open');
    });
  });

  homeLink.addEventListener('click',()=>{
    sections.forEach(s=>s.classList.remove('active'));
    document.getElementById('home').classList.add('active');
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Background slideshow
  const hero = document.querySelector('.hero');
  const images = [
    'https://source.unsplash.com/1600x900/?architecture,interior,modern',
    'https://source.unsplash.com/1600x900/?digital,design,workspace',
    'https://source.unsplash.com/1600x900/?engineering,blueprint',
    'https://source.unsplash.com/1600x900/?interior,design,elegant'
  ];
  let current = 0;
  setInterval(()=>{
    current = (current+1)%images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
  },5000);
});
