(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobmenu_open__button"),
    closeMenuBtn: document.querySelector(".mobmenu_close__button"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();