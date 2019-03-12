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
    modal: {
      id: 0,
      title: '',
      name: '',
      city: '',
      sex: '',
      county: 0,
    },
    sexValues: [{
        id: 'MASCULIN',
        value: 'Masculin'
      },{
        id: 'FEMININ',
        value: 'Féminin'
      }],
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
    add() {
      debugger;
      this.modal.title = 'Ajout d\'une nouvelle équipe';
      this.modal.id = 0;
      this.modal.name = '';
      this.modal.city = '';
      this.modal.sex = '';
      this.modal.county = '';
      this.showModal = true;
    },
    edit(id) {
      console.log('edit : ' + id);
      debugger;
      let equipe = this.equipes[id];
      if (equipe) {
        this.modal.title = 'Modification d\'une équipe';
        this.modal.id = id;
        this.modal.name = equipe.name;
        this.modal.city = equipe.city;
        this.modal.sex = equipe.sex;
        this.modal.county = equipe.county;
        this.showModal = true;
      }
    },
    submit() {
      debugger;
      // TODO récupérer les infos de la modal
      let submitUri = this.uri;
      let method;
      if (this.modal.id > 0) {
        submitUri += '/' + this.modal.id;
        method = 'put';
      } else {
        method = 'post';
      }
      fetch(submitUri, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.modal.name,
          city: this.modal.city,
          sex: this.modal.sex,
          county: this.modal.county
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
