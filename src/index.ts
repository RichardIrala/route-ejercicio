import { handlerRoute } from "./handle-router";
(function () {
  // const sit1Button = document.querySelector(".sit-1");
  // const sit2Button = document.querySelector(".sit-2");
  // const el = document.querySelector(".contenedor");
  // console.log(sit1Button, sit2Button);
  // sit1Button.addEventListener("click", (evento) => {
  //   el.textContent = "HOLA";
  // });
  // sit2Button.addEventListener("click", (evento) => {
  //   el.textContent = "ADIOS";
  // });
  window.addEventListener("load", () => {
    handlerRoute(location.pathname);
  });

  // console.log(location.pathname);
})();
