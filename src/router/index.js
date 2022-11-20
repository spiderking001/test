import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/other',
        name: 'Other',
        component: () => import('../views/Other.vue')
    }, {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue')

    }
]

 export const router = createRouter({
    history: createWebHashHistory(),
    routes
})


