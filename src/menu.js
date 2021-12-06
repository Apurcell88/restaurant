function createMenu() {

}

function loadMenu() {
    const main = document.querySelector('.main');
    main.innerText = '';
    main.classList.add('main')
    main.appendChild(createMenu());
}

export default loadMenu;