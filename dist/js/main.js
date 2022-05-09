document.addEventListener('DOMContentLoaded', function() {

  const menuBurger = document.querySelector('.header__top-burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  function mobileMenuAction () {
    mobileMenu.classList.toggle('hide');
  }

  menuBurger.addEventListener('click', () => {
    mobileMenuAction();
  });

});