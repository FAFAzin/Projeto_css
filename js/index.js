// Elementos
const headerContainer = document.getElementById('header');
const showMenu = document.getElementById('button__menu');
const menu = document.getElementById('nav__menu');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const mainContainer = document.getElementById('main');
const links = document.querySelectorAll('.item');
const footer = document.getElementById('footer');

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
  mainContainer.style.display = 'block';
  footer.style.display = 'block';
  nav.style.borderRadius = '3rem';
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
    mainContainer.style.display = 'block';
    footer.style.display = 'none';
    nav.style.borderRadius = '2rem 2rem 0 0';
    logo.style.display = 'none';
  } else {
    closeMenu();
  }
};

/**
 * Fechar menu o clicar nos links
 */
const closeMenuLink = () => {
  if (window.innerWidth > 991) {
    return;
  } else {
    links.forEach((link) => {
      link.addEventListener('click', () => {
        document.getElementById('button__menu').click();
      });
    });
  }
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

const image = document.getElementById('image');
/* Função trocar formas */
const a = () => {
  const number = Math.floor(Math.random() * 6);
  image.src = `./icons/form${number}.svg`;
  console.log(number);
};
image.addEventListener('click', () => {
  a();
});
