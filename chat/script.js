document.querySelectorAll('[data-year]').forEach((element) => {
	element.textContent = new Date().getFullYear();
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
	menuToggle.addEventListener('click', () => {
		const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!isExpanded));
		menuToggle.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');
		siteNav.classList.toggle('is-open', !isExpanded);
	});

	siteNav.addEventListener('click', (event) => {
		if (event.target.closest('a')) {
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
			siteNav.classList.remove('is-open');
		}
	});
}

const factButton = document.querySelector('.fact-button');
const factText = document.querySelector('[data-fact]');
const catFacts = [
	'Les chats passent une grande partie de leur journée à dormir ou à se reposer.',
	'Le ronronnement peut accompagner un moment de détente, mais aussi aider le chat à s’apaiser.',
	'Chaque chat possède un motif de truffe unique, un peu comme une empreinte.',
	'Les moustaches aident le chat à percevoir son environnement proche et les changements d’air.'
];

if (factButton && factText) {
	let factIndex = catFacts.indexOf(factText.textContent);
	factButton.addEventListener('click', () => {
		factIndex = (factIndex + 1) % catFacts.length;
		factText.textContent = catFacts[factIndex];
	});
}