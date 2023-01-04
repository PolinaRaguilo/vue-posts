import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import PostsPage from '../pages/PostsPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import PostPage from '../pages/PostPage.vue';
import PostsPageStore from '../pages/PostsPageStore.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/posts/:id',
    component: PostPage,
  },
  {
    path: '/store-posts',
    component: PostsPageStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
