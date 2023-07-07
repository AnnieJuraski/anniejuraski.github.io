export default function typing(element1, element2) {

  const nome = "Oi, eu sou a Annie"
  const titulo = "Desenvolvedora Front-End"



    const arrText1 = nome.split('');
    element1.innerHTML = '';
  
    const arrText2 = titulo.split('');
    element2.innerHTML = '';
  
    arrText1.forEach((letter, i) => {
      setTimeout(() => {
        setTimeout(() => {
          element1.innerHTML += letter;
        }, 50 * i);
      }, 500);
    });
  
    setTimeout(() => {
      arrText2.forEach((letter, i) => {
        setTimeout(() => {
          element2.innerHTML += letter;
        }, 50 * i);
      });
    }, 1700); 
  }