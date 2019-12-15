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
        name: 'editEquipes',
        path: '/equipes/edit/:id',
        component: lazy('equipes/Update')
    }, {
        name: 'tournois',
        path: '/tournois',
        component: lazy('Tournois')
    }, {
        path: '/',
        redirect: '/home'
    }
];
export default new VueRouter({
    routes,
});