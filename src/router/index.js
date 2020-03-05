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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
