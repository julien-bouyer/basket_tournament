import NavBt from '../components/nav-bt.js';
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
    uri: '/server/api/equipes',
    showModal: false,
    equipes: []
  },
  mounted: function() {
    var self = this;
    fetch(this.uri)
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
      this.showModal = true;

      //let modal = this.$ref.modal;

      fetch(this.uri + '/' + id, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Les Palots',
          city: 'Saint Georges de Montaigu',
          sex: 'FEMININ',
          county: 85
        })
      })
      .then(res => {
          if (res.status !== 200) {
            console.error(res.statusText + ' ' + res.status);
            return;
          }
          // Examine the text in the response
          res.json().then(data => {
            console.log(data);
          });
        }
      )
      .catch(err => {
        console.error('error', err);
      });
    },
    remove(id) {
      fetch(this.uri + '/' + id, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
          if (res.status !== 200) {
            console.error(res.statusText + ' ' + res.status);
            return;
          }

          // Examine the text in the response
          res.json().then(data => {
            console.log(data);
          });
        }
      )
      .catch(err => {
        console.error('error', err);
      });
    }
  }
});
