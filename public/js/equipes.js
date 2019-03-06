
// TODO
// - clic sur modifier ouvre une popin d'édition à gérer via Vue.js
// - clic sur supprimer supprime la ligne

var EquipesVue = new Vue({
  el: '#equipes-app',
  data: {
    equipes: []
  },
  mounted: function() {
    var self = this;
    fetch('/server/api/equipes')
      .then(function(response) {
        return response.json();
      })
      .then(function(equipes) {
        if (equipes) {
          self.equipes = equipes;
        }
      });
  }
});
