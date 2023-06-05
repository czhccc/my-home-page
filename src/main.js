import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'animate.css';


import { Popover } from 'ant-design-vue';
import 'ant-design-vue/lib/popover/style/css'

createApp(App).use(store)
.use(Popover)
.mount('#app')
