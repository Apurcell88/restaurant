import loadHome from "./home";

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

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
    homeBtn.addEventListener('click', (e) => {
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';
    menuBtn.classList.add('nav-btn');
    
    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'Contact';
    contactBtn.classList.add('nav-btn');
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
};

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
};

function loadPage() {
    const content = document.querySelector('#content');
    
    content.appendChild(createHeader())
    content.appendChild(createMain());
    // content.appendChild(loadHome());
    
}

export default loadPage;