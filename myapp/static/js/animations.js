var animation_logo = lottie.loadAnimation({
  container: document.getElementById('logo__animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'static/logo_felixmaillet.json'
});

var animation_circle = lottie.loadAnimation({
  container: document.getElementById('circle__animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'static/circle.json'
});

var element = document.getElementById('logo__animation');
element.addEventListener('mouseover', function(){
  animation_logo.goToAndPlay(1);
})
