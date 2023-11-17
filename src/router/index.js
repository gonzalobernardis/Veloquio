import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomeView from './views/HomeView.vue';
import MovieDetailsView from '@/views/MovieDetailsView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/movie/:id', name: 'movie-details', component: MovieDetailsView, props: true },
];

const router = new VueRouter({
  mode: 'history', // o 'hash'
  routes,
});

new Vue({
  render: (h) => h(App),
  router, // Mueve esta línea aquí
}).$mount('#app')