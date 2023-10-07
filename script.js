window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 200)
})

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();




  // Obtém o elemento <h1>
  const typingElement = document.getElementById('typing-effect');

  // Define o texto que será digitado gradualmente
  const text = "Guerra Soluções Imobiliárias";

  // Variáveis de controle
  let currentIndex = 0;
  let typingSpeed = 100; // Velocidade de digitação em milissegundos

  // Função para exibir o próximo caractere
  function typeNextCharacter() {
      // Verifica se todos os caracteres foram digitados
      if (currentIndex < text.length) {
          // Obtém o próximo caractere
          const nextCharacter = text.charAt(currentIndex);

          // Adiciona o caractere ao elemento <h1>
          typingElement.textContent += nextCharacter;

          // Incrementa o índice para o próximo caractere
          currentIndex++;

          // Aguarda a próxima iteração com base na velocidade de digitação
          setTimeout(typeNextCharacter, typingSpeed);
      }
  }

  // Inicia o efeito de digitação quando a página é carregada
  window.onload = typeNextCharacter;