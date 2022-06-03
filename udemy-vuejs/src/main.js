import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from "./LikeNumber"



createApp(App)
    .component('LikeNumber', LikeNumber)
    .mount('#app')
