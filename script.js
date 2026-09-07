const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.case-card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  cards.forEach(card => {
    card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
  });
}));
