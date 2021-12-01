import Icon from './bar.jpg';

export default function pageLoader(element, text) {
    let container = document.querySelector('#content');
    let newElement = document.createElement(element);

    console.log(newElement);

    if (newElement.tagName === 'IMG') {
        newElement = new Image();
        newElement.src = Icon;
    } else {
        newElement.innerText = text;
    }

    container.appendChild(newElement);
}