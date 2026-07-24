// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Quote form
const quoteForm   = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    const formData = new FormData(quoteForm);
    try {
      const response = await fetch(quoteForm.action || '#', {
        method: 'POST', body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        quoteForm.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        submitBtn.textContent = 'Send my request';
        submitBtn.disabled = false;
        alert('Something went wrong. Please call MacKenzie directly at (502) 396-0754.');
      }
    } catch {
      quoteForm.style.display = 'none';
      formSuccess.style.display = 'block';
    }
  });
}
