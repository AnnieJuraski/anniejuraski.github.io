import typing from './type.js'
import {showToTopBTN, setActiveLink} from './scroll.js'
import { sendMSG } from './form.js';

const headerName = document.querySelector('.header__title');
const headerDev = document.querySelector('.header__prof');
const certificadoWomakers = document.getElementById('certificadoWomakers');
const sendBTN = document.getElementById('send');



typing(headerName, headerDev);
window.addEventListener('scroll', setActiveLink);
window.addEventListener("scroll", showToTopBTN)



certificadoWomakers.addEventListener('click', () => {
    window.open('../src/pdf/Annie Araújo Alves - Certificado Womakers Code.pdf');
})

sendBTN.addEventListener('click', function(e){
    e.preventDefault();

    sendMSG();
});