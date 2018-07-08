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
<<<<<<< HEAD
var visorContainer = document.querySelector('.visor__container1');
var visorSkills = document.querySelector('.visor__skills');
=======

var formRellenaSkills = document.querySelector('.form__rellena--skills');

>>>>>>> master
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
}
function fakeFileClick() {
  fileField.click();
}
fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);


// BOTON RESET

// cuando carga la pagina aparece el visor con datos predefinidos
// si se hace click en reset esos campos vuelven a estar predefinidos

function visorDesignAuto() {
  visorContainer.classList.remove('red');
  visorContainer.classList.remove('grey');
  visorContainer.classList.add('blue');
}
function visorImageAuto() {
  profileImage.src='./images/flamingocardsok.jpg';
  formImage.style.backgroundImage='url("./images/flamingocardsok.jpg")';
}
function visorAuto () {
  //CAMBIAR CAMPO NOMBRE Y APELLIDOS + EMPLEO EN VISOR
  visorName.innerHTML='Nombre y apellidos';
  visorJob.innerHTML='Empleo';

  //CAMBIA A IMAGEN PREDEFINIDA Y DISEÑO PREDEFINIDO (BLUE)
  visorImageAuto();
  visorDesignAuto();

  // OCULTAR BOTON SKILLS


}

visorAuto();


resetButton.addEventListener('click', visorAuto);

//Habilidades

var counterSkills = 0;

function createSelect(entryskills){
  var input_select= document.createElement('select');
  input_select.name = "skills";
  input_select.id = "skills";
  input_select.classList.add("select_skills");

  for( var i= 0; i <entryskills.length; i++){
    var createOption = document.createElement('option');
    createOption.value = entryskills[i];
    input_select.appendChild(createOption);
    createOption.innerHTML = entryskills[i];
  }
 formRellenaSkills.appendChild(input_select);
}

function serverConector(){
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')

    .then(function(response){
      return response.json();
    })

    .then(function(json){
      var skills = json.skills;
      if (counterSkills < 3) {
        createSelect(skills);
        createPlusButton();
        counterSkills = counterSkills + 1;
      }
    });
}

function init(){
  serverConector();
}

init();


function createPlusButton(){
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
