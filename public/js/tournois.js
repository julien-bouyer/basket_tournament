// routes
page('/tournois/edit/:tournoi', function(a, b, c) {
  console.log('edition du tournoi');
}, function(a, b, c) {
  console.log('edition du tournoi (after)');
});

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
