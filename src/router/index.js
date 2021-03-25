import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'
import EventDetail from '../views/EventDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: EventDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
