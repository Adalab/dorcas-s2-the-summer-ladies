'use strict';
//desplegable
var selectorDisena = document.querySelector('.title__disena');
var formularioDisena = document.querySelector('.form__disena--fontsColors');
var selectorRellena = document.querySelector('.titulo__rellena');
var formularioRellena = document.querySelector('.form__rellena');
var selectorComparte = document.querySelector('.container__comparte--icon');
var formularioComparte = document.querySelector('.form__comparte');
var tarjetaCreada = document.querySelector('.container__comparte-created');
var botonCrearTarjeta = document.querySelector('.container__comparte--buttonstyle');
var botonrotado1 = document.querySelector('.move1');
var botonrotado2 = document.querySelector('.move2');
var botonrotado3 = document.querySelector('.move3');
//escritura automatica visor
var nameField = document.querySelector('.input__name');
var roleField = document.querySelector('.input__job');
var visorName = document.querySelector('.visor__view-name');
var visorJob = document.querySelector('.visor__view-profession');
//foto editor
var fr = new FileReader();
var uploadBtn = document.querySelector('.form__rellena--button');
var fileField = document.querySelector('#imagen');
var profileImage = document.querySelector('.visor__image-foto');
var formImage = document.querySelector('.form__rellena--reload ');
//boton resetreset
var resetButton = document.querySelector('.visor__button-reset');
var visorContainer = document.querySelector('.visor__container1');
var visorSkills = document.querySelector('.visor__skills');
var formRellenaSkills = document.querySelector('.form__rellena--skills');
//diseña cambio color
var cardContainer = document.querySelector('.visor__container1');
var radios = document.querySelectorAll('.point');
var radiosFont = document.querySelectorAll('.point1');
//Habilidades
var counterSkills = 0;
var skillsToSave =[];
var skills = [];
//iconos
var searchPhone = document.querySelector('.rellena__phone');
var searchLinkedin = document.querySelector('.rellena__linkedin');
var searchMail = document.querySelector('.rellena__email');
var searchGithub = document.querySelector('.rellena__github');
//link
var responseURL = document.querySelector('.container__comparte-link');
//localStorage
var userForm = {};
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
  sendRequest(userForm);
}
selectorDisena.addEventListener('click', desplegarDisena);
selectorRellena.addEventListener('click', desplegarRellena);
selectorComparte.addEventListener('click', desplegarComparte);
botonCrearTarjeta.addEventListener('click', crearTarjeta);
//escritura automática visor
function writeData(event) {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  var formProperty = guiltyElement.getAttribute('data-property');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
  saveForm(formProperty,guiltyElement.value);
}
nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);
//foto editor
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', function(){
    writeImage(fr.result);
  });
  fr.readAsDataURL(myFile);
}
function writeImage(photo) {
  profileImage.src = photo;
  formImage.style.backgroundImage = 'url(' + photo + ')';
  saveForm('photo', photo);
}
function fakeFileClick() {
  fileField.click();
}
fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
// BOTON RESET
function visorDesignAuto() {
  visorContainer.classList.remove('red');
  visorContainer.classList.remove('grey');
}
function visorImageAuto() {
  profileImage.src = './images/flamingocardsok.jpg';
  formImage.style.backgroundImage = 'url("./images/flamingocardsok.jpg")';
}
function formAuto() {
  nameField.value = '';
  roleField.value = '';
  searchPhone.value = '';
  searchLinkedin.value = '';
  searchMail.value = '';
  searchGithub.value = '';

}
function visorAuto() {
  visorName.innerHTML = 'Nombre y apellidos';
  visorJob.innerHTML = 'Empleo';

  visorImageAuto();
  visorDesignAuto();
  formAuto();
  resetFont();

  visorSkills.classList.add('form__oculto');
}
resetButton.addEventListener('click', visorAuto);
//Habilidades
function createSelect(entryskills) {
  var inputSelect = document.createElement('select');
  inputSelect.name = 'skills';
  inputSelect.id = 'skills' + counterSkills;
  inputSelect.classList.add('select_skills');
  inputSelect.setAttribute('data-index', counterSkills);
  for (var i = 0; i < entryskills.length; i++) {
    var createOption = document.createElement('option');
    createOption.value = entryskills[i];
    inputSelect.appendChild(createOption);
    createOption.innerHTML = entryskills[i];
  }
  inputSelect.addEventListener('change', skillAgregator);
  formRellenaSkills.appendChild(inputSelect);
}
function skillAgregator(e){
  var activeSelect = e.currentTarget;
  var activeSkills = document.querySelector('#selected' +  activeSelect.id);
  activeSkills.innerHTML= activeSelect.value;
  visorSkills.classList.remove('form__oculto');
  skillsToSave[activeSelect.getAttribute('data-index')] = activeSelect.value;
  saveForm('skills', skillsToSave);
}
function serverConector() {
  fetch(
    'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      skills = json.skills;
      addSkills();
      includeLocalStorage();
    });
}
function addSkills() {
  if (counterSkills < 3) {
    createSelect(skills);
    createPlusButton();
    counterSkills = counterSkills + 1;
  }
}
serverConector();
function createPlusButton() {
  var plusButton = document.createElement('a');
  var divButton = document.createElement('div');
  var iButton = document.createElement('i');
  divButton.classList.add('form__rellena--plus');
  divButton.classList.add('color--orange');
  divButton.classList.add('addSkill');
  iButton.classList.add('fas');
  iButton.classList.add('fa-plus');
  iButton.classList.add('color--orange');
  divButton.appendChild(iButton);
  plusButton.appendChild(divButton);
  formRellenaSkills.appendChild(plusButton);
  plusButton.addEventListener('click', serverConector);
}
//diseña cambio color
function init() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}
function setStyles(event) {
  var newColor = event.currentTarget.getAttribute('data-color');
  var value = event.currentTarget.value;
  resetColor();
  if (newColor !== '') {
    cardContainer.classList.add(newColor);
  }
  saveForm('palette', parseInt(value));
}
function resetColor() {
  cardContainer.classList.remove('red', 'grey');
}
init();
//diseña cambio de fuentes
function initFont() {
  for (var i = 0; i < radiosFont.length; i++) {
    radiosFont[i].addEventListener('click', setStylesFont);
  }
}
function setStylesFont(event) {
  var newFont = event.currentTarget.getAttribute('data-font');
  var value = event.currentTarget.value;
  resetFont();
  if (newFont !== '') {
    cardContainer.classList.add(newFont);
  }
  saveForm('typography', parseInt(value));
}
function resetFont() {
  cardContainer.classList.remove('comic', 'montserrat');
}
initFont();
//iconos
searchPhone.addEventListener('keyup', linkSocials);
searchLinkedin.addEventListener('keyup', linkSocials);
searchMail.addEventListener('keyup', linkSocials);
searchGithub.addEventListener('keyup', linkSocials);

