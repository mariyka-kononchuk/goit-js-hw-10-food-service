const source = document.querySelector('#menu-template').innerHTML.trim();
console.log(source);
const template = Handlebars.compile(source);

const menuData = JSON.parse(json);
const markup = template(menuData);

console.log(markup);

const list = document.querySelector('.js-menu');
//list.append(...markup);
list.insertAdjacentHTML('afterbegin', markup);