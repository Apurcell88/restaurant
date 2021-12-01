// import pageLoader from './page-load.js';
import './style.css';

(function createHeader() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const restaurantName = document.createElement('h1');
    restaurantName.innerText = 'Pablo\'s Taco Bar';
    restaurantName.classList.add('restaurant-name');
    header.appendChild(restaurantName);

})();

// function createMain() {

// }