//新建频道时的ajax模块
//媒体库的ajax模块
import BaseModule from './BaseModule'
class Channel extends BaseModule{
  constructor(){
      super()
  }
  createNewChannel(data){
     return this.post('/channel/createNewChannel',data)
  }
  getChannelList(data){
     return this.post('/channel/getChannelList',data)
  }
  /////////////下面是媒体库的
  getAllVedio(id){
    return this.get(`/video/getAllVideoList?userId=${id}`)
  }
  getVedioInChannel(channelId){
      return this.get(`/video/getVideoInChannel?channelId=${channelId}`)
  }
}

export default new Channel();