import { createRouter, createWebHistory } from "vue-router";
import MainPage from '@/views/main/main.vue'

const routes = [
    {
        path: '/',
        name: 'Main-Page',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router