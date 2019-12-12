// import Sidebar from '../components/sidebar.js';
// import Navbar from '../components/navbar.js';
//
// // TODO
// // - clic sur modifier ouvre une popin d'édition à gérer via Vue.js
// // - clic sur supprimer supprime la ligne
//
// Vue.component('sidebar', Sidebar);
// Vue.component('navbar', Navbar);
//
// var TournoisVue = new Vue({
//   el: '#tournois-app',
//   data: {
//     tournois: []
//   },
//   mounted: function() {
//     var self = this;
//     fetch('/server/api/tournois/1')
//       .then(res => res.json())
//       .then(tournois => {
//         if (tournois) {
//           self.tournois = tournois;
//         }
//       });
//   }
// });
