const TournamentList = () => import('@/views/tournament/TournamentList.vue');
const TournamentForm = () => import('@/views/tournament/TournamentForm.vue');

const tournamentRouter = [
  {
    path: 'tournaments',
    name: 'TournamentList',
    component: TournamentList,
    meta: {
      requiresAuth: true,
      menu: 'tournaments',
    },
  },
  {
    path: 'tournament/:id?',
    name: 'TournamentForm',
    component: TournamentForm,
    meta: {
      requiresAuth: true,
      menu: 'tournaments',
    },
  },
];

export default tournamentRouter;
