import {setStore,getStore} from '../store/storage' 


 const GET_USERINFO = 'GET_USERINFO'
 const RECORD_USERINFO = 'RECORD_USERINFO'

 const INIT_CHANNEL = 'INIT_CHANNEL'
 const ADD_CHANNEL = 'ADD_CHANNEL'
 const SHOW_CHANNEL = 'SHOW_CHANNEL'
 const REDUCE_CHANNEL = 'REDUCE_CHANNEL'
 const EDIT_CHANNELT = 'EDIT_CHANNEL'

 const INIT_LIVE = 'INIT_LIVE'
 const ADD_LIVE = 'ADD_LIVE'
 const SHOW_LIVE = 'SHOW_LIVE'
 const REDUCE_LIVE = 'REDUCE_LIVE'
 const EDIT_LIVE = 'EDIT_LIVE'

export default{
    //获得用户信息
  [GET_USERINFO] (state,info){
    if (state.userInfo && (state.userInfo.username !== info.username)) {
        return
      }
      if (!state.login) {
        return
      }
      if (!info.message) {
        state.userInfo = {...info}
      } else {
        state.userInfo = null
      }
  },
  //存储用户信息
  [RECORD_USERINFO] (state,info){
    state.userInfo = info
    state.login = true
    setStore('userInfo', info)
  },

  //新建频道使用
  [ADD_CHANNEL] (state,{imgLocation,videoName,playNum,viewNum}){
     let videoList=state.videoList;
     let item={
       imgLocation,
       videoName,
       playNum,
       viewNum
     }
    //  if(videoList.length){
    //     videoList.splice(videoList.length-1,0,item);
    //  }
     videoList.push(item);
     state.videoList=videoList;
  },

  //新建直播使用
  [ADD_LIVE] (state,{imgLocation,videoName,playNum,viewNum}){
     let liveList=state.liveList;
     let item={
      imgLocation,
      videoName,
      playNum,
      viewNum
    }
    liveList.push(item);
    state.liveList=liveList;
  }
  
}