(function () {
  const el = document.querySelector(".header-container");
  el.innerHTML = `<header class="header">
<div class="header--all-content-container">
  <div class="header--logo-container">
    <img class="header--logo" src="./imgs/logo64px.png" alt="" />
  </div>
  <div class="header--input-container">
    <input class="header__input" type="text" />
  </div>
  <div class="header--button-container">
    <button class="header__button--buscar">Buscar</button>
  </div>
</div>
</header>`;
})();
