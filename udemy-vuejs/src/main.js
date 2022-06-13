import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber"

createApp(App)
    .component('LikeNumber', LikeNumber)
    .directive("border", function() {
        
    })
    .mixin({
        created() {
            console.log("global mixin")
        }
    })
    .mount('#app')
