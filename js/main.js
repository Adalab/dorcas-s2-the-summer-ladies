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

<<<<<<< HEAD
function plegar() {
    formularioRellena.classList.toggle("form__oculto");

}

selectorRellena.addEventListener("click", plegar);
=======
}

selectorRellena.addEventListener("click", desplegarRellena);
>>>>>>> c850f5be69a5738daec678e94b56e588f424368d
