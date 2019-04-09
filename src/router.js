import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Bootstrap from 'bootstrap'
// var $ = require("jquery");
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.min.css'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
