let signIn = document.querySelector('.sign__header-in');
let signUp = document.querySelector('.sign__header-up');
let formIn = document.querySelector('.sign__form');
let formUp = document.querySelector('.sign__form-reg');


function changeEnter() {

    if (signIn.classList.contains('sign__header-in_active')) {
        signUp.classList.remove('sign__header-up_active');
    } else {
        signIn.classList.add('sign__header-in_active');
        signUp.classList.remove('sign__header-up_active');
        formUp.classList.remove('sign__form-reg_active');
        formIn.classList.add('sign__form_active');
    }
}

function changeReg() {

    if (signUp.classList.contains('sign__header-up_active')) {
        signIn.classList.remove('sign__header-in_active');
    } else {
        signUp.classList.add('sign__header-up_active');
        signIn.classList.remove('sign__header-in_active');
        formUp.classList.add('sign__form-reg_active');
        formIn.classList.remove('sign__form_active');
        
    }
}

signIn.addEventListener('click', changeEnter);
signUp.addEventListener('click', changeReg);