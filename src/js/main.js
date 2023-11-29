import typing from './type.js'
import {showToTopBTN, setActiveLink} from './scroll.js'
import { sendMSG } from './form.js';

const headerName = document.querySelector('.header__title');
const headerDev = document.querySelector('.header__prof');
const sendBTN = document.getElementById('send');



typing(headerName, headerDev);
window.addEventListener('scroll', setActiveLink);
window.addEventListener("scroll", showToTopBTN)



sendBTN.addEventListener('click', function(e){
    e.preventDefault();

    sendMSG();
});