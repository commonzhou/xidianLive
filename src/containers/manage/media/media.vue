<template>
  <div class="goods">
    <subTitle title="媒体中心"></subTitle>
       <section class="mt30 clearfix">
          <div class="allmedia" > 
              <videoCard :msg="item" :key="i" v-for="(item,i) in allMedia" @cardClick="toLive(item.channelName,item.liveId,item.type)">
                 <!-- <router-link  :to="{ path: 'viewVideo', query: {nameId:'15609286458',liveId:'0952584511944ca3ad7d78ab99dcac4f'}}" tag="div" class="mobile">  </router-link> -->
              </videoCard>
            
           </div>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
 import subTitle from 'containers/manage/subTitle'
import { mapMutations, mapState } from 'vuex'
import info from 'store/Channel.js'
    export default{
      name:'purchase',
      data(){
        return{
          goodlist:[
            
          ]
        }
      },
      components:{
        Shelf,
        videoCard,
        Button,
        subTitle
      },
      computed:{
        ...mapState(
          ['allMedia']
        )
      },
      created(){
         
         var that=this;
  
         var userId=sessionStorage.getItem('userId');
         info.getAllMedia(userId).then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                that.$store.state.allMedia=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   if(!temp.channelName) temp.channelName=temp.title;
                   if(!temp.liveId) temp.liveId=temp.videoId;
                   if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
                   if(!temp.playNum) temp.playNum=100;
                   if(!temp.viewNum) temp.viewNum=50;
                   that.$store.state.allMedia.push(temp);
                }
              }
              else{
                // alert("加载失败");
              }
         }).catch(function(err){
             console.log(err);
             //alert("加载失败.");
         });
      },
       methods:{
         toLive:function(name,liveId,type){
           console.log(name,liveId)
           this.$router.push({name:'viewVideo',params:{nameId:name,liveId:liveId,type:type}});
        }
        }
      }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .nav 
     height: 60px;
     line-height: 60px;
     font-size 26px;
     text-align left;
   .mt30 {
    width:1220px;
    height:100%;
    margin:0 auto;
    margin-left 10px
    margin-top 20px
    border-radius: 8px;
    border: 0px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
  .allmedia
    display flex
    flex-wrap: wrap
    height:100%;
    >div
      flex 0 0 20%
      margin-right:20px;
</style>