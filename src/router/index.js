import Vue from 'vue'
import Router from 'vue-router'
import Events from '../views/Events.vue'
import EventDetail from '../views/EventDetail.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import Profile from '../views/Profile'



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
  },
  {
    path: '/login',
    name: 'login',
    component: Login

  },
  {
    path: '/register',
    name: 'register',
    component: Register

  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile

  }
]

const router = new Router({
  mode: 'history',
  routes
});

export default router
