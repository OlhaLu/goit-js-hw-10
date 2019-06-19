import menu from '../menu.json';
import itemTemplate from '../templates/menu-item.hbs';
import '../css/styles.css';

const listProduct = document.querySelector('.menu');

// создаем елементы по шаблону
function createMenu(menu) {
  menu.forEach(element => {
    listProduct.insertAdjacentHTML('beforeend', itemTemplate(element));
  });
}
createMenu(menu);