function linkSocials(event) {
  var guiltyForm = event.currentTarget;
  var rrssId = guiltyForm.getAttribute('data-rrss');
  if (guiltyForm.classList.contains('rellena__phone')) {
    document.querySelector('#' + rrssId).href = 'tel:' + guiltyForm.value;
  } else if (guiltyForm.classList.contains('rellena__email')) {
    document.querySelector('#' + rrssId).href = 'mailto:' + guiltyForm.value;
  } else {
    document.querySelector('#' + rrssId).href = 'https://' + guiltyForm.value;
  }
  var formProperty = guiltyForm.getAttribute('data-property');
  saveForm(formProperty,guiltyForm.value);
}
// Crear enlace
function sendRequest(userForm){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userForm),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });
}
function showURL(result){
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
//BOTON TWITTER
var twitterShare = document.querySelector('.container__comparte--button-twitter');

twitterShare.onclick = function(e) {
  var linkTwitter = document.querySelector('.container__comparte-link  a').href;
  e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?url=' + linkTwitter, 'twitter-popup', 'height=350,width=600','590','253');
  if(twitterWindow.focus) { twitterWindow.focus(); }
  return false;
};
//localStorage
function includeLocalStorage() {
  var disponible = isAvailableForm();
  if (disponible) {
    var result = localStorage.getItem('userForm');
    userForm = JSON.parse(result);
    var resultArray = Object.keys(userForm);
    resultArray.map(function(clave) {
      var elem = findElementToModify(clave);
      modifyElement(clave, elem);
    });
  } else {
    userForm = {};
  }
}
function findElementToModify(clave) {
  var elem = document.querySelector('.input__' + clave);
  if (clave === 'palette' || clave === 'typography') {
    elem = document.querySelector('.input__' + clave + '_' + userForm[clave]);
  }
  return elem;
}
function modifyElement(clave, elem) {
  if (clave === 'photo') {
    writeImage(userForm[clave]);
  } else if (clave === 'palette' || clave === 'typography') {
    elem.setAttribute('checked', 'checked');
  } else if (clave === 'skills') {
    printSkills();
  } else {
    elem.value = userForm[clave];
  }
}
function printSkills() {
  for (var i = 0; i < userForm.skills.length; i++) {
    var selectElement = document.querySelector('#skills' + i);
    if (selectElement === null) {
      addSkills();
      selectElement = document.querySelector('#skills' + i);
    }
    checkSelectedOption(selectElement, i);
  }
}
function checkSelectedOption(selectElement, i) {
  for (var j = 0; j < selectElement.options.length; j++) {
    if (selectElement.options[j].value === userForm.skills[i]) {
      selectElement.options[j].setAttribute('selected', 'selected');
    }
  }
}
function saveForm(clave,valor) {
  userForm[clave] = valor;
  localStorage.setItem('userForm', JSON.stringify(userForm));
}
function isAvailableForm() {
  return localStorage.getItem('userForm') !== null;
}
