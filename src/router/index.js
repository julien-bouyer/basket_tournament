import Vue from 'vue';
import VueRouter from 'vue-router';

import userRouter from '@/router/user.js';
import teamRouter from '@/router/team.js';
import tournamentRouter from '@/router/tournament.js';

const Home = () => import('@/views/board/Home.vue');
const Login = () => import('@/views/login/Login.vue');
const AdminContainer = () => import('@/views/admin/AdminContainer.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminContainer,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'admin-home',
        component: Home,
        meta: {
          requiresAuth: true,
          menu: 'home',
        },
      },
      ...userRouter,
      ...teamRouter,
      ...tournamentRouter,
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
