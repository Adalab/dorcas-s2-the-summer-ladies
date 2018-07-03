"use strict";

var selectorDisena = document.querySelector(".title__disena");
var formularioDisena = document.querySelector(".form__disena--fontsColors");
var selectorRellena = document.querySelector(".titulo__rellena");
var formularioRellena = document.querySelector(".form__rellena");
var selectorComparte = document.querySelector(".container__comparte--icon");
var formularioComparte = document.querySelector(".form__comparte");
var tarjetaCreada = document.querySelector(".container--comparte-created");
var botonCrearTarjeta = document.querySelector(
  ".container__comparte--buttonstyle"
);

function desplegarDisena() {
  console.log("desplegardiseña");
  if (formularioDisena.classList.contains("form__oculto")) {
    console.log(formularioDisena.classList);
    formularioDisena.classList.remove("form__oculto");
    formularioRellena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
  } else {
    console.log(2222);
    formularioDisena.classList.add("form__oculto");
  }
}

function desplegarRellena() {
  console.log("desplegarRellena");
  if (formularioRellena.classList.contains("form__oculto")) {
    console.log(33333);
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
  } else {
    console.log(4444);
    formularioRellena.classList.add("form__oculto");
  }
}

function desplegarComparte() {
  if (formularioComparte.classList.contains("form__oculto")) {
    formularioComparte.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioRellena.classList.add("form__oculto");
  } else {
    formularioComparte.classList.add("form__oculto");
  }
}

function crearTarjeta() {
  if (tarjetaCreada.classList.contains("form__oculto")) {
    tarjetaCreada.classList.remove("form__oculto");
  } else {
    tarjetaCreada.classList.add("form__oculto");
  }
}
selectorDisena.addEventListener("click", desplegarDisena);
selectorRellena.addEventListener("click", desplegarRellena);
selectorComparte.addEventListener("click", desplegarComparte);
botonCrearTarjeta.addEventListener("click", crearTarjeta);
