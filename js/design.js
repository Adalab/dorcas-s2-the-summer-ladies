
//diseña cambio color
const init = () => {
  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
};
const setStyles = (event) => {
  const newColor = event.currentTarget.getAttribute('data-color');
  const value = event.currentTarget.value;
  resetColor();
  if (newColor !== '') {
    cardContainer.classList.add(newColor);
  }
  saveForm('palette', parseInt(value));
};
const resetColor = () => {
  cardContainer.classList.remove('red', 'grey');
};
init();
//diseña cambio de fuentes
const initFont = () => {
  for (var i = 0; i < radiosFont.length; i++) {
    radiosFont[i].addEventListener('click', setStylesFont);
  }
};
const  setStylesFont = (event) => {
  const newFont = event.currentTarget.getAttribute('data-font');
  const value = event.currentTarget.value;
  resetFont();
  if (newFont !== '') {
    cardContainer.classList.add(newFont);
  }
  saveForm('typography', parseInt(value));
};
const resetFont = () => {
  cardContainer.classList.remove('comic', 'montserrat');
};
initFont();
