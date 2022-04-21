import Vue from 'vue'
import VueRouter from 'vue-router'
import MyInterviews from '@/views/MyInterviews';

Vue.use(VueRouter)

const routes = [
  {
    path: '/interviews',
    name: 'interviews',
    component: MyInterviews,
  },
]

const router = new VueRouter({
  routes
})

export default router
