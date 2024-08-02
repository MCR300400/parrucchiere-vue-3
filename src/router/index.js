import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/ServicesView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
