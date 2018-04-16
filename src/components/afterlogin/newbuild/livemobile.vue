<template>
  <div id="mobile">
    <el-container class="container">
      <el-main class="main">
        <i class="el-icon-arrow-left leftarrow"></i>
        <!--div  id="video"><video  src="http://v2v.cc/~j/theora_testsuite/320x240.ogg"  controls="controls" preload webkit-playsinline="true"></video></div-->
        <!--el-button type="primary" class="large" @click="tolarge"><i class="el-icon-search"></i></el-button-->
        <div id="movie" style="width:100%;height:100%"></div>
      </el-main>
      <el-footer class="foot" height="25%">
        <div id="title"><b>{{ liveDetails.title }}</b></div>
        <div class="subtitle">
          {{ liveDetails.viewCount }}人观看&nbsp;&nbsp;&nbsp;&nbsp;
          <span v-if="liveDetails.ended">已结束</span>
          <span v-else>已观看{{ liveDetails.durationHours }}h{{ liveDetails.durationMinutes }}min</span>
        </div>
      </el-footer>
    </el-container>
    <el-container class="container2">
      <el-main class="main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="聊天室" name="first" class="chatroom">
            <div>用户甲：呵呵哈哈哈</div>
            <div>用户已：呵呵哈哈哈</div>
            <div>用户屏：呵呵哈哈哈</div>
            <div>用户丁：呵呵哈哈哈</div>
          </el-tab-pane>
          <el-tab-pane label="直播信息" name="second" class="info">
            <div>主办方：不知是个啥</div>
            <div>频 道：频道不是贫道</div>
            <div>直播主题：{{liveDetails.type}}</div>
            <div>开始时间：{{liveDetails.startTime}}</div>
            <div>结束时间：{{liveDetails.endTime}}</div>
            <div>活动地点：{{liveDetails.location}}</div>
            <div>活动介绍：{{liveDetails.introduction}}</div>
          </el-tab-pane>
          <el-tab-pane label="历史直播" name="third">
            <ul class="live-history" v-if="liveHistory">
              <li
                v-for="live in liveHistory"
                :key="live.videoId"
              >
                <div class="live-cover-wrapper"
                  :style="{backgroundImage: `url(${live.coverPictureId})`}"
                ></div>
                <div class="live-info-wrapper">
                  <h3 class="live-title">{{live.title}}</h3>
                  <time class="live-time">创建时间: {{live.createTime}}</time>
                  <p class="live-view-count">历史观看人数: {{live.viewCount}}人</p>
                </div>
              </li>
            </ul>
            <p class="no-live-history" v-else>暂无历史直播</p>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <footer>
      <div class="input-wrapper">
        <el-input placeholder="请输入内容" size="large" class="input" v-model="chatMessage">
        </el-input>
      </div>
      <a href="javascript:void(0);" class="send-message" @click="sendMessage">发 送</a>
    </footer>
  </div>
</template>


