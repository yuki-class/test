import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .directive("border", function(el, binding) {
        el.style.border = "1px solid red"
        el.style.color = binding.value.color
        el.style.width = binding.value.width
    })
    .mixin({
        created() {
            console.log("global mixin")
        }
    })
    .mount('#app')
