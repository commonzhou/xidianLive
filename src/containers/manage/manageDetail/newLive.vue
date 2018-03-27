<template>
  <div>
     <section class="mt30 clearfix">
       <Shelf :title="title">
       </Shelf>
      <div  class="homevideo" > 
        <videoCard :msg="item" :key="i" v-for="(item,i) in liveList" @cardClick="toLive(item.videoName)"></videoCard>
       </div>
        <liveInput v-show="isShow" v-on:newlive="handlelive"></liveInput>
     </section>
     <Button text="新建直播"  @btnClick="newlive"></Button>
    
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
import liveInput from 'components/liveInput'
import { mapMutations, mapState } from 'vuex'
import { getStore } from 'store/storage'
    export default{
      data(){
           return{
             isShow:false,   //决定新建频道框是否弹出
             messages:'',     //存储新建框这个子组件传上来的信息
             title:''
           }
       },
      components:{
        Shelf,
        videoCard,
        Button,
        liveInput 
      },
       created(){
       this.fetchData()
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
             videoName:this.messages.name,
             playNum:0,
             viewNum:0
           });
        },
        fetchData:function(){
            console.log(this.$route)
            this.title=this.$route.params.nameId
        },
        toLive:function(name){
           console.log(name)
           this.$router.push({name:'viewVideo',params:{nameId:name}});
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