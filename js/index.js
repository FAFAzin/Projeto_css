// Elementos
const headerContainer = document.querySelector('.header-container');
const showMenu = document.querySelector('.menu__actived');
const menu = document.querySelector('.nav__menu');
const logo = document.querySelector('#logo');
const mainContainer = document.querySelector('.main-container');
const itemMenu = document.querySelectorAll('.nav-menu__item');

// mudar display de menu
const toggleMenu = () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    showMenu.style.transform = 'rotate(45deg)';
    headerContainer.style.height = '100%';
    mainContainer.style.display = 'none';
    logo.style.display = 'none';
  } else {
    menu.style.display = 'none';
    showMenu.style.transform = 'rotate(0deg)';
    headerContainer.style.height = '10%';
    mainContainer.style.display = 'block';
    logo.style.display = 'block';
  }
};
/**
 * Recebe o evento de click e invoca a função toogleMenu para realizar a ação de abrir e fechar o menu
 */
showMenu.addEventListener('click', () => {
  toggleMenu();
});
