var buttonRight = document.getElementById('education__right__button');
var buttonLeft = document.getElementById('education__left__button');
buttonRight.addEventListener('click', function(){
  var education = document.getElementsByClassName('education')[0];
  var experience = document.getElementsByClassName('experience')[0];
  var educationLogo = document.getElementById('education__logo');
  var experienceLogo = document.getElementById('experience__logo');
  education.style.display = 'none';
  experience.style.display = 'flex';
  buttonRight.style.color = '#d6b161';
  buttonLeft.style.color = 'white';
  educationLogo.style.color = 'white';
  experienceLogo.style.color = '#d6b161';
})

buttonLeft.addEventListener('click', function(){
  var education = document.getElementsByClassName('education')[0];
  var experience = document.getElementsByClassName('experience')[0];
  var educationLogo = document.getElementById('education__logo');
  var experienceLogo = document.getElementById('experience__logo');
  education.style.display = 'flex';
  experience.style.display = 'none';
  buttonRight.style.color = 'white';
  buttonLeft.style.color = '#d6b161';
  educationLogo.style.color = '#d6b161';
  experienceLogo.style.color = 'white';
})
