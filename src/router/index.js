import { createRouter, createWebHistory } from 'vue-router'
import App from '../../src/App.vue'
import CreateMemo from '../views/CreateMemo.vue'
import Memo from '../views/Memo.vue'
import Memory from '../views/Memory.vue'
import Question from '../views/Question.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/memo',
      name: 'memo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Memo
    },
    {
      path: '/createMemo',
      name: 'createMemo',
      component: CreateMemo
    },
    {
      path: '/memory',
      name: 'memory',
      component: Memory
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router