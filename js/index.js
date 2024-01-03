// Elementos
const header = document.getElementById('header');
const buttonMenu = document.getElementById('button__menu');
const navMenu = document.getElementById('nav__menu');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const links = document.querySelectorAll('.item');
const footer = document.getElementById('footer');
const body = document.getElementById('body');
const paragraph = document.getElementById('presentatio-paragraph');
/**
 * Fecha o menu. Essa função está sendo usada dentro de outra função chamada toggleMenu.
 * @param {void}
 * @return {void}
 */
const closeMenu = () => {
  if (innerWidth > 991) {
  }
  navMenu.style.display = 'none';
  buttonMenu.style.transform = 'rotate(0deg)';
  header.style.height = '10%';
  main.style.display = 'block';
  footer.style.display = 'flex';
  nav.style.borderRadius = '3rem';
  nav.style.backgroundColor = 'hsla(0, 0%, 51%, 0.3)';
  paragraph.style.display = 'block';
};

/**
 * Realiza todas transformações para abrir e fechar o menu como: rotacionar o ícone do botão, aumentar o tamanho do menu, sumir a logo e etc.
 * @param {void}
 * @return {void}
 */
const toggleMenu = () => {
  if (navMenu.style.display === 'none' && innerWidth < 992) {
    navMenu.style.display = 'flex';
    buttonMenu.style.transform = 'rotate(45deg)';
    header.style.height = '100vh';
    main.style.display = 'block';
    footer.style.display = 'none';
    nav.style.borderRadius = '2rem 2rem 0 0';
    nav.style.backgroundColor = '#004643';
    paragraph.style.display = 'none';
  } else {
    closeMenu();
  }
};

/**
 * Fechar menu o clicar nos links
 */
const closeMenuLink = () => {
  if (window.innerWidth > 991) {
  } else {
    links.forEach((link) => {
      link.addEventListener('click', () => {
        document.getElementById('button__menu').click();
      });
    });
  }
};

//Abrir ou fechar o menu ao clicar no botão
buttonMenu.addEventListener('click', (e) => {
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
