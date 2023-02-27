document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

document.addEventListener('scroll', function(){
  var animacion = document.getElementById('section-img-desktop');
  var posicionObj1 = animacion.getBoundingClientRect().top;
  var tamañoDePantalla = window.innerHeight/3

  if (posicionObj1 < tamañoDePantalla) {
    animacion.style.animation = 'mover 1s ease-out'
  }
})

