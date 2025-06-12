const hero = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');
const heroText = document.getElementById('hero-text');

const slides = [
   {
      background: 'url("images/group1.png")',
      title: 'The Complete FX and CFD Trading Experience',
      text: 'Award-winning platforms, tight spreads, low commissions and dedicated support. See why we’re the trading partner of choice for 1,000,000 traders around the world',
   },
   {
      background: 'url("images/group2.png")',
      title: 'A World Class Trading Experience',
      text: 'Be empowered to trade CFDs on FX, Stocks, Commodities, Crypto, Indices & Options. Get advanced tools, personalised support, uncompromising security.',
   },
];

let currentSlide = 0;

function updateHero() {
   const slide = slides[currentSlide];
   hero.style.backgroundImage = slide.background;
   heroTitle.textContent = slide.title;
   heroText.textContent = slide.text;

   currentSlide = (currentSlide + 1) % slides.length;
}

updateHero(); // Initial
setInterval(updateHero, 8000); // every 8 seconds


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   navMenu.classList.toggle('active');
});

// Submenu toggles for mobile
document.querySelectorAll('.toggle-submenu').forEach(toggle => {
   toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('open');
   });
});
