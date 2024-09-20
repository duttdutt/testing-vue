// router.ts
import { createRouter, createMemoryHistory } from 'vue-router';
import View from './views/View.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

const routes = [
  { path: '/', component: View, children: [
    { path: 'home', component: HomeView },
    { path: 'about', component: AboutView },
  ]},
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
