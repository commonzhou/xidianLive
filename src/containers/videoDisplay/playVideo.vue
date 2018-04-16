<template>
  <div>
     <displayTab></displayTab>
      <div id="subhead"><span id="headspan">XXXXXX > 直播列表 > 唱响西电总决赛</span></div>
      <div class="container">
        <div class="aside">
          <div class="section">
            <div>直播地址</div>
            <div>XXXXXXXXXXXXXXXX 复制</div>
            <div>分流地址</div>
            <div>XXXXXXXXXXXXXXXX 复制</div>
          </div>
          <div class="section">
             <div id="info">弹幕列表</div>
             <div>hhhhh</div>
             <div>开始时间：2017-11-26  19:00</div>
             <div>结束时间：2017-11-26  19:00</div>
             <div>活动地点：冯提莫直播间</div>
             <div>活动介绍：XXXXXXXXXXX</div>
          </div>
          <div class="section">
             <div>节目单</div>
             <div>1.《xxxx》</div>
             <div>1.《xxxx》</div>
             <div>1.《xxxx》</div>
          </div>
        </div>
        <div class="main">
           <div style="text-align:left;font-size:2rem;margin-top:1.3rem;margin-left:1rem"> 唱响西电总决赛</div>
           <div id="window">
             我是pc端直播窗口
             <div>
               <router-link to="/livemobile">我是手机端的直播窗口</router-link>
             </div> 
           <div id="movie" style="width:100%;height:100%"></div>
           </div>
        </div>     
      </div>  
  </div>
</template>

<script type="text/ecmascript-6">
import displayTab from 'containers/videoDisplay/displayTab'
export default {
   components:{
       displayTab
   },
     mounted:function(){
        this.$nextTick(function(){
           let player=new TcPlayer("movie",{
     "m3u8":"http://v2v.cc/~j/theora_testsuite/320x240.ogg",
     "autoplayer":true,
     "coverpic":{style:"cover",src:"http://vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg"},
     "width":"100%"
        })
      })
      },
      methods:{
        getLiveInfo:function(){
          liveInfo.getLiveInfo({}).then(function(res){
            console.log(res)
          }).catch(function(err){
            console.log(err)
          })
        }
      }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #subhead
      border-bottom:3px solid #787D7B
      margin:2rem -1rem 0 5rem
      width:90%
      height:2.5rem
      text-align:left
      #headspan
        display:inline-block
        margin-top:0.5rem
        color:#787D7B
    .container
      width:80%
      height:50rem
      margin:0 auto
      margin-top:1.3rem
      .main
        height: 50rem
        background-color: #FCFAF2
        z-index :15
        overflow hidden
        margin-left:0.5rem
        #window 
          border:2px solid #787D7B
          width:95%
          height:40rem
          margin:0 auto
          margin-top:3rem
      .aside
        width: 20%
        height: 50rem
        float: right
        margin-left:1%
        display:flex
        flex-direction:column
        .section
          flex:1
          width: 100%
          margin:0 0 1rem 0
          background-color: #FCFAF2
          text-align left
        .section:last-child
          margin-bottom:0
</style>


