
const scrollToTopBTN = document.getElementById('go-up');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('.nav__link')



export function showToTopBTN (){
    if (window.scrollY > 500) {
        scrollToTopBTN.classList.add("active");
    } else {
        scrollToTopBTN.classList.remove("active");
    }
}


export function setActiveLink() {
    const scrollPosition = window.scrollY;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if ((scrollPosition + 450)>= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });
  
        navLinks[index].classList.add('active');
      }
  
      if (index == 0){
          if((scrollPosition + 800) < sectionTop){
              navLinks[index].classList.remove('active');
          }
      } 
    });
  }