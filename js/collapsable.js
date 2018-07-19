
//desplegables
const desplegarDisena = () => {
  if (formularioDisena.classList.contains('form__oculto')) {
    formularioDisena.classList.remove('form__oculto');
    formularioRellena.classList.add('form__oculto');
    formularioComparte.classList.add('form__oculto');
    botonrotado1.classList.add('rotate');
  } else {
    formularioDisena.classList.add('form__oculto');
    botonrotado1.classList.remove('rotate');
  }
};

const desplegarRellena = () => {
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
const desplegarComparte = () => {
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
const crearTarjeta = () => {
  if (tarjetaCreada.classList.contains('form__oculto')) {
    tarjetaCreada.classList.remove('form__oculto');
  } else {
    tarjetaCreada.classList.add('form__oculto');
  }
  sendRequest(userForm);
}
console.log ('hola');

selectorDisena.addEventListener('click', desplegarDisena);
selectorRellena.addEventListener('click', desplegarRellena);
selectorComparte.addEventListener('click', desplegarComparte);
botonCrearTarjeta.addEventListener('click', crearTarjeta);
