// 直播相关的ajax模块
//PC Mobile的直播相关模块都算在这里,echart获取的也在里面
import BaseModule from './BaseModule'
import appConfig from '../../config/app.config'
class liveInfo extends BaseModule{
  constructor(){
      super()
  }
  getLiveChannel(data){
     return this.post('/live/getLiveInChannel',data)
  }
  createNewLive(data){
      return this.post('/live/createNewLive',data)
  }
  getLiveInfo(data){
      return this.post('/live/getLiveInfo',data)
  }
  ////////下面是手机直播观看模块
  liveDetailMobile(channelId){
    return this.get(`/video/liveDetailMobile?channelId=${channelId}`)
  }
  getVedioInChannel(channelId){
    return this.get(`/video/getVideoInChannel?channelId=${channelId}`)
  }
  getMobileLiveInfo (id) {
    return this.post('/mobile/livePlay', {
      channelId: id
    })
  }
  getLiveHistory (id) {
    return this.post('/mobile/getVideoInChannel', {
      channelId: id
    })
  }
  getChatUserSig () {
    return this.get('/0.1/im/sig?userId=admin')
  }
  groupMessageUrl (optype, userSig, randomInt) {
    return `https://console.tim.qq.com/v4/group_open_http_svc/${optype}?usersig=${
      userSig
    }&sdkappid=${
      appConfig.appid
    }&identifier=admin&random=${
      randomInt
    }&contenttype=json`
  }
  sendChatMessage (userSig, data) {
    return this.post(this.groupMessageUrl('send_group_msg', userSig, data.Random), data)
  }
  getHistoryChatMessage (userSig, data) {
    return this.post(this.groupMessageUrl('group_msg_get_simple', userSig, data.Random), data)
  }
  getRandomInt () {
    return parseInt(Math.random().toString().slice(2, 10))

    
  // 直播\点播信息相关
  liveUserData(data){
    return this.post('/live/userListStatistics',data)
  }
  liveData(data){
    return this.post('/live/liveStatistics',data)
  }
  dianboData(data){
    return this.post('/record/video',data)
  }
  liveCountInfo(data){
    return this.post('/statistic/getChannelAndLive',data)
  }
}

export default new liveInfo();
