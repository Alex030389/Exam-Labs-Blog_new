`use strict`;

(() => {
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  const stickFooter = () => {
    document.querySelector(`.ie-width`).textContent = `${innerWidth}px`;
    const FOOTER = document.querySelector(`.blog-page-footer`);
    const MAIN = document.querySelector(`.blog-page-main`);
    const BODY = document.querySelector(`body`);
    const footerHeight = FOOTER.offsetHeight;

    BODY.style.position = `relative`;
    MAIN.style.marginBottom = `${footerHeight}px`;
    FOOTER.style.position = `absolute`;
    FOOTER.style.bottom = `0`;
    FOOTER.style.left = `0`;
    FOOTER.style.width = `100%`;
  };

  if (isIE11) {
    stickFooter();
    window.addEventListener(`resize`, stickFooter);
  }
})();
