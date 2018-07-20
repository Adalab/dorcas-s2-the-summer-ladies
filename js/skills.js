
//Habilidades
const createSelect = (entryskills) => {
  const inputSelect = document.createElement('select');
  inputSelect.name = 'skills';
  inputSelect.id = 'skills' + counterSkills;
  inputSelect.classList.add('select_skills');
  inputSelect.setAttribute('data-index', counterSkills);
  for (const skill of entryskills) {
    const createOption = document.createElement('option');
    createOption.value = skill;
    inputSelect.appendChild(createOption);
    createOption.innerHTML = skill;
  }
  inputSelect.addEventListener('change', skillAgregator);
  formRellenaSkills.appendChild(inputSelect);
};
const skillAgregator = (e) => {
  const activeSelect = e.currentTarget;
  const activeSkills = document.querySelector('#selected' +  activeSelect.id);
  activeSkills.innerHTML= activeSelect.value;
  visorSkills.classList.remove('form__oculto');
  skillsToSave[activeSelect.getAttribute('data-index')] = activeSelect.value;
  saveForm('skills', skillsToSave);
};
const serverConector = () => {
  fetch(
    'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      skills = json.skills;
      addSkills();
      includeLocalStorage();
    });
};
const addSkills = () => {
  if (counterSkills < 3) {
    createSelect(skills);
    createPlusButton();
    counterSkills = counterSkills + 1;
  }
};
serverConector();
const createPlusButton = () => {
  const plusButton = document.createElement('a');
  const divButton = document.createElement('div');
  const iButton = document.createElement('i');
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
};
