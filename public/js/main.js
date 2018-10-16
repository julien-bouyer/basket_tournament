(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    fetch('/server/api/tournois/1')
      .then(function(response) {
        return response.json();
      })
      .then(function(tournois) {
        if (tournois) {
          var app = document.getElementById('app');
          app.innerText = tournois[0].nom;
        }
      });
  }, false);
})();
