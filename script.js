document.addEventListener('DOMContentLoaded', () => {
   const navbar = document.getElementById('navbar');
   const navbarmenu = document.getElementById('nav-menu');
   const hamburger = document.getElementById('hamburger');
   const links = document.querySelectorAll('.nav-link');
   const sections = document.querySelectorAll('section');
   let lastScroll = 0;

   // Highlight active link on scroll
   const setActiveLink = () => {
      let scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
         const top = section.offsetTop;
         const bottom = top + section.offsetHeight;
         const id = section.getAttribute('id');

         if (scrollPos >= top && scrollPos < bottom) {
            links.forEach((link) => {
               link.classList.remove('active');
               if (link.getAttribute('href') === `#${id}`) {
                  link.classList.add('active');
               }
            });
         }
      });
   };

   // Navbar scrolled state
   const handleNavbarScroll = () => {
      if (window.scrollY > 20) {
         navbar.classList.add('scrolled');
         navbarmenu.classList.add('scrolled');
      } else {
         navbar.classList.remove('scrolled');
         navbarmenu.classList.remove('scrolled');
      }
   };

   // Navbar hide/show on scroll
   const handleNavbarVisibility = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 60) {
         // Scrolling down
         navbar.classList.add('hide');
         navbarmenu.classList.remove('active');
      } else {
         // Scrolling up
         navbar.classList.remove('hide');
         hamburger.classList.remove('active');
      }

      lastScroll = currentScroll;
   };

   // Scroll events
   window.addEventListener('scroll', () => {
      setActiveLink();
      handleNavbarScroll();
      handleNavbarVisibility();
   });

   // Initial run
   setActiveLink();
   handleNavbarScroll();
});
