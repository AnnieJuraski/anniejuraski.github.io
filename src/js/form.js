const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const msg = document.getElementById('msg');
const inputField = document.querySelectorAll('input');


export function sendMSG(){


    var isValidName = validateName();
    var isValidEmail = validateEmail();
    var isValidSubject = validateSubject();
    var isValidMSG = validatemsg();

    if(!isValidName){
        name.classList.add('error-form');
        getErrorTag(name).classList.add('active');
    }

    if(!isValidEmail){
        email.classList.add('error-form');
        getErrorTag(email).classList.add('active');
    }

    if(!isValidSubject){
        subject.classList.add('error-form');
        getErrorTag(subject).classList.add('active');
    }

    if(!isValidMSG){
        msg.classList.add('error-form');
        getErrorTag(msg).classList.add('active');
    }

    if(isValidName && isValidEmail && isValidSubject && isValidMSG){

        var params = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: msg.value,
        };


        const serviceID = "service_00o0rrj";
        const templateID = "template_9pitres";

        emailjs.send(serviceID, templateID, params)
        .then(
            res =>{
                name.value = '';
                email.value = '';
                subject.value = '';
                msg.value = '';

                alert('Mensagem enviada!')
            })
        .catch((err) => console.log(err));
    }   
}




function validateName() {
    const nameValue = name.value.trim(); 
    
    var regex = /^[a-zA-Z\u00C0-\u017F ]{2,30}$/;
    return regex.test(nameValue);
}


function validateEmail() {
    const emailValue = email.value;    

     var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

     return regex.test(emailValue);     
}



function validateSubject() {
    const subjectValue = subject.value.trim();
    const regex = /^(?=.*[a-zA-Z]).{6,}$/
    return regex.test(subjectValue);
}


function validatemsg(){
    const msgValue = msg.value.trim();
    const regex = /^(?=.*[a-zA-Z]).{10,}$/

    return regex.test(msgValue);
}


msg.addEventListener('input', () => {
    let errorFeedback = msg.closest('.control-form').querySelector('.error');

    errorFeedback.classList.remove('active');
    msg.classList.remove('error-form');

})

  inputField.forEach(input => {
    input.addEventListener('input', () => {
      let errorFeedback = input.closest('.control-form').querySelector('.error');
  
      errorFeedback.classList.remove('active');
      input.classList.remove('error-form');
    });
  });


  function getErrorTag(input) {
    return input.closest('.control-form').querySelector('.error');
  }