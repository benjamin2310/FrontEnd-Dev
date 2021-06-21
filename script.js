let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let emailValue = emailElement.value;
    let messageValue = messageElement.value;
    if (emailValue.includes('@')) {
        //Success Message
        alert('Thank you for your message');
    }
    //Failed Message
    else{
        alert('Error!, please kindly check your email well and try again');
    }
//console.log('Email : ', emailValue);
//console.log('Message : ', messageValue);
}
)
