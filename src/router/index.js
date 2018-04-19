import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve)=>{
  import('@/containers/index').then((module)=>{
    resolve(module);
  });
}

const main =(resolve)=>{
   import('@/containers/main/main').then((module)=>{
     resolve(module);
   });
}
const scene =(resolve)=>{
  import('@/components/scene/scene').then((module)=>{
    resolve(module);
  });
}
const purchase =(resolve)=>{
  import('@/containers/manage/manageDetail/purchase').then((module)=>{
    resolve(module);
  });
}
const livecase =(resolve)=>{
  import('@/components/livecase/livecase').then((module)=>{
    resolve(module);
  });
}
const displayvideo =(resolve)=>{
  import('@/containers/videoDisplay/videoDisplay').then((module)=>{
    resolve(module);
  });
}
const register =(resolve)=>{
  import('@/containers/register/register').then((module)=>{
    resolve(module);
  });
}
const login =(resolve)=>{
  import('@/containers/login/login').then((module)=>{
    resolve(module);
  });
}
const message =(resolve)=>{
  import('@/containers/message/message').then((module)=>{
    resolve(module);
  });
}
const manage =(resolve)=>{                                //通往管理页面
  import('@/containers/manage/manage').then((module)=>{
    resolve(module);
  });
}

const document =(resolve)=>{                             //管理界面文档介绍
  import('@/containers/manage/manageDetail/document').then((module)=>{
    resolve(module);
  });
}
const admin =(resolve)=>{                               // 个人中心
  import('@/containers/manage/admin/admin').then((module)=>{
    resolve(module);
  });
}
const channel =(resolve)=>{                             //管理频道，可新建频道
  import('@/containers/manage/manageDetail/channel').then((module)=>{
    resolve(module);
  });
}
const newLive =(resolve)=>{                               //管理直播，可新建直播
  import('@/containers/manage/manageDetail/newLive').then((module)=>{
    resolve(module);
  });
}
const auth =(resolve)=>{                             //用户组管理授权
  import('@/containers/manage/auth/auth').then((module)=>{
    resolve(module);
  });
}
const authUser =(resolve)=>{                             //用户组内部用户管理
  import('@/containers/manage/auth/authUser').then((module)=>{
    resolve(module);
  });
}
const count =(resolve)=>{                             //直播数据页面
  import('@/containers/manage/count/count').then((module)=>{
    resolve(module);
  });
}
const dianbo =(resolve)=>{                              //点播数据页面
  import('@/containers/manage/count/dianbo').then((module)=>{
    resolve(module);
  });
}
const form =(resolve)=>{                             //观看直播的用户表单统计
  import('@/containers/manage/count/form').then((module)=>{
    resolve(module);
  });
}
const mediaManage =(resolve)=>{                             //管理后台界面的媒体库
  import('@/containers/manage/media/media').then((module)=>{
    resolve(module);
  });
}

const error =(resolve)=>{                             //404页面
  import('@/containers/error').then((module)=>{
    resolve(module);
  });
}
const viewVideo =(resolve)=>{                             //视频pc端播放
  import('@/components/common/viewVideo').then((module)=>{
    resolve(module);
  });
}
const viewMobile =(resolve)=>{                            //视频手机端播放
  import('@/components/common/viewMobile').then((module)=>{
    resolve(module);
  });
}
const newbuild =(resolve)=>{                             //
  import('@/components/afterlogin/newbuild/newbuild').then((module)=>{
    resolve(module);
  });
}
const media =(resolve)=>{                             //
  import('@/components/afterlogin/media/media').then((module)=>{
    resolve(module);
  });
}
const subvideo =(resolve)=>{                             //
  import('@/containers/videoDisplay/subvideoDisplay').then((module)=>{
    resolve(module);
  });
}
const playvideo =(resolve)=>{                             //
  import('@/containers/videoDisplay/playVideo').then((module)=>{
    resolve(module);
  });
}                    

import personal from 'components/afterlogin/personnal/personal'
import channel1 from 'components/afterlogin/newbuild/channel1'
import livepc from 'components/afterlogin/newbuild/livepc'
import livemobile from 'components/afterlogin/newbuild/livemobile'
import livemobilelarge from 'components/afterlogin/newbuild/livemobilelarge'

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
         {path:'/admin',name:'admin',component:admin},
         {path:'/channel',name:'channel',component:channel},
         {path:'/auth',name:'auth',component:auth},
         {path:'/authUser',name:'authUser',component:authUser},
         {path:'/count',name:'count',component:count},
         {path:'/dianbo',name:'dianbo',component:dianbo},
         {path:'/form',name:'form',component:form},
         {path:'/newLive',name:'newLive',component:newLive},
         {path:'/purchase',name:'purchase',component:purchase},
         {path:'/mediaManage',name:'mediaManage',component:mediaManage}
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
