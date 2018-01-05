import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/home/Home'
import Running from '../pages/running/Running'
import Walking from '../pages/walking/Walking'
import Mine from '../pages/mine/Mine'
import Detail from "../components/Detail"
import RunOrWalk from '../components/runOrWalk'
import Login from '../pages/login/Login'
import Regist from '../pages/regist/Regist'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:"/home",
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/running',
      name: 'running',
      component: Running
    },
    {
      path: '/walking',
      name: 'walking',
      component: Walking
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/home/runOrWalk',
      component: RunOrWalk
    },
    {
      path: '/mine/runOrWalk',
      component: RunOrWalk
    },
    {
      path: "/running/:id",//发送字符串数据id
      name: "detailrun",
      component: Detail
    },
    {
      path: "/walking/:id",
      name: "detailwalk",
      component: Detail
    },
    {
      path: '/user/login',
      component: Login
    },
    {
      path: '/user/regist',
      component: Regist
    }
  ]
})
