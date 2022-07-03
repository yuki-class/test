<template>
    <div>YUKITECK</div>
    <button @click="currentComponent = 'TopVue'">Top</button>
    <button @click="currentComponent = 'ProfileVue'">Profile</button>
    <button @click="currentComponent = 'WorkVue'">Work</button>
    <button @click="currentComponent = 'FormVue'">Form</button>
    <keep-alive>
        <component :is="currentComponent"></component>
    </keep-alive>
    <p v-border="{color: 'green', width: '1000px'}">{{ currentComponent }}</p>
</template>

<script>
import FormVue from './FormVue.vue'
import WorkVue from './WorkVue.vue'
import TopVue from './TopVue.vue'
import ProfileVue from './ProfileVue.vue'
export default {
    data() {
        return {
            currentComponent: 'Top'
        }
    },
    components: {
        TopVue,
        ProfileVue,
        WorkVue,
        FormVue
    },
    methods() {

    }
}
</script>