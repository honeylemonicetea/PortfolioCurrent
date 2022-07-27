// SETTINGS
const settingsBtn = document.querySelector('#settings-btn')
const settingsBox = document.querySelector('.settings')
const settings = document.querySelector('.settings-hidden')
const buttonIcon = settingsBtn.children

// TOGGLE BUTTON
const colorBtn = document.querySelector('.color-mode .toggle-btn')
const colorBtnMobile = document.querySelector('#mobile-color')

let colorMode = localStorage.getItem('colorMode')
let switched = false



if (colorMode === null) {
  localStorage.setItem('colorMode', 'light')
  colorMode = 'light'
  switched = false
} else if (colorMode == 'dark') {
  switched = true
}


let upArrow = document.querySelector('.up-btn')


// SETTINGS
settingsBtn.addEventListener('click', ()=>{
    settingsBox.classList.toggle('hide-bg')
    settings.classList.toggle("show-settings");
    if (buttonIcon[0].classList.contains('bi-gear-fill')){
        buttonIcon[0].classList.add("bi-x-lg");
        buttonIcon[0].classList.remove("bi-gear-fill");
    } else{
        buttonIcon[0].classList.remove("bi-x-lg");
        buttonIcon[0].classList.add("bi-gear-fill");
    }
})

// TOGGLE 
      // COLOR MODE SWITCH
 

let switchBTN = () => {
  // colorMode = localStorage.getItem('colorMode')
  if (switched==false) {
    colorBtn.children[0].style.animation = "toggle_button .01s forwards reverse";
    colorBtn.style.animation = "toggle-bg .01s forwards reverse";
    // MOBILE
    colorBtnMobile.children[0].style.animation =
      "toggle_button .01s forwards reverse";
    colorBtnMobile.style.animation = "toggle-bg .01s forwards reverse";
    document.querySelector('#color-mode').href = 'style.css'
    localStorage.setItem("colorMode", "light");
    switched = true
    

  } else if (switched) {
      colorBtn.children[0].style.animation = "toggle_button .01s forwards";
      colorBtn.style.animation =
        "toggle-bg .01s forwards";
      colorBtnMobile.children[0].style.animation = "toggle_button .01s forwards";
      colorBtnMobile.style.animation = "toggle-bg .01s forwards";
      document.querySelector("#color-mode").href = "darkmode.css";
      localStorage.setItem("colorMode", "dark");
      switched = false
  }

}
switchBTN()

colorBtn.addEventListener('click', switchBTN)
colorBtnMobile.addEventListener('click', switchBTN)


// UP ARROW BUTTON
window.onscroll = function() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      upArrow.style.display = "block";
    } else {
      upArrow.style.display = "none";
    }
}

let scrollUp = ()=>{
    document.documentElement.scrollTop = 0;
}

upArrow.onclick = scrollUp


// DYNAMIC YEAR

let date = new Date()
let year = date.getFullYear()

document.querySelector('.year').innerHTML = year





// MOBILE MENU 
const mobileBTN = document.querySelector('.burgerBTN')
const menuInner = document.querySelector('.navlink-container')
function openMenu(){
  if (mobileBTN.classList.contains('bi-list')){
    menuInner.style.display = 'block'
    mobileBTN.classList.remove('bi-list')
    mobileBTN.classList.add("bi-x-lg");
  } else if(mobileBTN.classList.contains('bi-x-lg')){
    menuInner.style.display = "none";
    mobileBTN.classList.add("bi-list");
    mobileBTN.classList.remove("bi-x-lg");
  }
}

mobileBTN.addEventListener('click', openMenu)