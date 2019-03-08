import NavBt from '../nav-bt.js';

// TODO
// - clic sur modifier ouvre une popin d'édition à gérer via Vue.js
// - clic sur supprimer supprime la ligne

Vue.component('nav-bt', NavBt);
var TournoisVue = new Vue({
  el: '#tournois-app',
  data: {
    tournois: []
  },
  mounted: function() {
    var self = this;
    fetch('/server/api/tournois/1')
      .then(function(response) {
        return response.json();
      })
      .then(function(tournois) {
        if (tournois) {
          self.tournois = tournois;
        }
      });
  }
});
