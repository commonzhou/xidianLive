<template>
  <div>
    
       <section class="mt30 clearfix">
       <Shelf title="频道一览">
       </Shelf>
      <div  class="homevideo"> 
        <videoCard :msg="item" :key="i" v-for="(item,i) in videoList"></videoCard>
       </div>
        <channelInput v-show="isShow" v-on:message="handleMessage"></channelInput>
     </section>
     <Button text="新建频道"  @btnClick="newchannel"></Button>
    
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
import channelInput from 'components/channelInput'
import { mapMutations, mapState } from 'vuex'
import { getStore } from 'store/storage'
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
      methods:{
        ...mapMutations(['ADD_CHANNEL']),
        newchannel:function(){
           this.isShow = true;
        },
        handleMessage:function(payload){
           this.messages=payload;
           this.isShow=false;
           this.ADD_CHANNEL({
             imgLocation:'static/imgs/cover2.jpg',
             videoName:this.messages.name,
             playNum:0,
             viewNum:0
           });
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
</style>