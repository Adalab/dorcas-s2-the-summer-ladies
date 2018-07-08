'use strict';
//desplegable
var selectorDisena = document.querySelector('.title__disena');
var formularioDisena = document.querySelector('.form__disena--fontsColors');
var selectorRellena = document.querySelector('.titulo__rellena');
var formularioRellena = document.querySelector('.form__rellena');
var selectorComparte = document.querySelector('.container__comparte--icon');
var formularioComparte = document.querySelector('.form__comparte');
var tarjetaCreada = document.querySelector('.container--comparte-created');
var botonCrearTarjeta = document.querySelector('.container__comparte--buttonstyle');
var botonrotado1 = document.querySelector('.move1');
var botonrotado2 = document.querySelector('.move2');
var botonrotado3 = document.querySelector('.move3');
//escritura automatica visor
var nameField = document.querySelector('.input__name');
var roleField = document.querySelector('.input__job');
//foto editor
var fr = new FileReader();
var uploadBtn = document.querySelector('.form__rellena--button');
var fileField = document.querySelector('#imagen');
var profileImage = document.querySelector('.visor__image-foto');
var formImage = document.querySelector('.form__rellena--reload ');
//diseña cambio color
var cardContainer = document.querySelector('.visor__container1');
var radios = document.querySelectorAll('.point');
var radiosFont = document.querySelectorAll('.point1');
//desplegable
function desplegarDisena() {
  if (formularioDisena.classList.contains('form__oculto')) {
    formularioDisena.classList.remove('form__oculto');
    formularioRellena.classList.add('form__oculto');
    formularioComparte.classList.add('form__oculto');
    botonrotado1.classList.add('rotate');
  } else {
    formularioDisena.classList.add('form__oculto');
    botonrotado1.classList.remove('rotate');
  }
}
function desplegarRellena() {
  if (formularioRellena.classList.contains('form__oculto')) {
    formularioRellena.classList.remove('form__oculto');
    formularioDisena.classList.add('form__oculto');
    formularioComparte.classList.add('form__oculto');
    botonrotado2.classList.add('rotate');
  } else {
    formularioRellena.classList.add('form__oculto');
    botonrotado2.classList.remove('rotate');
  }
}
function desplegarComparte() {
  if (formularioComparte.classList.contains('form__oculto')) {
    formularioComparte.classList.remove('form__oculto');
    formularioDisena.classList.add('form__oculto');
    formularioRellena.classList.add('form__oculto');
    botonrotado3.classList.add('rotate');
  } else {
    formularioComparte.classList.add('form__oculto');
    botonrotado3.classList.remove('rotate');
  }
}
function crearTarjeta() {
  if (tarjetaCreada.classList.contains('form__oculto')) {
    tarjetaCreada.classList.remove('form__oculto');
  } else {
    tarjetaCreada.classList.add('form__oculto');
  }
}
selectorDisena.addEventListener('click', desplegarDisena);
selectorRellena.addEventListener('click', desplegarRellena);
selectorComparte.addEventListener('click', desplegarComparte);
botonCrearTarjeta.addEventListener('click', crearTarjeta);

//escritura automática visor
function writeData(event) {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
  saveForm();
}
nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);

//foto editor
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  profileImage.src = fr.result;
  formImage.style.backgroundImage = 'url(' + fr.result + ')';
  saveForm();
}
function fakeFileClick() {
  fileField.click();
}
fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);

//diseña cambio color
function init() {
  for(var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}
function setStyles(event) {
  //del elemento donde he hecho el click que me de su atributo data-color
  var newColor = event.currentTarget.getAttribute('data-color');
  resetColor();
  if (newColor !== '') {
    cardContainer.classList.add(newColor);
  }
  saveForm();
}
function resetColor() {
  cardContainer.classList.remove('red', 'grey');
}
init();
//diseña cambio de fuentes
function initFont() {
  for(var i = 0; i < radiosFont.length; i++) {
    radiosFont[i].addEventListener('click', setStylesFont);
  }
}
function setStylesFont(event) {
  var newFont = event.currentTarget.getAttribute('data-font');
  resetFont();
  if (newFont !== '') {
    cardContainer.classList.add(newFont);
  }
  saveForm();
}
function resetFont() {
  cardContainer.classList.remove('comic', 'montserrat');
}
initFont();

//localStorage
function saveForm () {
  var myFormulary = {
    color: radios.value,
    font: getRadiosFontSelected(),
    fullName: nameField.value,
    job: roleField.value,
    image: fileField.img
  };
  localStorage.setItem('myFormulary', JSON.stringify(myFormulary));
}

function getRadiosFontSelected () {
  for (var i = 0; i < radiosFont.length; i++) {
    if (radiosFont[i].checked) {
      return radiosFont[i].getAttribute('data-font');
    }
  }
  return false;
}
