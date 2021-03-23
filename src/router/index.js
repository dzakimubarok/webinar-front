import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/EventDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
