import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloCard from '@/components/HelloCard'
import Zoom from '@/components/Zoom'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom
    },
    {
      path: '/hellocard',
      name: 'HelloCard',
      component: HelloCard
    }
  ]
})
