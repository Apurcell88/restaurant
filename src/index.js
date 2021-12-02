// import pageLoader from './page-load.js';
import './style.css';
import loadPage from './page-load';

const content = document.querySelector('#content');

function init() {
    loadPage();
}

init();