import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber"

createApp(App)
    .component('LikeNumber', LikeNumber)
    .mount('#app')
