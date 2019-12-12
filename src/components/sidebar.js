export default {
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
  template: `<nav class="sidebar js-sidebar">
                <div class="sidebar-header">
                    <h3>{{title}}</h3>
                </div>

                <ul class="list-unstyled components">
                    <p>Gestion</p>
                    <li v-for="link in links"
                        v-bind:class="['nav-item', { active: current === link.title }]">
                      <a v-bind:class="['nav-link', { disabled: link.disabled === true }]" v-bind:href="link.href">{{link.title}}</a>
                    </li>
                    <!--<li>
                        <a href="#">About</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>-->
                </ul>
            </nav>`
};
