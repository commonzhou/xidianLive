<template>
  <div>
       <section class="mt30 clearfix">
       <Shelf title="频道一览">
       </Shelf>
      <div  class="homevideo"> 
        <videoCard :msg="item" :key="i" v-for="(item,i) in homevideo"></videoCard>
       </div>
     </section>
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
    export default{
      data(){
           return{
             homevideo:[
              {
               imgLocation:"static/img/cover1.d61133f.jpg",
               videoName:"迎新晚会",
               playNum:'22',
               viewNum:'11'
              },
               {
               imgLocation:"static/img/cover2.fa15020.jpg",
               videoName:"巡回演唱",
               playNum:'2200',
               viewNum:'117'
              },
              {
               imgLocation:"static/img/cover3.da6a603.jpg",
               videoName:"世界机器学习图灵大会",
               playNum:'0',
               viewNum:'1'
              },
              {
               imgLocation:"static/img/cover4.69049da.jpg",
               videoName:" CDN 研讨",
               playNum:'179',
               viewNum:'333'
              },
                {
               imgLocation:"static/img/cover1.d61133f.jpg",
               videoName:"迎新晚会",
               playNum:'22',
               viewNum:'11'
              },
               {
               imgLocation:"static/img/cover2.fa15020.jpg",
               videoName:"巡回演唱",
               playNum:'2200',
               viewNum:'117'
              },
              {
               imgLocation:"static/img/cover3.da6a603.jpg",
               videoName:"世界机器学习图灵大会",
               playNum:'0',
               viewNum:'1'
              },
              {
               imgLocation:"static/img/cover4.69049da.jpg",
               videoName:" CDN 研讨",
               playNum:'179',
               viewNum:'333'
              }
            ]
           }
       },
      components:{
        Shelf,
        videoCard 
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
    flex-wrap: wrap 
    >div
      flex 1
      width:25%
</style>