<script type="text/ecmascript-6">
  import liveInfo from 'store/liveInfo.js'
  export default {
    props: {
      channelIdFromParent: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        activeName: 'first',
        liveDetails: {},
        liveHistory: null,
        chatMessage: ''
      }
    },
    created() {
      this.channelId = this.$route.query.channelId || this.channelIdFromParent
      this.liveDetailMobile()
      this.getLiveHistory()
      this.getChatUserSig()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      tolarge: function() {
        window.location.href = "/#/livemobilelarge"
      },
      liveDetailMobile() {
        return liveInfo.getMobileLiveInfo(this.channelId).then(response => {
          console.log(response)
          if (response.data.retureValue === 0) {
            this.liveDetails = response.data.retureData
            let {startTime, endTime} = this.liveDetails
            let now = Date.now(),
                end = new Date(endTime)
            if (now > end) {
              this.liveDetails.ended = true
            } else {
              let duration = (now - startTime) / (1000 * 60)
              this.liveDetails.durationHours = Math.floor(duration / 60)
              this.liveDetails.durationMinutes = Math.round(duration % 60)
            }
            this.liveDetails.endTime = end.toLocaleString()
            this.liveDetails.startTime = (new Date(startTime)).toLocaleString()
            let player = new TcPlayer("movie", {
              "m3u8": this.liveDetails.hlsPlayUrl,
              "autoplayer": true,
              "coverpic": "http://vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg",
              "width": "100%"
            })
          }
          return response
        })
      },
      getLiveHistory () {
        liveInfo.getLiveHistory(this.channelId).then(response => {
          console.log(response)
          if (response.data.retureValue === 0) {
            this.liveHistory = response.data.retureData
          }
        })
      },
      getChatUserSig () {
        liveInfo.getChatUserSig().then(response => {
          console.log(response)
          if (response.data.retureValue === 0) {
            this.userSig = response.data.retureData.userSig
            console.log(this.userSig)
          }
        })
      },
      sendMessage () {
        console.log(this.chatMessage)
        let {groupId} = this.liveDetails,
            message = this.chatMessage
        if (
          message.trim()
          && this.userSig
          && groupId
        ) {
          liveInfo.sendChatMessage(this.userSig, {
            GroupId: groupId,
            Random: this.getRandomInt(),
            MsgBody: [{
              MsgType: 'TIMTextElem',
              MsgContent: {
                Text: message
              }
            }]
          }).then(response => {
            console.log(response)
          })
        } else {
          console.log('缺少必要的参数')
          console.log(this.chatMessage.trim())
          console.log(this.userSig)
          console.log(groupId)
        }
      },
      getGroupMessage (userSig, groupId, messageNum) {
        liveInfo.getHistoryChatMessage(userSig, {
          GroupId: groupId,
          ReqMsgNumber: messageNum
        })
      },
      getRandomInt () {
        return parseInt(Math.random().toString().slice(2, 10))
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#mobile
 margin:-3.5rem 0 0 0
 .container
   width:100%
   height:25rem
   margin:0 auto
   .main
     background-color :#DCDFE6
     position relative
     .leftarrow
       position absolute
       color:black
       top:0.5rem
       left:0.5rem
     .large
       position absolute
       bottom:0.5rem
       right:0.5rem
     #movie
       margin:0 auto
   .foot
     background-color :#DCDFE6
     margin-top:0.5rem
     margin-bottom:0rem
     #title
       text-align:left
       font-size:1.3rem
       margin-top:1rem
     .subtitle
       color:#91989F
       text-align:left
       margin-top:1rem
       font-size:1.1rem
 .container2
   width:100%
   height:18rem
   margin:0 auto
   margin-top:0.5rem
   .main
     background-color :#DCDFE6
     .chatroom
       text-align:left
       font-size:1.3rem
       line-height:1.5rem
     .info
       text-align:left
       font-size:1.1rem
       line-height:1.8rem
  footer
    display: flex
    height: 50px
    background-color: #DCDFE6
    padding-left: 10px
    border-top: 1px solid white
    .input-wrapper
      flex-grow: 1
      line-height: 50px
    .send-message
      display: block
      width: 80px
      line-height: 50px
      text-decoration: none
      color: white


.live-history
  padding-left: 0
  list-style: none
  margin: 0
  li
    padding: 10px 5px
    .live-cover-wrapper
      float: left
      width: 100px
      height: 100px
      background-position: 50% 50%
      background-size: cover
      background-repeat: no-repeat
      background-color: #ccc
    .live-info-wrapper
      margin-left: 105px
      text-align: left
      .live-title
        line-height: 40px
        font-size: 16px
        margin: 0
      .live-time, .live-view-count
        line-height: 30px
        font-size: 14px
        margin: 0
.no-live-history
  margin: 40px 0
  line-height: 40px
  font-size: 14px
  color: #999
</style>
