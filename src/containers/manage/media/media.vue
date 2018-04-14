<template>
  <div class="goods">
    <div class="nav">
        媒体中心
      <div class="w">
         
      </div>
       <section class="mt30 clearfix">
          <div class="allmedia" > 
             <videoCard :msg="item" :key="i" v-for="(item,i) in allMedia" @cardClick="toLive(item)"></videoCard>
           </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
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
        Button
      },
      computed:{
        ...mapState(
          ['allMedia']
        )
      },
      created(){
         
         var that=this;
         info.getAllMedia().then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                that.$store.state.allMedia=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   if(!temp.imgLocation) temp.imgLocation='static/imgs/cover2.jpg';
                   if(!temp.playNum) temp.playNum=100;
                   if(!temp.viewNum) temp.viewNum=50;
                   that.$store.state.allMedia.push(temp);
                }
              }
              else{
                 alert("加载失败");
              }
         }).catch(function(err){
             console.log(err);
             alert("加载失败.");
         });
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .nav 
     height: 60px;
     line-height: 60px;
     font-size 26px;
     text-align center;
     .w
       display: flex;
       align-items: center;
   .mt30 {
    width:1220px;
    height:100%;
    margin:50px auto;
    margin-left 0px
    margin-top 20px
    border-radius: 8px;
    border: 0px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
  .allmedia
    display flex
    flex-wrap: wrap 
    >div
      flex 0 0 25%
</style>