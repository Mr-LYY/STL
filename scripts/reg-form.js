const nextBtn = Array.from(document.querySelectorAll('.first-stage__btn'))
const prevBtn = Array.from(document.querySelectorAll('.first-stage__prevBtn'))
const formElement = document.querySelector('.first-stage__form');
const formInput = formElement.querySelector('.first-stage__input');

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

formElement.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение
    console.log('hi')
    evt.preventDefault();
  });
  