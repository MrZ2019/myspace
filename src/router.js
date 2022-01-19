

import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './pages/Home'
import Todo from './pages/Todo'


const routes = 
[
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/todo',
        component: Todo,
        name: 'todo'
    }
]

export default new VueRouter({
    routes
})

Vue.use(VueRouter)
