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



