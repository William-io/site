//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, navLinks2) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.navLinks2 = document.querySelectorAll(navLinks2);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
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
    this.navLinks2.forEach((item) => {
      item.addEventListener("click", this.handleClick);
    });
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
  ".nav-list li a"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.";
});

document.querySelector(".typescript").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.";
});

document.querySelector(".sql").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "O Microsoft SQL Server é um sistema gerenciador de Banco de dados relacional desenvolvido pela Sybase em parceria com a Microsoft.";
});

document.querySelector(".node").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web";
});

document.querySelector(".csharp").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java.";
});

document.querySelector(".javascript").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web";
});

document.querySelector(".net").addEventListener("mouseover", function () {
  texto1.innerHTML =
    ".NET é um framework livre e de código aberto para os sistemas operacionais Windows, Linux e macOS. É um sucessor de código aberto do .NET Framework. O projeto é desenvolvido principalmente pela Microsoft e lançado com a Licença MIT";
});

document
  .querySelector(".angular")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");


for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `Principais tech que venho estudando e utilizando*`;

  });
}
