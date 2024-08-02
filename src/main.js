import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


router.afterEach(() => {
    window.scrollTo(0, 0);
  });

createApp(App).use(createPinia()).use(router).mount('#app')
