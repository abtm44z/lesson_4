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
const wolfFacts = [
	'Une meute est généralement une famille : les adultes et leurs jeunes de l’année.',
	'Le loup peut parcourir de longues distances pour trouver nourriture et partenaires.',
	'Le hurlement aide les loups à communiquer et à signaler leur présence à distance.',
	'Le loup gris peut vivre dans des milieux très différents, des forêts aux régions arctiques.'
];

if (factButton && factText) {
	let factIndex = wolfFacts.indexOf(factText.textContent);
	factButton.addEventListener('click', () => {
		factIndex = (factIndex + 1) % wolfFacts.length;
		factText.textContent = wolfFacts[factIndex];
	});
}