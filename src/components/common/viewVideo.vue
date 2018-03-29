<template>
  <div>
      <Tab></Tab>
      <div class="header">{{name}}</div>
      <div class="container">
           <div class="main">
           <div id="window">
           <div id="movie" style="width:100%;height:100%"></div>
           </div>
        </div>     
        <div class="aside">
          <div class="section">
             <div id="info">直播信息</div>
             <div>直播名称：冯提莫直播间</div>
             <div>开始时间：2017-11-26  19:00</div>
             <div>结束时间：2017-11-26  19:00</div>
             <div>活动地点：冯提莫直播间</div>
             <div>活动介绍：XXXXXXXXXXX</div>
          </div>
            <div class="section">
            <div>直播地址</div>
            <div>XXXXXXXXXXXXXXXX 复制</div>
            <div>分流地址</div>
            <div>XXXXXXXXXXXXXXXX 复制</div>
            <div>手机端直播地址</div>
            <div>
               <router-link to="/livemobile" tag="div" class="mobile">前往手机端</router-link>
            </div>  
          </div>
          <div class="section">
             <div>节目单</div>
             <div>1.《xxxx》</div>
             <div>1.《xxxx》</div>
             <div>1.《xxxx》</div>
          </div>
        </div>
       
      </div>  
  </div>
</template>

<script type="text/ecmascript-6">
import Tab from 'components/common/tab'
import liveInfo from 'store/liveInfo.js'
    export default{
        data(){
            return{
                name:""   //name刷新了就没有了，因此需要存储cookie和localStorage
            }
        },
      components:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
         Tab
      },
    created(){
       this.fetchData()
       },
      watch:{
      '$route':'fetchData'
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
        },
         fetchData:function(){
            this.name=this.$route.params.nameId
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .header
      width:20vw
      height:10vh
      position absolute
      margin-top:5vh
      margin-left 5vw
      color:black
      font-size: 2vw   
    .container
      width:80vw
      height:100vh
      margin:0 auto
      margin-top:8vh
      display flex
      .main
        flex: 0 0 80%
        height: 100%
        z-index :15
        overflow hidden
        margin-left:0.5rem
        #window 
          border:2px solid #787D7B
          width:95%
          height:80%
          margin:0 auto
          margin-top:7vh
      .aside
        flex:0 0 20%
        width: 20%
        height: 100vh
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