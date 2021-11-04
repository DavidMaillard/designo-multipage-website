import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home.vue'
import AppDesign from '@/views/AppDesign.vue'
import WebDesign from '@/views/WebDesign.vue'
import GraphicDesign from '@/views/GraphicDesign.vue'
import About from '@/views/About.vue'
import Locations from '@/views/Locations.vue'
import Contact from '@/views/Contact.vue'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/web-design',
      name: 'web-design',
      component: WebDesign,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/app-design',
      name: 'app-design',
      component: AppDesign,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/graphic-design',
      name: 'graphic-design',
      component: GraphicDesign,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        authNotRequired: true
      }
    },
    { path: '*', redirect: '/' }
  ]
})

export default router
