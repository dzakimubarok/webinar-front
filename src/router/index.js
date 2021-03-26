import Vue from 'vue'
import Router from 'vue-router'
import Events from '../views/Events.vue'
import EventDetail from '../views/EventDetail.vue'


Vue.use(Router)

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

const router = new Router({
  mode: 'history',
  routes
});

export default router
