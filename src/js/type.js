export default function typing(element1, element2) {
    const arrText1 = element1.innerHTML.split('');
    element1.innerHTML = '';
  
    const arrText2 = element2.innerHTML.split('');
    element2.innerHTML = '';
  
    arrText1.forEach((letter, i) => {
      setTimeout(() => {
        element1.innerHTML += letter;
      }, 50 * i);
    });
  
    setTimeout(() => {
      arrText2.forEach((letter, i) => {
        setTimeout(() => {
          element2.innerHTML += letter;
        }, 50 * i);
      });
    }, 1000); 
  }