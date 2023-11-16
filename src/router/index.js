import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomeView from './views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
