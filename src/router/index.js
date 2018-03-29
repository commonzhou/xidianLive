import Vue from 'vue'
import Router from 'vue-router'
import Index from 'containers/index'
import main from 'containers/main/main'
import scene from 'components/scene/scene'
import purchase from 'components/purchase/purchase'
import livecase from 'components/livecase/livecase'
import displayvideo from 'components/videoDisplay/videoDisplay'
import register from 'containers/register/register'
import login from 'containers/login/login'
import message from 'containers/message/message'
import manage from 'containers/manage/manage'                    //通往管理页面
import document from 'containers/manage/manageDetail/document'   //管理界面文档介绍
import admin from 'containers/manage/manageDetail/admin'
import channel from 'containers/manage/manageDetail/channel'     //管理频道，可新建频道
import newLive from 'containers/manage/manageDetail/newLive'     //管理直播，可新建直播
import system from 'containers/manage/manageDetail/system'
import count from 'containers/manage/count/count'                //直播数据页面
import dianbo from 'containers/manage/count/dianbo'              //点播数据页面
import error from 'containers/error'                             //404页面
import viewVideo from 'components/common/viewVideo'              //视频pc端播放
import viewMobile from 'components/common/viewMobile'            //视频手机端播放



import newmain from 'components/newmain/newmain'
import newbuild from 'components/afterlogin/newbuild/newbuild'
import media from 'components/afterlogin/media/media'

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
      path:'*',               //该域名下的所有路径会被匹配，主要针对 对于不存在的页面进行请求
      name:'redirect',
      component:Index,
      redirect: '/main'
    },
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/main',
      children: [
        {path: 'main', component: main},
        {path: 'purchase', component: purchase},
        {path: 'register', name: 'register', component: register},
        {path: 'login', name:"login",component:login},
        {path: 'message',name:'message',component:message}
      ]
    },
    {
       path:'/manage',
       name:'manage',
       component:manage,
       redirect:'/channel',
       children:[
         {path:'/document',name:'document',component:document},
         {path:'/admin',name:'admin',component:error},
         {path:'/channel',name:'channel',component:channel},
         {path:'/system',name:'system',component:error},
         {path:'/count',name:'count',component:count},
         {path:'/dianbo',name:'dianbo',component:dianbo},
         {path:'/newLive',name:'newLive',component:newLive},
         {path:'/purchase',name:'purchase',component:purchase}
       ]
    },
    {
      path:'/viewVideo',
      name:'viewVideo',                        //name加引号...
      component:viewVideo
    },
    {
      path:'/viewMobile',
      name:'viewMobile',
      component:viewMobile
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
