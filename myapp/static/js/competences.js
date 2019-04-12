document.addEventListener('scroll', function(){
  animCompetence(document.getElementsByClassName('french')[0], '95%');
  animCompetence(document.getElementsByClassName('english')[0], '70%');
  animCompetence(document.getElementsByClassName('python')[0], '75%');
  animCompetence(document.getElementsByClassName('js')[0], '45%');
  animCompetence(document.getElementsByClassName('c_language')[0], '50%');
  animCompetence(document.getElementsByClassName('html_css')[0], '95%');
  animCompetence(document.getElementsByClassName('premiere_pro')[0], '85%');
  animCompetence(document.getElementsByClassName('after_effects')[0], '55%');
  animCompetence(document.getElementsByClassName('lightroom')[0], '75%');
  animCompetence(document.getElementsByClassName('illustrator')[0], '25%');
  animCompetence(document.getElementsByClassName('photoshop')[0], '60%');
  animCompetence(document.getElementsByClassName('xd_rate')[0], '80%');
})

function animCompetence(element, position){
  var posElement = element.getBoundingClientRect();
  var posTop = posElement.top;
  var posBottom = posElement.bottom;
  if ((posTop >= 0) && (posBottom <= window.innerHeight)){
    element.style.width = position;
  } else {

  }
}
