import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from './views/HomeVue.vue'
import UsersVue from './views/UsersVue.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersProfile from './views/UsersProfile.vue'
import HeaderHome from './views/HeaderHome.vue'
import HeaderUsers from './views/HeaderUsers.vue'


const routes = [
    {
        path: "/",
        components: {
            default: HomeVue,
            header: HeaderHome
        } 
    },
    {
        path: "/users",
        components: {
            default: UsersVue,
            header: HeaderUsers
        } 
    },
    {
        path: "/users/:id",
        component: UsersVue,
        props: true, 
        children: [
            {path: "posts", component: UsersPosts },
            {path: "profile", component: UsersProfile, name: "users-id-profile" }
        ]
    },
    {
        path: '/:catchAll(.*)',
        redirect: "/"
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        console.log(to);
        if (to.hash) {
            return {
                selector: to.hash
            }
        }

        return {x:0, y:100 }
    }
})
  
export default router