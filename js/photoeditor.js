'use strict';

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
console.log('soy photoeditor');
