// import Sidebar from '../components/sidebar.js';
// import Navbar from '../components/navbar.js';
//
// import Modal from '../components/modal.js';
//
// // TODO
// // - clic sur modifier ouvre une popin d'édition à gérer via Vue.js
// // - clic sur supprimer supprime la ligne
//
// Vue.component('sidebar', Sidebar);
// Vue.component('navbar', Navbar);
// Vue.component('modal', Modal);
//
// // Vue de la page equipes.html
// var EquipesVue = new Vue({
//   el: '#equipes-app',
//   data: {
//     uri: '/server/api/equipes',
//     showModal: false,
//     modal: {
//       id: 0,
//       title: '',
//       name: '',
//       city: '',
//       sex: '',
//       county: 0,
//     },
//     sexValues: [{
//         id: 'MASCULIN',
//         value: 'Masculin'
//       },{
//         id: 'FEMININ',
//         value: 'Féminin'
//       }],
//     equipes: []
//   },
//   mounted: function() {
//     let self = this;
//     fetch(this.uri)
//       .then(res => res.json())
//       .then(equipes => {
//         if (equipes) {
//           self.equipes = equipes;
//         }
//       });
//   },
//   methods: {
//     add() {
//       this.modal.title = 'Ajout d\'une nouvelle équipe';
//       this.modal.id = 0;
//       this.modal.name = '';
//       this.modal.city = '';
//       this.modal.sex = '';
//       this.modal.county = '';
//       this.showModal = true;
//     },
//     edit(id) {
//       let equipesFiltered = this.equipes.filter(e => e.id === id);
//       if (equipesFiltered && equipesFiltered.length === 1) {
//         let equipe = equipesFiltered[0];
//         this.modal.title = 'Modification d\'une équipe';
//         this.modal.id = id;
//         this.modal.name = equipe.name;
//         this.modal.city = equipe.city;
//         this.modal.sex = equipe.sex;
//         this.modal.county = equipe.county;
//         this.showModal = true;
//       }
//     },
//     submit() {
//       // TODO valider la saisie du formulaire
//       let self = this;
//       let submitUri = this.uri;
//       let method;
//       if (this.modal.id > 0) {
//         submitUri += '/' + this.modal.id;
//         method = 'put';
//       } else {
//         method = 'post';
//       }
//       fetch(submitUri, {
//         method: method,
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: this.modal.name,
//           city: this.modal.city,
//           sex: this.modal.sex,
//           county: this.modal.county
//         })
//       })
//       .then(res => {
//           if (res.status !== 200) {
//             console.error(res.statusText + ' ' + res.status);
//             return;
//           }
//           // Examine the text in the response
//           res.json().then(equipe => {
//             if (self.modal.id > 0) {
//               let idx = self.equipes.findIndex(e => e.id === equipe.id);
//               self.equipes.splice(idx, 1, equipe);
//             } else {
//               self.equipes.push(equipe);
//             }
//             self.showModal = false;
//             self.$forceUpdate();
//           });
//         }
//       )
//       .catch(err => console.error('error', err));
//     },
//     remove(id) {
//       let self = this;
//       fetch(this.uri + '/' + id, {
//         method: 'delete',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(res => {
//           if (res.status !== 200) {
//             console.error(res.statusText + ' ' + res.status);
//             return;
//           }
//           // Examine the text in the response
//           res.json().then(data => {
//             let idx = self.equipes.findIndex(e => e.id === id);
//             self.equipes.splice(idx, 1);
//           });
//         }
//       )
//       .catch(err => console.error('error', err));
//     }
//   }
// });
