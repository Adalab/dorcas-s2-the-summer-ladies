'use strict';

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
