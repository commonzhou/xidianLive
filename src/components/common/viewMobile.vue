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
        <div id="title"><b>呵呵卫视2018跨年晚会直播</b></div>
        <div class="subtitle"> xx人观看 &nbsp;&nbsp;&nbsp;&nbsp; 已观看1h24min</div>
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
            <div>直播主题：呵呵哈哈哈</div>
            <div>开始时间：呵呵哈哈哈</div>
            <div>结束时间：不知</div>
            <div>活动地点：啦啦啦啦啦啦啦啦啦啦靠靠靠靠靠靠靠靠靠靠靠靠靠</div>
            <div>活动介绍：呵呵哈哈哈</div>
          </el-tab-pane>
          <el-tab-pane label="历史直播" name="third">

          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer class="foot" height="20%">
        <el-input placeholder="请输入内容" size="large" class="input">
          <template slot="append">发送</template>
        </el-input>
    </el-footer>
  </el-container>
  </div>
</template>


<script type="text/ecmascript-6">
  import liveInfo from 'store/liveInfo.js'
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    created() {
      this.liveDetailMobile()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      tolarge: function() {
        window.location.href = "/#/livemobilelarge"
      },
      liveDetailMobile: function() {
        liveInfo.getMobileLiveInfo('249df10bb4d344aea95d65845d684d5b').then(function(res) {
          console.log(res)
        }).catch(function(err) {
          console.log(err)
        })
      },
      getVedioInChannel: function() {
        channel.getVedioInChannel({}).then(function(res) {
          console.log(res)
        }).catch(function(err) {
          console.log(err)
        })
      }
    },
    mounted: function() {
      //this.$nextTick(function () {
      // let player=new TcPlayer("movie",{
      //   "m3u8":"http://v2v.cc/~j/theora_testsuite/320x240.ogg",
      //   "autoplayer":true,
      //   "coverpic":"http://vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg",
      //   "width":"100%"
      // })
      //})
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
   .foot
     background-color :#BDC0BA
     .input
       margin-top:0.9rem
</style>
