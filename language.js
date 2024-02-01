let language = localStorage.getItem('lang')
let switchedLang = false

if (language === null) {
  localStorage.setItem('lang', 'eng')
  switchedLang = false
} else if (language == 'rus'){
  switchedLang = true
}


const languageBtn = document.querySelector(".language-mode .toggle-btn");
const languageMobile = document.querySelector("#mobile-lang");
// TEXT ELEMENT VARIABLES

let menuLinks = document.querySelector('.nav-links').children
const menu_home = menuLinks[0]
const menu_portfolio = menuLinks[1]
const menu_about = menuLinks[2]


// MENU MOBILE
let menuLinksMob = document.querySelector(".menu-burger .nav-links").children;
const menu_home_m = menuLinksMob[0];
const menu_portfolio_m = menuLinksMob[1];
const menu_about_m = menuLinksMob[2];



const DMicon = document.querySelector('.color-mode').children[2].children[0]
const LMicon = document.querySelector(".color-mode").children[0].children[0];
const ENicon = document.querySelector('.language-mode').children[0].children[0]
const RUicon = document.querySelector(".language-mode").children[2].children[0];


const bannerTXT = document.querySelector('.banner-inner')

// PORTFOLIO
const portfolioH1 = document.querySelector('.portfolio-container > h1')
const portfolioBTNs = document.querySelectorAll('.portfolio-buttons')

const lastfm = document.getElementById("lastfm")
const darker = document.getElementById("darker")
const songtrivia = document.getElementById("songtrivia")
const fashion = document.getElementById("fashion")
const landify = document.getElementById("landify")
const musik = document.getElementById("musik")
const twitter = document.getElementById("twitter")


// ABOUT ME
const aboutH1 = document.querySelector('.about-right h1')
const aboutTXT = document.querySelector('.about-right > p')
const toolboxH2 = document.querySelector('.toolbox-container h2')
const nameSpan = document.querySelector('#name')



function setLangEN(){
       document.querySelector("html").lang = "en";
        // MENU
        menu_home.innerHTML= 'home'
        menu_portfolio.innerHTML = 'portfolio'
        menu_about.innerHTML = 'about me'

        //MENU MOBILE
          menu_home_m.innerHTML = "home";
          menu_portfolio_m.innerHTML = "portfolio";
          menu_about_m.innerHTML = "about me";
        // SETTINGS
        settingsBtn.children[0].setAttribute('title', 'Settings')
        DMicon.setAttribute("title", "Dark Mode");
        LMicon.setAttribute("title", "Light Mode");
        ENicon.setAttribute("title", "English");
        RUicon.setAttribute("title", "Russian");

        // BANNER
        bannerTXT.innerHTML = 'WELCOME!'

        // PORTFOLIO
        portfolioH1.innerHTML = 'Portfolio'
        portfolioBTNs.forEach(e=>{
          e.children[0].innerHTML = 'DEMO'
          e.children[1].innerHTML = "CODE";
        })

        lastfm.innerHTML = "A website for showcasing Last.fm charts."
        darker.innerHTML = "  Darker is our love letter to the dark aesthetic. Darker is a collection of gothic movies, books and outfits"
        songtrivia.innerHTML = "A song trivia game heavily inspired by Song Pop."
        fashion.innerHTML = "A prototype of a fashion website with a semi-functional store (category filters, product card, cart, search)"
        landify.innerHTML = "Landify is a simple mock-up landing made using a Figma template."
        musik.innerHTML = "Musik is a simple music event landing made using a Figma template. "
        twitter.innerHTML = "A simple Twitter copycat"
        
        // ABOUT ME
        aboutH1.innerHTML = 'About Me'
        aboutTXT.innerHTML = '.'
        toolboxH2.innerHTML = 'My Toolbox'
        nameSpan.innerHTML = ''
}



function setLangRU(){
      document.querySelector("html").lang = "ru";
      // MENU
      menu_home.innerHTML = "главная";
      menu_portfolio.innerHTML = "портфолио";
      menu_about.innerHTML = "обо мне";
      //menu mobile
      menu_home_m.innerHTML = "главная";
      menu_portfolio_m.innerHTML = "портфолио";
      menu_about_m.innerHTML = "обо мне";

      // SETTINGS
      settingsBtn.children[0].setAttribute("title", "Настройки");
      DMicon.setAttribute("title", "Темная тема");
      LMicon.setAttribute("title", "Светлая тема");
      ENicon.setAttribute("title", "Английский");
      RUicon.setAttribute("title", "Русский");

      // BANNER
      bannerTXT.innerHTML = "ДОБРО ПОЖАЛОВАТЬ!";

      // PORTFOLIO
      portfolioH1.innerHTML = "Портфолио";
      portfolioBTNs.forEach((e) => {
        e.children[0].innerHTML = "ДЕМО";
        e.children[1].innerHTML = "КОД";
      });
      lastfm.innerHTML = "Сайт,  демонстрирующий чарты Last.fm.";
      darker.innerHTML = " Darker это коллекция готических фильмов, книг и одежды"
      songtrivia.innerHTML = "Музыкальная викторина, вдохновленная приложением Song Pop"
      fashion.innerHTML = "Прототип сайта о моде с частично функциональным магазином (фильтры категорий, карточка товара, корзина, поиск)"
      landify.innerHTML = "Landify это простой сайт, созданный по макету Figma"
      musik.innerHTML = "Musik это простой сайт-лендинг для музыкального мероприятия, созданный по макету Figma"
      twitter.innerHTML = "Простая копия Twitter"
      

      // ABOUT ME
      aboutH1.innerHTML = "Обо Мне";
      aboutTXT.innerHTML =
        " ";
      toolboxH2.innerHTML = 'Используемые Технологии'
      nameSpan.innerHTML = ''
}








let switchLanguage = () => {
  if (switchedLang == false) {
    languageBtn.children[0].style.animation =
      "toggle_button .01s forwards reverse";
    languageBtn.style.animation = "toggle-bg .01s forwards reverse";
    languageMobile.children[0].style.animation = "toggle_button .01s forwards reverse";
    languageMobile.style.animation = "toggle-bg .01s forwards reverse";
    switchedLang = true
    localStorage.setItem("lang", "eng");
    setLangEN()
  } else if (switchedLang == true) {
    languageBtn.children[0].style.animation = "toggle_button .01s forwards";
    languageBtn.style.animation = "toggle-bg .01s forwards";
    languageMobile.children[0].style.animation = "toggle_button .01s forwards";
    languageMobile.style.animation = "toggle-bg .01s forwards";
    switchedLang = false
    localStorage.setItem("lang", "rus");
    setLangRU()
  }
};

switchLanguage()

languageBtn.addEventListener("click", switchLanguage);
languageMobile.addEventListener('click', switchLanguage)