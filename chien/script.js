const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  navigation?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const filterButtons = document.querySelectorAll('[data-filter]');
const breedCards = document.querySelectorAll('[data-size]');
const emptyMessage = document.querySelector('.filter-empty');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedSize = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle('is-active', isSelected);
      filterButton.setAttribute('aria-pressed', String(isSelected));
    });

    breedCards.forEach((card) => {
      const isVisible = selectedSize === 'all' || card.dataset.size === selectedSize;
      card.hidden = !isVisible;
      visibleCount += Number(isVisible);
    });

    if (emptyMessage) emptyMessage.hidden = visibleCount > 0;
  });
});