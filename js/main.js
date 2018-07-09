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
var botonrotado1 = document.querySelector(".move1");
var botonrotado2 = document.querySelector(".move2");
var botonrotado3 = document.querySelector(".move3");

function desplegarDisena() {
  if (formularioDisena.classList.contains("form__oculto")) {
    formularioDisena.classList.remove("form__oculto");
    formularioRellena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
    botonrotado1.classList.add("rotate");
  } else {
    formularioDisena.classList.add("form__oculto");
    botonrotado1.classList.remove("rotate");
  }
}

function desplegarRellena() {
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
    botonrotado2.classList.add("rotate");
  } else {
    formularioRellena.classList.add("form__oculto");
    botonrotado2.classList.remove("rotate");
  }
}

function desplegarComparte() {
  if (formularioComparte.classList.contains("form__oculto")) {
    formularioComparte.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioRellena.classList.add("form__oculto");
    botonrotado3.classList.add("rotate");
  } else {
    formularioComparte.classList.add("form__oculto");
    botonrotado3.classList.remove("rotate");
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

///foto editor//

var fr = new FileReader();

var uploadBtn = document.querySelector(".form__rellena--button");

var fileField = document.querySelector("#imagen");
var profileImage = document.querySelector(".visor__image-foto");
var formImage = document.querySelector(".form__rellena--reload ");

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src = fr.result;
  formImage.style.backgroundImage = "url(" + fr.result + ")";
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
uploadBtn.addEventListener("click", fakeFileClick);

//iconos Aylen//
var searchPhone = document.querySelector(".rellena__phone");
var searchLinkedin = document.querySelector(".rellena__linkedin");
var searchMail = document.querySelector(".rellena__mail");
var searchGithub = document.querySelector(".rellena__github");

searchPhone.addEventListener("keyup", linkSocials);
searchLinkedin.addEventListener("keyup", linkSocials);
searchMail.addEventListener("keyup", linkSocials);
searchGithub.addEventListener("keyup", linkSocials);

function linkSocials(event) {
  var guiltyForm = event.currentTarget;
  var rrssId = guiltyForm.getAttribute("data-rrss");
  if (guiltyForm.classList.contains("rellena__phone")) {
    document.querySelector("#" + rrssId).href = "tel:" + guiltyForm.value;
  } else if (guiltyForm.classList.contains("rellena__mail")) {
    document.querySelector("#" + rrssId).href = "mailto:" + guiltyForm.value;
  } else {
    document.querySelector("#" + rrssId).href = "https://" + guiltyForm.value;
  }
}
