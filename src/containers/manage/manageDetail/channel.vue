<template>
  <div>
    
       <section class="mt30 clearfix">
       <Shelf title="频道一览">
       </Shelf>
         <Button text="新建频道"  @btnClick="newchannel" class="button"></Button>
         <channelInput v-show="isShow" v-on:message="handleMessage" class="input"></channelInput>
      <div  class="homevideo" > 
        <videoCard :msg="item" :key="i" v-for="(item,i) in videoList" @cardClick="toLive(item.channelName,item.channelId)"></videoCard>
       </div>
       
     </section>
    
    
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
import channelInput from 'components/channelInput'
import { mapMutations, mapState } from 'vuex'
import { getStore } from 'store/storage'
import channelHandle from 'store/Channel.js'
    export default{
      data(){
           return{
             isShow:false,   //决定新建频道框是否弹出
             messages:''     //存储新建框这个子组件传上来的信息
           }
       },
      components:{
        Shelf,
        videoCard,
        Button,
        channelInput 
      },
      computed:{
        ...mapState(
          ['videoList']
        )
      },
      created(){
         var user=localStorage.getItem('userName');
         var that=this;
         channelHandle.getChannelList({"userId":user}).then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                that.$store.state.videoList=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
                   if(!temp.playNum) temp.playNum=100;
                   if(!temp.viewNum) temp.viewNum=50;
                   that.$store.state.videoList.push(temp);
                }
              }
              else{
                 alert("加载失败");
              }
         }).catch(function(err){
             console.log(err);
             alert("加载失败.");
         });
      },
      methods:{
        ...mapMutations(['ADD_CHANNEL']),
        newchannel:function(){
           this.isShow = !this.isShow;

        },
        handleMessage:function(payload){
           this.messages=payload;
           this.isShow=false;
           this.ADD_CHANNEL({
             imgLocation:'static/imgs/cover2.jpg',
             channelName:this.messages.name,
             playNum:0,
             viewNum:0
           });
        },
        toLive:function(name,id){
           //console.log(name)
           //this.$router.push('newLive');
           this.$router.push({name:'newLive',params:{nameId:name,channelId:id}});
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .mt30 {
    width:1220px;
    height:100%;
    margin:50px auto;
    margin-left -18px
    margin-top 10px
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
  .homevideo
    display flex
    flex-wrap: wrap 
    >div
      flex 0 0 25%
  .button{
    position:absolute;
    top:145px;
    left:78%;
    z-index:20;
  }
  .input{
    position absolute;
    left:50%;
    top:55%;
    transform: translate(-50%,-50%);
  }
</style>