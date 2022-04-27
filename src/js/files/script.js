// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
/*============Меню бургер============*/
let menuBtn = document.querySelector(".icon-menu");
let menu = document.querySelector(".header__menu");
let body = document.querySelector("body");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("_active");
  body.classList.toggle("_lock");
  menuBtn.classList.toggle("_active");
});
/*============плавная прокрутка============*/
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", oneMenuLinkClick);
  });
  function oneMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (menuBtn.classList.contains("_active")) {
        menu.classList.remove("_active");
        body.classList.remove("_lock");
        menuBtn.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
