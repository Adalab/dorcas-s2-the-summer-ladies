'use strict';


var selectorDiseña = document.querySelector('.title__diseña');
var formularioDisena = document.querySelector(".form__diseña--fontsColors");
var selectorRellena = document.querySelector('.titulo__rellena');
var formularioRellena = document.querySelector('.form__rellena');
var selectorComparte = document.querySelector('.container__comparte--icon');
var formularioComparte = document.querySelector('.wrapform');



function desplegarDiseña() {
    if (formularioDiseña.classList.contains("form__oculto")) {
      formularioDiseña.classList.remove("form__oculto");
      formularioRellena.classList.add("form__oculto");
      formularioComparte.classList.add("form__oculto")
    }
    else {
      formularioDiseña.classList.add("form__oculto")
    }
  
  }


function desplegarRellena() {
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto")
  }
  else {
    formularioRellena.classList.add("form__oculto")
  }

}

function desplegarComparte() {
    if (formularioComparte.classList.contains("form__oculto")) {
      formularioComparte.classList.remove("form__oculto");
      formularioDisena.classList.add("form__oculto");
      formularioRellena.classList.add("form__oculto")
    }
    else {
      formularioComparte.classList.add("form__oculto")
    }
  
  }

selectorDiseña.addEventListener("click", desplegarDiseña);
selectorRellena.addEventListener("click", desplegarRellena);
selectorComparte.addEventListener("click", desplegarComparte);