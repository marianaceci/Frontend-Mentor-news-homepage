const openButton = document.querySelector('#open-menu');
const menu = document.querySelector('#show-menu');
const accent = document.querySelector('#accent');

openButton.addEventListener('click', () => {
    menu.classList.add('show__menu-transition')
    accent.classList.add('accent-transition');
});

const closeButton = document.querySelector('#close-menu');

closeButton.addEventListener('click', () => {
    menu.classList.remove('show__menu-transition')
    accent.classList.remove('accent-transition');
});