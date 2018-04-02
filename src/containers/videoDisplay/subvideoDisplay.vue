<template>
  <div>
      <displayTab></displayTab>
<section class="mt30 clearfix">
       <Shelf :title="title">
       </Shelf>
      <div  class="homevideo"> 
        <videoCard :msg="item" :key="i" v-for="(item,i) in homevideo" @cardClick="toLive(item.videoName)">
        </videoCard>
       </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import displayTab from 'containers/videoDisplay/displayTab'
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
export default {
   components:{
     displayTab,
     Shelf,
     videoCard
   },
   data(){
       return{
           title:null,
            homevideo:[
              {
               imgLocation:"static/imgs/cover1.jpg",
               videoName:"迎新晚会",
               playNum:'22',
               viewNum:'11'
              },
               {
               imgLocation:"static/imgs/cover2.jpg",
               videoName:"巡回演唱",
               playNum:'2200',
               viewNum:'117'
              },
              {
               imgLocation:"static/imgs/cover3.jpg",
               videoName:"世界机器学习图灵大会",
               playNum:'0',
               viewNum:'1'
              },
              {
               imgLocation:"static/imgs/cover4.jpg",
               videoName:" CDN 研讨",
               playNum:'179',
               viewNum:'333'
              }
            ]
       }
   },
   created(){
       this.fetchData()
   },
   watch:{
      '$route':'fetchData'
   },
   methods:{
       fetchData(){
          switch(this.$route.params.id){
              case 'vodparty':
                   this.title="晚会点播";
                   break;
              case 'vodstudy':
                   this.title="学术点播";
                   break;
              case 'liveparty':
                   this.title="晚会直播";
                   break;
              case 'livestudy':
                   this.title="学术直播";
                   break;
              default: 
                   this.title="你他妈在逗我";
          }
       },
        toLive:function(name){
           //console.log(name)
           //this.$router.push('newLive');
           this.$router.push({name:'playvideo',params:{nameId:name}});
        }
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mt30 {
    width:1220px;
    height:461px;
    margin:50px auto;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, .14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1);
  }
  .homevideo
    display flex
    >div
      flex 1
      width:25%
</style>


