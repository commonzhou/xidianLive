<template>
  <div>
     <section class="mt30 clearfix">
       <Shelf :title="title">
       </Shelf>
      <div  class="homevideo" > 
        <videoCard :msg="item" :key="i" v-for="(item,i) in liveList" @cardClick="toLive(item.channelName,item.liveId)"></videoCard>
       </div>
        <liveInput v-show="isShow" v-on:newlive="handlelive"></liveInput>
     </section>
     <Button text="新建直播"  @btnClick="newlive" class="button"></Button>
    
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
import liveInput from 'components/liveInput'
import { mapMutations, mapState } from 'vuex'
import { getStore } from 'store/storage'
import liveHandler from 'store/liveinfo.js'
    export default{
      data(){
           return{
             isShow:false,   //决定新建频道框是否弹出
             messages:'',     //存储新建框这个子组件传上来的信息
             title:''
             //channelId:''
           }
       },
      components:{
        Shelf,
        videoCard,
        Button,
        liveInput 
      },
       created(){
         console.log('hahahah')
       this.fetchData();
       this.title=localStorage.getItem('liveTitle');
       var that=this;
       var channel=localStorage.getItem('channelId');
       liveHandler.getLiveChannel({"channelId":channel}).then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                 that.$store.state.liveList=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
                   if(!temp.playNum) temp.playNum=100;
                   if(!temp.viewNum) temp.viewNum=50;
                   if(!temp.channelName) temp.channelName=temp.liveName;
                   that.$store.state.liveList.push(temp);
                }
               
              }
              // else{
              //    alert("加载失败");
              // }
         }).catch(function(err){
             console.log(err);
             alert("加载失败.");
         });
       },
      watch:{
      '$route':'fetchData'
      },
      computed:{
        ...mapState(
          ['liveList']
        )
      },
      methods:{
        ...mapMutations(['ADD_LIVE']),
        newlive:function(){
           this.isShow = !this.isShow;
        },
        handlelive:function(payload){
           this.messages=payload;
           this.isShow=false;
           this.ADD_LIVE({
             imgLocation:'static/imgs/cover2.jpg',
             channelName:this.messages.name,
             playNum:0,
             viewNum:0
           });
        },
        fetchData:function(){
            console.log(this.$route)
            if(this.$route.params.nameId){                                       //处理f5以后，title为空的问题
               localStorage.setItem('liveTitle',this.$route.params.nameId);
            }
            if(this.$route.params.channelId){                                   //处理f5之后，channelId为空的问题
            localStorage.setItem('channelId',this.$route.params.channelId);
            }
        },
        toLive:function(name,liveId){
           console.log(name,liveId)
           this.$router.push({name:'viewVideo',params:{nameId:name,liveId:liveId}});
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .mt30 {
    width:1220px;
    height:100%;
    margin:50px auto;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
  .homevideo
    display flex
    flex-wrap: wrap 
    >div
      flex 1
      width:25%
  .button{
    margin:0 auto
    margin-left:280px
  }
</style>