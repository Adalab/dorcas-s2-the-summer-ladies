'use strict';

<<<<<<< HEAD
var selectorTitulo = document.querySelectorAll('.wraptitle');
var formulario = document.querySelectorAll('.wrapform');

function collapsibleall() {
    formulario.classList.contains("form__oculto");
}

collapsibleall();

// function updateCollapsibles(e) {
//     var parents = e.currentTarjet.parentElement;

//     if (parent.classList.contains("form__oculto"))
    
// }








































// function plegar() {
//     formulario.classList.toggle("form__oculto");
    
// }

// selectorTitulo.addEventListener("click", plegar);


=======

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
>>>>>>> b1acaeccf23847c6a96a54a6b65394f8eb9de016
