import NavBt from './components/nav-bt.js';
// (function() {
//   'use strict';
//   document.addEventListener('DOMContentLoaded', function() {
//     fetch('/server/api/tournois/1')
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(tournois) {
//         if (tournois) {
//           console.log(tournois[0]);
//         }
//       });
//   }, false);
// })();

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

Vue.component('nav-bt', NavBt);

var HomeVue = new Vue({
  el: '#app',
  data: {
    title: 'Bienvenue'
  }
});
