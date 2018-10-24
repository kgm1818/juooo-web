import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Index'

Vue.use(Router)

export default new Router({
    routes: [{
        name: 'home',
        path: '/',
        component: Home
    }]
})