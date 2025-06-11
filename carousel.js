document.addEventListener('DOMContentLoaded', function () {
   const wrapper = document.getElementById('testimonialWrapper');
   const indicators = document.getElementById('testimonialIndicators').children;
   const swiperContainer = document.querySelector('.testimonials-section');
   const slides = wrapper.children;
   let index = 0;
   const total = slides.length;

   // To prevent animation when hovered on

   swiperContainer.addEventListener('mouseenter', () =>
      clearInterval(interval),
   );
   swiperContainer.addEventListener('mouseleave', () => {
      interval = setInterval(nextSlide, 6000);
   });

   // Clone first slide
   const firstClone = slides[0].cloneNode(true);
   wrapper.appendChild(firstClone);

   const updateIndicators = () => {
      for (let i = 0; i < indicators.length; i++) {
         indicators[i].classList.toggle('active', i === index);
      }
   };

   const goToSlide = (i) => {
      wrapper.style.transition = 'transform 0.6s ease-in-out';
      wrapper.style.transform = `translateX(-${i * 100}%)`;
   };

   const resetToStart = () => {
      wrapper.style.transition = 'none';
      wrapper.style.transform = 'translateX(0)';
      index = 0;
      updateIndicators();
   };

   const nextSlide = () => {
      index++;
      goToSlide(index);

      if (index === total) {
         setTimeout(() => {
            resetToStart();
         }, 600);
      } else {
         updateIndicators();
      }
   };

   let interval = setInterval(nextSlide, 6000);

   Array.from(indicators).forEach((dot, i) => {
      dot.addEventListener('click', () => {
         index = i;
         goToSlide(index);
         updateIndicators();
         clearInterval(interval);
         interval = setInterval(nextSlide, 6000);
      });
   });

   let startX = 0;

wrapper.addEventListener(
   'touchstart',
   (e) => {
      startX = e.touches[0].clientX;
   },
   { passive: true },
);

// To allow for scrolling

wrapper.addEventListener('touchend', (e) => {
   const endX = e.changedTouches[0].clientX;
   const diff = startX - endX;

   if (Math.abs(diff) > 50) {
      // minimum swipe distance
      if (diff > 0) {
         // swipe left
         index++;
         if (index >= total) {
            goToSlide(index);
            setTimeout(resetToStart, 600);
         } else {
            goToSlide(index);
            updateIndicators();
         }
      } else {
         // swipe right
         if (index > 0) {
            index--;
            goToSlide(index);
            updateIndicators();
         }
      }

      clearInterval(interval);
      interval = setInterval(nextSlide, 6000);
   }
});
});


