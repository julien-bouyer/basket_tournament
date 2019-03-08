import NavBt from '../nav-bt.js';
import Modal from '../components/modal.js';

// TODO
// - clic sur modifier ouvre une popin d'édition à gérer via Vue.js
// - clic sur supprimer supprime la ligne

Vue.component('nav-bt', NavBt);
Vue.component('modal', Modal);

// Vue de la page equipes.html
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
  },
  methods: {
    edit(id) {
      console.log('edit : ' + id);
    },
    remove(id) {
      console.log('remove : ' + id);
    }
  }
});
