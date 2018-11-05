Vue.component('nav-bt', {
  methods: {
    back: function () {
      window.history.back();
    }
  },
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  <h1 class="h4">SPS Basket</h1>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/tournois">Tournois</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/equipes">Equipes</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/joueurs">Joueurs</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/matchs">Matchs</a>
                    </li>
                  </ul>
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link active" href="#" v-on:click="back">Retour</a>
                    </li>
                  </ul>
                </div>
            </nav>`
});
