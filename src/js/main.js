import typing from './type.js'

const headerName = document.querySelector('.header__title');
const headerDev = document.querySelector('.header__prof');
const certificadoWomakers = document.getElementById('certificadoWomakers');


certificadoWomakers.addEventListener('click', () =>{
    window.open('../src/pdf/Annie Araújo Alves - Certificado Womakers Code.pdf');
})


typing(headerName, headerDev);






