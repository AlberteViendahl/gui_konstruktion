import { createApp } from 'vue'
import router from './router';
import App from './App.vue'

import './assets/styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App)
    .use(router)
    .mount('#app')
