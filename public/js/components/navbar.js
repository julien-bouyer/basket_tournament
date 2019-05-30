export default {
  methods: {
    back: function () {
      window.history.back();
    }
  },
  props: ['title'],
  template: `<nav class="navbar navbar-expand-lg navbar-light navbar-sps">
                <a class="navbar-brand" href="#">
                  <h2 class="h4">{{title}}</h2>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto"></ul>
                  <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link active" href="#" v-on:click="back">Retour</a>
                    </li>
                  </ul>
                </div>
            </nav>`
};
