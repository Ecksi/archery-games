import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('../components/pages/StartMatch.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../components/pages/Schedule.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('../components/pages/Teams.vue')
  },
  {
    path: '/players',
    name: 'Players',
    component: () => import('../components/pages/Players.vue')
  },
  {
    path: '/league',
    name: 'League',
    component: () => import('../components/pages/League.vue')
  },
  {
    path: '/team-builder',
    name: 'TeamBuilder',
    component: () => import('../components/pages/TeamBuilder.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../components/pages/Rules.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/pages/Contact.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
