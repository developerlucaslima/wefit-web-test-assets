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

  header.style.backgroundColor = 'var(--gray)';
  header.style.color = 'var(--white)';

  header.style.textAlign = 'right';

  const headerBtn = header.querySelector('.btn');
  if (headerBtn) {
    headerBtn.classList.remove('btn-primary');
    headerBtn.classList.add('btn-success');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const listGroup = document.getElementById('list-group');
  if (!listGroup) return;

  const firstItem = listGroup.querySelector('.list-group-item.active');
  if (firstItem) {
    firstItem.classList.remove('active');
  }

  const fourthItem = document.createElement('li');
  fourthItem.className = 'list-group-item active'; 
  fourthItem.textContent = 'Quarto item';

  const fifthItem = document.createElement('li');
  fifthItem.className = 'list-group-item';
  fifthItem.textContent = 'Quinto item';

  listGroup.appendChild(fourthItem);
  listGroup.appendChild(fifthItem);
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('main-menu');
  if (!menu) return;

  menu.classList.remove('btn-group-vertical');
  menu.classList.add('btn-group');

  menu.querySelectorAll('.btn').forEach(btn => {
    btn.style.marginRight = '4px';
    btn.style.borderRadius = '0.25rem';
  });
});
