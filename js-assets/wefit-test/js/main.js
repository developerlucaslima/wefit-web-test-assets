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

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header-jumbotron');
  if (!header) return;

  header.style.backgroundColor = 'var(--gray-dark)';
  header.style.color = 'var(--white)';

  header.style.textAlign = 'right';

  const headerBtn = header.querySelector('.btn');
  if (headerBtn) {
    headerBtn.classList.remove('btn-primary');
    headerBtn.classList.add('btn-success');
  }
});
