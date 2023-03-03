document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  const options = {
    'edge': 'right'
  };
  var instances = M.Sidenav.init(elems, options);
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  window.addEventListener('load', ()=> {

    carga();
  
    function carga() {
      document.getElementById('carga').className = 'hide';
      document.getElementById('contenido').className = ''
    }
  })