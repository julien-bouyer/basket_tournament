Vue.component('nav-bt', {
  methods: {
    back: function () {
      window.history.back();
    }
  },
  data: function() {
    return  {
      title: 'SPS Basket',
      links: [
        {
          title: 'Home',
          href: '/'
        },{
          title: 'Tournois',
          href: '/tournois'
        },{
          title: 'Equipes',
          href: '/equipes'
        },{
          title: 'Joueurs',
          href: '/joueurs',
          disabled: true
        },{
          title: 'Matchs',
          href: '/matchs',
          disabled: true
        },
      ]
    };
  },
  props: ['current'],
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                  <h1 class="h4">{{title}}</h1>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li v-for="link in links"
                        v-bind:class="['nav-item', { active: current === link.title }]">
                      <a v-bind:class="['nav-link', { disabled: link.disabled === true }]" v-bind:href="link.href">{{link.title}}</a>
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
