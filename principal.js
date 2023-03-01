document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  const options = {
    'edge': 'right'
  };
  var instances = M.Sidenav.init(elems, options);
});

