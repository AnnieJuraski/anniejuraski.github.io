import typing from './type.js'
import {showToTopBTN, setActiveLink} from './scroll.js'

const headerName = document.querySelector('.header__title');
const headerDev = document.querySelector('.header__prof');
const certificadoWomakers = document.getElementById('certificadoWomakers');



typing(headerName, headerDev);
window.addEventListener('scroll', setActiveLink);
window.addEventListener("scroll", showToTopBTN)



certificadoWomakers.addEventListener('click', () => {
    window.open('../src/pdf/Annie Araújo Alves - Certificado Womakers Code.pdf');
})


    



scrollToTopBTN.addEventListener("click", () => {
    window.scrollTo(0, 0);
});






