import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'animate.css';
import 'default-passive-events';

createApp(App).use(store).mount('#app')
