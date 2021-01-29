let button = document.querySelector('#header__menu-btn');
let submenu = document.querySelector('.header__mobile-sub');

//console.log(submenu)

function openMenu() {
    
    if ( button.classList.contains('open')) {
      button.classList.remove('open');
      button.classList.add('close');
    } else {
      button.classList.remove('close');
      button.classList.add('open');
    }
};

function showSub() {

  if (submenu.classList.contains('header__mobile-sub_type_opened')) {
    submenu.classList.remove('header__mobile-sub_type_opened');
    submenu.classList.add('header__mobile-sub_type_close');
  } else {
    submenu.classList.remove('header__mobile-sub_type_close');
    submenu.classList.add('header__mobile-sub_type_opened');
  }
};





button.addEventListener('click', openMenu);
button.addEventListener('click', showSub);