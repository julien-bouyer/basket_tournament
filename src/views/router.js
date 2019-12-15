import VueRouter from 'vue-router';

function lazy(view) {
    return () => import(`./${view}.vue`);
}

const routes = [
    {
        name: 'home',
        path: '/home',
        component: lazy('Home')
    }, {
        name: 'equipes',
        path: '/equipes',
        component: lazy('equipes/List')
    }, {
        name: 'tournois',
        path: '/tournois',
        component: lazy('tournois/List')
    }, {
        name: 'editTournois',
        path: '/tournois/edit/:id',
        component: lazy('tournois/Update')
    }, {
        path: '/',
        redirect: '/home'
    }
];
export default new VueRouter({
    routes,
});