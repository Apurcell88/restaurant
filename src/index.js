// import pageLoader from './page-load.js';
import './style.css';

const content = document.querySelector('#content');

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    // content.appendChild(header);

    const restaurantName = document.createElement('h1');
    restaurantName.innerText = 'Pablo\'s Taco Bar';
    restaurantName.classList.add('restaurant-name');
    header.appendChild(restaurantName);

    header.appendChild(createNav());

    return header;

};

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeBtn = document.createElement('button');
    homeBtn.innerText = 'Home';
    homeBtn.classList.add('nav-btn');
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';
    menuBtn.classList.add('nav-btn');
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'Contact Us';
    contactBtn.classList.add('nav-btn');
    nav.appendChild(contactBtn);

    return nav;
};

content.appendChild(createHeader());
// function createMain() {

// }