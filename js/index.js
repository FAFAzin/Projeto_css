// Elementos
const headerContainer = document.querySelector('.header-container');
const showMenu = document.querySelector('.menu__actived');
const menu = document.querySelector('.nav__menu');
const logo = document.querySelector('#logo');
const mainContainer = document.querySelector('.main-container');
const itemMenu = document.querySelectorAll('.nav-menu__link');

// Função para fechar o menu
const closeMenu = () => {
  menu.style.display = 'none';
  showMenu.style.transform = 'rotate(0deg)';
  headerContainer.style.height = '10%';
  mainContainer.style.display = 'block';
  logo.style.display = 'block';
};

// mudar display de menu
const toggleMenu = () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    showMenu.style.transform = 'rotate(45deg)';
    headerContainer.style.height = '100%';
    mainContainer.style.display = 'none';
    logo.style.display = 'none';
  } else {
    closeMenu();
  }
};

//capturar o click do botão do menu
showMenu.addEventListener('click', () => {
  toggleMenu();
});

itemMenu.addEventListener('click', () => {
  closeMenu();
});
