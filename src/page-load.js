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
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.innerText = 'Menu';
    menuBtn.classList.add('nav-btn');
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.innerText = 'Contact';
    contactBtn.classList.add('nav-btn');
    nav.appendChild(contactBtn);

    return nav;
};

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    main.appendChild(descriptionContainer);

    const descriptionTop = document.createElement('h2');
    descriptionTop.innerText = 'Come on in for some authentic tacos!';
    descriptionContainer.appendChild(descriptionTop);

    const descriptionBottom = document.createElement('p');
    descriptionBottom.innerText = 'Mexico City inspired taste!';
    descriptionContainer.appendChild(descriptionBottom);

    const orderBtn = document.createElement('button');
    orderBtn.innerText = 'Order Now';
    descriptionContainer.appendChild(orderBtn);

    return main;
};

function loadPage() {
    const content = document.querySelector('#content');
    
    const header = createHeader();
    content.appendChild(header);

    const main = createMain();
    content.appendChild(main);
}

export default loadPage;