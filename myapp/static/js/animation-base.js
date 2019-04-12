var animation_circle = lottie.loadAnimation({
  container: document.getElementById('circle__animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/static/circle.json'
})

var animation_burger = lottie.loadAnimation({
  container: document.getElementById('menu__button'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/static/hamburger.json'
});

var animation_logo = lottie.loadAnimation({
  container: document.getElementById('logo__animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/static/logo_felixmaillet.json'
});

var animation_menu = lottie.loadAnimation({
  container: document.getElementById('menu__animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  rendererSettings: {
  	preserveAspectRatio: 'none',
  },
  path: '/static/animationMenu.json',
});

var element = document.getElementById('logo__animation');
element.addEventListener('mouseover', function(){
  animation_logo.goToAndPlay(1);
})

var menuOpen = 0;
var buttonMenu = document.getElementById('menu__button');
buttonMenu.addEventListener('click', function(){
  if (menuOpen === 0){
    menuOpen = 1;
    animation_burger.setDirection(1);
    animation_burger.play();
    var menuClose = document.getElementById('open_text');
    menuClose.innerHTML = 'CLOSE';
    var animateMenu = document.getElementById('menu__animation');
    animateMenu.style.display = 'block';
    animation_menu.setDirection(1);
    animation_menu.play();
  } else {
    menuOpen = 0;
    var menu = document.getElementById('menu');
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
    menu.style.top = '10px';
    var menuClose = document.getElementById('open_text');
    menuClose.innerHTML = 'OPEN';
    animation_burger.setDirection(-1);
    animation_burger.play();
    animation_menu.setDirection(-1);
    animation_menu.play();
  }
})

animation_menu.addEventListener('complete', function(){
  if (menuOpen === 1){
    var menu = document.getElementById('menu');
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
    menu.style.top = '0';
  } else{
    var animateMenu = document.getElementById('menu__animation');
    animateMenu.style.display = 'none';
  }
})
