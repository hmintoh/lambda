import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import './assets/tokens.css';

const ViewHome = () => import('./views/home.vue');
const ViewServices = () => import('./views/services.vue');
const ViewPortfolio = () => import('./views/portfolio.vue');
const View404 = () => import('./views/error.vue');

const routes = [
  { path: '/', component: ViewHome },
  { path: '/services', component: ViewServices },
  { path: '/portfolio', component: ViewPortfolio },
  { path: '/:pathMatch(.*)*', component: View404 },
];

const router = createRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app');
