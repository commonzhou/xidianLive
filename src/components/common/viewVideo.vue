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
             <div>直播名称：{{liveTitle}}</div>
             <div>开始时间：{{startTime}}</div>
             <div>结束时间：{{endTime}}</div>
             <div>活动地点：{{liveLocation}}</div>
             <div>活动介绍：{{liveInfo}}</div>
          </div>
            <div class="section">
            <div>直播地址</div>
            <div>{{videoUrl}}</div>
            <div>分流地址</div>
            <div>{{pushUrl}}}</div>
            <div>
               <router-link  :to="{ path: 'viewMobile', query: { channelId: channelId}}" tag="div" class="mobile">前往手机端</router-link>
            </div>  
          </div>
          <div class="section">
             <div>节目单</div>
                <div  :key="i" v-for="(item,i) in schduledList">{{item}}</div>
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
                videoUrl:"",
                liveTitle:'',
                startTime:'',
                endTime:'',
                liveLocation:'',
                liveInfo:'',
                pushUrl:'',
                schduledList:'',
                channelId:""
            }
        },
      components:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
         Tab
      },
    created(){
       this.fetchData();
       this.channelId=localStorage.getItem('channelId');
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
                    that.videoUrl=videoInfo.hlsPlayUrl;
                    that.liveTitle=videoInfo.title;
                    that.startTime=videoInfo.startTime;
                    that.endTime=videoInfo.endTime;
                    that.liveLocation=videoInfo.location;
                    that.liveInfo=videoInfo.introduction;
                    that.pushUrl=videoInfo.pushUrl;
                    that.schduledList=videoInfo.schduledList;

                    //console.log(videoInfo)

                      let player=new TcPlayer("movie",{
                          "m3u8":"http://5432.liveplay.myqcloud.com/live/5432_f812bda13c8f485f83ebe7637cd9bfa0_73.m3u8",
                          //"m3u8":that.videoUrl,
                          "autoplayer":true,
                          "coverpic":{style:"cover",src:"http://vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg"},
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
           //console.log(this.$route.params);
           if(this.$route.params.nameId){       // 为空的时候不重新设置各种ID，比如从手机端返回，这里可能为空，因为路径跳转没有带参数
              this.name=this.$route.params.nameId,
              localStorage.setItem('liveId',this.$route.params.liveId)
           } 
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
          padding:10px;
          white-space: pre-wrap;      //保留空白符序列，但是正常地进行换行。
          word-wrap:break-word;       //在长单词或 URL 地址内部进行换行
          &:hover
            transform: translateY(-3px);
            box-shadow: 1px 1px 20px #999;
        .section:last-child
          margin-bottom:0
</style>