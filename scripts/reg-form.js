const nextBtn = Array.from(document.querySelectorAll('.first-stage__btn'))
const prevBtn = Array.from(document.querySelectorAll('.first-stage__prevBtn'))

//Next fieldset
nextBtn.forEach((evt) => {
    evt.addEventListener('click',(evt) =>{
        evt.preventDefault()
        evt.target.parentElement.nextElementSibling.classList.add('first-stage__fieldset_active')
        evt.target.parentElement.classList.remove('first-stage__fieldset_active')
    })
})


//Previous fieldset

prevBtn.forEach((evt) => {
    evt.addEventListener('click',(evt) =>{
        evt.preventDefault()
        evt.target.parentElement.previousElementSibling.classList.add('first-stage__fieldset_active')
        evt.target.parentElement.classList.remove('first-stage__fieldset_active')
    })
})


//Validity

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_ok');
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('first-stage__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    inputElement.classList.add('form__input_type_ok');
    errorElement.classList.remove('first-stage__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.first-stage__input'));
    const buttonElement = formElement.querySelector('.first-stage__btn');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.first-stage__fieldset')); 
    formList.forEach((formElement) => {
      formElement.addEventListener('submit',(evt) =>{
        evt.preventDefault();
      });
      
        setEventListeners(formElement);
    });
  };
  
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('first-stage__btn_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('first-stage__btn_inactive');
    buttonElement.disabled = false;
  }
}

  enableValidation();