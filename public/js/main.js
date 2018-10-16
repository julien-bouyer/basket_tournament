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

var TournoiVue = new Vue({
  el: '#app',
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
