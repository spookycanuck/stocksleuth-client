import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/staticPages/About.vue'
import Services from '../views/staticPages/Services.vue'
import TermsOfService from '../views/staticPages/TermsOfService.vue'
import Help from '../views/staticPages/Help.vue'
import Login from '../views/Login.vue'
import Contact from '../views/staticPages/Contact.vue'
import PrivacyPolicy from '../views/staticPages/PrivacyPolicy.vue'
import ForgotPw from '../views/ForgotPw.vue'

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
  {
    path: '/forgot-password',
    name: 'forgot password',
    component: ForgotPw
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
