const menuButton = document.querySelector('button.menu');
const navMenu = document.querySelector('nav > ul');

if (menuButton && navMenu) {
    // initialize accessible state
    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.addEventListener('click', () => {
        const isNowHidden = navMenu.classList.toggle('hidden');
        // aria-expanded should be true when menu is visible
        menuButton.setAttribute('aria-expanded', String(!isNowHidden));
    });

    // close menu when clicking outside (optional UX)
    document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('hidden')) {
            if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
                navMenu.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
}