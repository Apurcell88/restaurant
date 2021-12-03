function createHome() {
    const home = document.createElement('div');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    home.appendChild(descriptionContainer);

    const descriptionTop = document.createElement('h2');
    descriptionTop.innerText = 'Come on in for some authentic tacos!';
    descriptionTop.classList.add('description-top');

    const descriptionBottom = document.createElement('p');
    descriptionBottom.innerText = 'Mexico City inspired taste!';
    descriptionBottom.classList.add('description-bottom');

    const orderBtn = document.createElement('button');
    orderBtn.innerText = 'Order Now';
    orderBtn.classList.add('order-btn');

    descriptionContainer.appendChild(descriptionTop);
    descriptionContainer.appendChild(descriptionBottom);
    descriptionContainer.appendChild(orderBtn);

    return home;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.innerText = '';
    main.classList.add('main')
    main.appendChild(createHome());
}

export default loadHome;