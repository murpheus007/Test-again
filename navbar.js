document.addEventListener('DOMContentLoaded', () => {
   const hamburger = document.getElementById('hamburger');
   const nav = document.getElementById('nav-menu');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
   });
});
