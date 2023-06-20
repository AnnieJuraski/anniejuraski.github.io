import typing from './type.js'

const headerName = document.querySelector('.header__title');
const headerDev = document.querySelector('.header__prof');
const certificadoWomakers = document.getElementById('certificadoWomakers');
const scrollToTopBTN = document.getElementById('go-up');


typing(headerName, headerDev);



certificadoWomakers.addEventListener('click', () =>{
    window.open('../src/pdf/Annie Araújo Alves - Certificado Womakers Code.pdf');
})

window.addEventListener("scroll", function() {    
    if (window.scrollY > 500) {
     scrollToTopBTN.classList.add("active");
    } else {
     scrollToTopBTN.classList.remove("active");
    }
  });


 scrollToTopBTN.addEventListener("click", ()=> {
   window.scrollTo(0,0);
  });
  
