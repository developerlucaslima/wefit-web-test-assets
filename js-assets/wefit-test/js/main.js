document.addEventListener('DOMContentLoaded', () => {
  const cardsRow = document.getElementById('cards-row');
  if (!cardsRow) return;

  const order = ['nature-card', 'animals-card', 'people-card', 'tech-card'];

  for (const id of order) {
    const el = document.getElementById(id);
    if (el) cardsRow.appendChild(el);
  }

  const animalsBtn = cardsRow.querySelector('#animals-card .btn');
  if (animalsBtn) {
    animalsBtn.classList.remove('btn-primary');
    animalsBtn.classList.add('btn-success');
  }
});
