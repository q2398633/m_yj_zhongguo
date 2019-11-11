import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { name: 'index', path: '/', redirect: '/login' },
        { name: 'login', path: '/login', component: Login },
        { name: 'home', path: '/home', component: Home }
    ]
})

export default router