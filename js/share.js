
// Crear enlace
const sendRequest = userForm => {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userForm),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then((resp) => { return resp.json(); })
    .then((result) => { showURL(result); })
    .catch((error) => { console.log(error); });
};
const showURL = result => {
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
};
//BOTON TWITTER
const twitterShare = document.querySelector('.container__comparte--button-twitter');

twitterShare.onclick = (e) => {
  const linkTwitter = document.querySelector('.container__comparte-link  a').href;
  e.preventDefault();
  const twitterWindow = window.open('https://twitter.com/share?url=' + linkTwitter, 'twitter-popup', 'height=350,width=600','590','253');
  if(twitterWindow.focus) { twitterWindow.focus(); }
  return false;
};
