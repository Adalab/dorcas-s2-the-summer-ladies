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
var visorName = document.querySelector('.visor__view-name');
var visorJob = document.querySelector('.visor__view-profession');
//foto editor
var fr = new FileReader();
var uploadBtn = document.querySelector('.form__rellena--button');
var fileField = document.querySelector('#imagen');
var profileImage = document.querySelector('.visor__image-foto');
var formImage = document.querySelector('.form__rellena--reload ');

//boton reset
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
//iconos
var searchPhone = document.querySelector('.rellena__phone');
var searchLinkedin = document.querySelector('.rellena__linkedin');
var searchMail = document.querySelector('.rellena__email');
var searchGithub = document.querySelector('.rellena__github');

//link
var responseURL = document.querySelector('.container--comparte-link');

//localStorage
var userForm = {
  'palette': 1,
  'typography': 2,
  'name' : 'María García',
  'job': 'Front-end developer',
  'phone': '+34 666666666',
  'email': 'mariagar@example.com',
  'linkedin': 'mariagar',
  'github': 'mariagar',
  'photo': 'data:image/png;base64,2342ba...',
  'skills': ['HTML', 'Sass', 'JavaScript']
};
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
  sendRequest();
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
  userForm[formProperty] = guiltyElement.value;
  saveForm();
  // if (targetID === 'userName') {
  //   userForm.name = guiltyElement.value;
  // } else if (targetID === 'job') {
  //   userForm.job = guiltyElement.value;
  // }
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
  //Guarda la imagen (todo el troncho data:image/JPG;base64,jkdsfhgdgd...) en nuestro objeto del formulario
  userForm.photo = fr.result;
  saveForm();
}
function fakeFileClick() {
  fileField.click();
}
fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
// BOTON RESET

// cuando carga la pagina aparece el visor con datos predefinidos
// si se hace click en reset esos campos vuelven a estar predefinido
function visorDesignAuto() {
  visorContainer.classList.remove('red');
  visorContainer.classList.remove('grey');
}
function visorImageAuto() {
  profileImage.src = './images/flamingocardsok.jpg';
  formImage.style.backgroundImage = 'url("./images/flamingocardsok.jpg")';
}
function visorAuto() {
  //CAMBIAR CAMPO NOMBRE Y APELLIDOS + EMPLEO EN VISOR
  visorName.innerHTML = 'Nombre y apellidos';
  visorJob.innerHTML = 'Empleo';

  //CAMBIA A IMAGEN PREDEFINIDA Y DISEÑO PREDEFINIDO (BLUE)
  visorImageAuto();
  visorDesignAuto();

  // OCULTAR BOTON SKILLS
  visorSkills.classList.add('form_hidden');
}

visorAuto();

resetButton.addEventListener('click', visorAuto);

//Habilidades
function createSelect(entryskills) {
  var input_select = document.createElement('select');
  input_select.name = 'skills';
  input_select.id = 'skills';
  input_select.classList.add('select_skills');
  for (var i = 0; i < entryskills.length; i++) {
    var createOption = document.createElement('option');
    createOption.value = entryskills[i];
    input_select.appendChild(createOption);
    createOption.innerHTML = entryskills[i];
  }
  formRellenaSkills.appendChild(input_select);
}
function serverConector() {
  fetch(
    'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    var skills = json.skills;
    if (counterSkills < 3) {
      createSelect(skills);
      createPlusButton();
      counterSkills = counterSkills + 1;
    }
  });
}
function initSkills() {
  serverConector();
}
initSkills();
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
function minusButton(button) {
  button.classList.toggle('fa-plus');
  button.classList.toggle('fa-minus');
}

//diseña cambio color
function init() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}
function setStyles(event) {
  //del elemento donde he hecho el click que me de su atributo data-color
  var newColor = event.currentTarget.getAttribute('data-color');
  var value = event.currentTarget.value;
  resetColor();
  if (newColor !== '') {
    cardContainer.classList.add(newColor);
  }
  userForm.palette = value;
  saveForm();
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
  userForm.typography = value;
  saveForm();
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
  userForm[formProperty] = guiltyForm.value;
  saveForm();
}

// Crear enlace 
function sendRequest(userForm){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userForm),
    headers: {
      //no sabemos si funciona
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
  e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600','590','253');
  if(twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  };

//localStorage
function saveForm() {
  localStorage.setItem('userForm', JSON.stringify(userForm));
}

