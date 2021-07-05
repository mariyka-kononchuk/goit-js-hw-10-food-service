import templateMenuCard from '../templates/menu-card.hbs';
import menuData from '../menu.json';


const listMenuCards = document.querySelector('.js-menu');

const menuCards = templateMenuCard(menuData);

listMenuCards.innerHTML = menuCards;