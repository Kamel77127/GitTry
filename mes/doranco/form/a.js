const form = document.querySelector('#create_account_form')
console.log(form)

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // c'est une fonction prédefinie qui empêche que quand j'appuie sur envoyer bha ça se répète
    


    validateForm();
});

function validateForm (){
    //IDENTIFIANTS
    if (usernameInput.value.trim() == '' ) {
        setError(usernameInput, 'Avoir minnimum 5 caractères');
        
    }
    //EMAIL
    //PASSWORD
    //CONFIRM PASSWORD

}


function setError(element, errorMessage) {
    const parent = element.parentElement;
    parent.classList.add('error');
}