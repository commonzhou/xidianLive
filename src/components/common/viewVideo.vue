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
import liveHandler from 'store/liveInfo.js'
    export default{
        data(){
            return{
                name:"",   //name刷新了就没有了，因此需要存储cookie和localStorage
                videoPic:"",
                videoUrl:""
            }
        },
      components:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
         Tab
      },
    created(){
       this.fetchData();
       var that=this;
         liveHandler.getLiveInfo({
                "userId":'457cfd7ddaef41969f7fa90b56d1a5a1',
                "token":'',
                "channelId":localStorage.getItem('channelId'),
                "liveId":localStorage.getItem('liveId')
                }).then(function(res){

                if(res.data.retureValue==0){
                 // alert('成功')
                    var videoInfo=res.data.retureData; 
                    that.videoPic=videoInfo.coverPicture;
                    that.videoUrl=videoInfo.flvPlayUrl;
                    console.log(videoInfo.flvPlayUrl)

                      let player=new TcPlayer("movie",{
                          "m3u8":"http://5432.liveplay.myqcloud.com/live/5432_f812bda13c8f485f83ebe7637cd9bfa0_73.m3u8",
                          "autoplayer":true,
                          "coverpic":{style:"cover",src:"https://118.89.112.125:8443/xidian_live-0.0.1/"+that.videoPic},
                          "width":"100%"
                     })
                }
                else{
                  //alert("失败")
                  console.log("不知名错误");
                }
                }).catch(
                  function(err){
                    console.log(err);
                   // alert("创建失败.");
                  }
                );

       },
      watch:{
      '$route':'fetchData'
      },
      //   一开始将视频初始化放在这里，但是由于视频的路径等参数尚在ajax的路上，所以会GG

    //   mounted:function(){
    //     var that=this;
    //     this.$nextTick(function(){
    //       console.log(this.videoUrl)
    //        let player=new TcPlayer("movie",{
    //  "m3u8":that.videoUrl,
    //  "autoplayer":true,
    //  "coverpic":{style:"cover",src:"https://118.89.112.125:8443/xidian_live-0.0.1/"+that.videoPic},
    //  "width":"100%"
    //     })
    //   })
    //   },
      methods:{
         fetchData:function(){
            this.name=this.$route.params.nameId,
            localStorage.setItem('liveId',this.$route.params.liveId)
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
          background-color: #fff
          border:1px solid gray
          text-align left
          padding:5px;
          &:hover
            transform: translateY(-3px);
            box-shadow: 1px 1px 20px #999;
        .section:last-child
          margin-bottom:0
</style>