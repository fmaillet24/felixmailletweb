var animation_burger = lottie.loadAnimation({
  container: document.getElementById('menu__button'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'static/hamburger.json'
});

var menuOpen = 0;
var buttonMenu = document.getElementById('menu__button');
buttonMenu.addEventListener('click', function(){
  if (menuOpen === 0){
    var menu = document.getElementById('menu');
    animation_burger.setDirection(1);
    animation_burger.play();
    menu.style.height = '100%';
    menuOpen = 1;
  } else{
    var menu = document.getElementById('menu');
    animation_burger.setDirection(-1);
    animation_burger.play();
    menu.style.height = '0%';
    menuOpen = 0;
  }
})
