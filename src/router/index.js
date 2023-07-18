import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import TermsOfService from '../views/TermsOfService.vue'
import Help from '../views/Help.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/home'
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/privacy policy',
    name: 'privacy policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms of service',
    name: 'terms of service',
    component: TermsOfService
  },
  {
    path: '/help',
    name: 'help',
    component: Help 
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
