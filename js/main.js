'use strict';


var selectorRellena = document.querySelector('.titulo__rellena');
var formularioRellena = document.querySelector('.form__rellena');
var formularioDisena = document.querySelector(".form__diseña--fontsColors");



function desplegarRellena() {
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto")
  }
  else {
    formularioRellena.classList.add("form__oculto")
  }

}

selectorRellena.addEventListener("click", desplegarRellena);
