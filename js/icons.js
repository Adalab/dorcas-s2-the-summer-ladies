
//iconos
const linkSocials = (event) => {
  let guiltyForm = event.currentTarget;
  const rrssId = guiltyForm.getAttribute('data-rrss');
  if (guiltyForm.classList.contains('rellena__phone')) {
    document.querySelector('#' + rrssId).href = 'tel:' + guiltyForm.value;
  } else if (guiltyForm.classList.contains('rellena__email')) {
    document.querySelector('#' + rrssId).href = 'mailto:' + guiltyForm.value;
  } else {
    document.querySelector('#' + rrssId).href = 'https://' + guiltyForm.value;
  }
  const formProperty = guiltyForm.getAttribute('data-property');
  saveForm(formProperty,guiltyForm.value);
};

searchPhone.addEventListener('keyup', linkSocials);
searchLinkedin.addEventListener('keyup', linkSocials);
searchMail.addEventListener('keyup', linkSocials);
searchGithub.addEventListener('keyup', linkSocials);
