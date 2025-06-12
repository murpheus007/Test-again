         // Handle opening and closing of each FAQ item
         document.querySelectorAll('.faq-question').forEach((button) => {
            button.addEventListener('click', () => {
               const answer = button.nextElementSibling;

               // Toggle visibility
               answer.classList.toggle('open');

               // Optionally close others (uncomment this block to make it act like an accordion)
               document.querySelectorAll('.faq-answer').forEach((other) => {
                 if (other !== answer) other.classList.remove('open');
               });
            });
         });