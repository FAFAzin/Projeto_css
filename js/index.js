// Elementos
const headerContainer = document.getElementById('header');
const showMenu = document.getElementById('button__menu');
const menu = document.getElementById('nav__menu');
const logo = document.getElementById('logo');
const mainContainer = document.getElementById('main');
const links = document.querySelectorAll('.item');

/**
 * Fecha o menu. Essa função está sendo usada dentro de outra função chamada toggleMenu.
 * @param {void}
 * @return {void}
 */
const closeMenu = () => {
  menu.style.display = 'none';
  showMenu.style.transform = 'rotate(0deg)';
  headerContainer.style.height = '10%';
  mainContainer.style.display = 'block';
  logo.style.display = 'block';
};

/**
 * Realiza todas transformações para abrir e fechar o menu como: rotacionar o ícone do botão, aumentar o tamanho do menu, sumir a logo e etc.
 * @param {void}
 * @return {void}
 */
const toggleMenu = () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    showMenu.style.transform = 'rotate(45deg)';
    headerContainer.style.height = '100vh';
    headerContainer.style.backgroundColor = '#004643';
    mainContainer.style.display = 'none';
    logo.style.display = 'none';
  } else {
    closeMenu();
  }
};

/**
 * Fechar menu o clicar nos links
 */
const closeMenuLink = () => {
  links.forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('button__menu').click();
    });
  });
};

//Abrir ou fechar o menu ao clicar no botão
showMenu.addEventListener('click', (e) => {
  e.preventDefault();

  toggleMenu();
});

/**
 * Este evento usa a função closeMenuLink que é usada para fechar o menu quando algum link for clicado.
 *
 * Espera todo o documento html ser carregado para rodar a função quando invocada
 *  */
document.addEventListener('DOMContentLoaded', () => {
  closeMenuLink();
});
