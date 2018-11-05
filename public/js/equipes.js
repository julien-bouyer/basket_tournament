// routes
page('/equipes/edit/:equipe', function(a, b, c) {
  console.log('edition de l\'équipe');
}, function(a, b, c) {
  console.log('edition de l\'équipe (after)');
});

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
