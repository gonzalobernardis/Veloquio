import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomeView from './views/HomeView.vue';
import MovieDetailsView from './views/MovieDetailsView.vue';
import Favorites from './views/Favorites.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/movie/:id', name: 'movie-details', component: MovieDetailsView, props: true },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
