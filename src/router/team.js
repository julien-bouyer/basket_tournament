const TeamList = () => import('@/views/team/TeamList.vue');
const TeamForm = () => import('@/views/team/TeamForm.vue');

const teamRouter = [
  {
    path: 'teams',
    name: 'TeamList',
    component: TeamList,
    meta: {
      requiresAuth: true,
      menu: 'teams',
    },
  },
  {
    path: 'team/:id?',
    name: 'TeamForm',
    component: TeamForm,
    meta: {
      requiresAuth: true,
      menu: 'teams',
    },
  },
];

export default teamRouter;
