// BOTON RESET
const visorDesignAuto = () => {
  visorContainer.classList.remove('red');
  visorContainer.classList.remove('grey');
};
const visorImageAuto = () => {
  profileImage.src = './images/flamingocardsok.jpg';
  formImage.style.backgroundImage = 'url("./images/flamingocardsok.jpg")';
};
const formAuto = () => {
  nameField.value = '';
  roleField.value = '';
  searchPhone.value = '';
  searchLinkedin.value = '';
  searchMail.value = '';
  searchGithub.value = '';

};
const visorAuto = () => {
  visorName.innerHTML = 'Nombre y apellidos';
  visorJob.innerHTML = 'Empleo';

  visorImageAuto();
  visorDesignAuto();
  formAuto();
  resetFont();

  visorSkills.classList.add('form__oculto');
};
resetButton.addEventListener('click', visorAuto);
