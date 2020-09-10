/////////////////////// SLIDERS

// Slider with vendor links on the home page
if (document.querySelector(`.header-links__swiper-slider`)) {
  new Swiper(`.header-links__swiper-slider`, {
    slidesPerView: `auto`,
    watchOverflow: true,
  });
}

//////////////////////// MOBILE MENU
if (document.querySelector(`.menu-button-open-js`)) {
  const mobileMenu = new Menu(`menu-button-open-js`, `menu-button-close-js`, `main-menu-js`); 
}

//////////////////////// MOBILE SEARCH
if (document.querySelector(`.search-button-js`)) {
  new Search(`search-button-js`, `search-js`); 
}

//////////////////////// MODALS

// Discount
if (document.querySelector(`.modal--steps`)) {
  const modalHowItWorks = new Modal(`modal--steps`, {
    callButtonClass: `js-button-how-it-works`
  }); 
}

//////////////////////// PARTS
if (document.querySelector(`.login__part`)) {
  new Parts({
    partClass: `login__part`,
    buttonClass: `login__button--part`
  });
}
