import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import About from '../views/staticPages/About.vue'
import Services from '../views/staticPages/Services.vue'
import TermsOfService from '../views/staticPages/TermsOfService.vue'
import Help from '../views/staticPages/Help.vue'
import Login from '../views/Login.vue'
import Contact from '../views/staticPages/Contact.vue'
import PrivacyPolicy from '../views/staticPages/PrivacyPolicy.vue'
import ForgotPw from '../views/ForgotPw.vue'
import SignUp from '../views/SignUp.vue'
import Account from '../views/Account.vue'
import Notifications from '../views/Notifications.vue'
import NotFound from '../views/staticPages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: TermsOfService
  },
  {
    path: '/help',
    name: 'Help',
    component: Help 
  },
  {
    path: '/forgot-password',
    name: 'ForgotPW',
    component: ForgotPw
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
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

router.beforeEach((to, from, next) => {
  const isAuth = store.getters['auth/auth'];
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  //Check for protected route
  if (requiresAuth && !isAuth) {
    next("/sign-up");
  }
  else {
    next();
  }
})

export default router
