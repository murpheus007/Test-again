document.addEventListener('DOMContentLoaded', () => {
   const navbar = document.getElementById('navbar');
   const links = document.querySelectorAll('.nav-link');
   const sections = document.querySelectorAll('section');

   // Highlight active link on scroll
   const setActiveLink = () => {
      let scrollPos = window.scrollY + 100; // +100 to trigger a bit earlier

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

   // Add class to navbar when not at top
   const handleNavbarScroll = () => {
      if (window.scrollY > 20) {
         navbar.classList.add('scrolled');
      } else {
         navbar.classList.remove('scrolled');
      }
   };

   // On scroll
   window.addEventListener('scroll', () => {
      setActiveLink();
      handleNavbarScroll();
   });

   // Initial check
   setActiveLink();
   handleNavbarScroll();
});

let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
   const currentScroll = window.pageYOffset;

   if (currentScroll > lastScroll && currentScroll > 60) {
      // Scrolling down
      navbar.classList.add('hide');
   } else {
      // Scrolling up
      navbar.classList.remove('hide');
   }

   lastScroll = currentScroll;
});
