function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(createCard('chicken taco', 'a chicken taco', '$3.50'));
    menu.appendChild(createCard('al pastor taco', 'a pork taco', '$4'));
    menu.appendChild(createCard('steak taco', 'a steak taco', '$4.50'));
    menu.appendChild(createCard('veggie taco', 'a veggie taco', '$3'));
    menu.appendChild(createCard('korean taco', 'a korean bbq taco', '$4'));

    return menu;
}

function createCard(title, description, price) {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const dish = document.createElement('h2');
    dish.innerText = title;

    const dishDescription = document.createElement('p');
    dishDescription.innerText = description;
    dishDescription.classList.add('dish-description');

    const dishPrice = document.createElement('p');
    dishPrice.innerText = price;

    card.appendChild(dish);
    card.appendChild(dishDescription);
    card.appendChild(dishPrice);


    return card;
}

function loadMenu() {
    const main = document.querySelector('.main');
    main.innerText = '';
    main.classList.add('main')
    main.appendChild(createMenu());
}

export default loadMenu;