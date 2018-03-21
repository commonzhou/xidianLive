import Vue from 'vue'
import Router from 'vue-router'
import Index from 'containers/index'
import main from 'containers/main/main'
import scene from 'components/scene/scene'
import purchase from 'components/purchase/purchase'
import livecase from 'components/livecase/livecase'
import displayvideo from 'components/videoDisplay/videoDisplay'
import register from 'components/register/register'
import login from 'components/login/login'

import newmain from 'components/newmain/newmain'
import newbuild from 'components/afterlogin/newbuild/newbuild'
import media from 'components/afterlogin/media/media'
import manager from 'components/afterlogin/manager/manager'
import personal from 'components/afterlogin/personnal/personal'
import channel1 from 'components/afterlogin/newbuild/channel1'
import livepc from 'components/afterlogin/newbuild/livepc'
import livemobile from 'components/afterlogin/newbuild/livemobile'
import livemobilelarge from 'components/afterlogin/newbuild/livemobilelarge'

import subvideo from 'components/videoDisplay/subvideoDisplay'
import playvideo from 'components/videoDisplay/playVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/main',
      children: [
        {path: 'main', component: main},
        {path: 'purchase', component: purchase},
        {path: 'livecase', name: 'livecase', component: livecase},
        {path: 'register', name: 'register', component: register},
        {path: 'login', name:"login",component:login}
      ]
    },
    {
      path:'/newbuild',
      name:'newbuild',
      component:newbuild
    },
    {
      path:'/media',
      name:'media',
      component:media
    },
    {
      path:'/manager',
      name:'manager',
      component:manager
    },
    {
      path:'/personal',
      name:'personal',
      component:personal
    },
    {
      path:'/newmain',
      name:'newmain',
      component:newmain
    },
    {
      path:'/channel1',
      name:'channel1',
      component:channel1
    },
    {
      path:'/livepc',
      name:'livepc',
      component:livepc
    },
    {
      path:'/livemobile',
      name:'livemobile',
      component:livemobile
    },
    {
      path:'/livemobilelarge',
      name:'livemobilelarge',
      component:livemobilelarge
    },
    {
      path:'/displayvideo',
      name:'displayvideo',
      component:displayvideo
    },
    {
      path:'/subvideo/:id',
      name:'subvideo',
      component:subvideo
    },
    {
      path:'/playvideo/:id',
      name:'playvideo',
      component:playvideo
    }
  ]
})
