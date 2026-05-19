/* =========================
   АНИМАЦИИ
========================= */

const animatedItems = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
}, {
  threshold: 0.15
});

animatedItems.forEach((item) => {
  observer.observe(item);
});


/* =========================
   ОТПРАВКА ФОРМЫ
========================= */

const form = document.getElementById('wedding-form');
const successText = document.querySelector('.form-success');

form.addEventListener('submit', async function(e){

  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(
    'https://api.web3forms.com/submit',
    {
      method:'POST',
      body:formData
    }
  );

  const result = await response.json();

  if(result.success){

    successText.style.display = 'block';

    form.reset();

  }

});