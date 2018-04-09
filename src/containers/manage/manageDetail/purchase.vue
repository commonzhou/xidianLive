<template>
  <div class="goods">
    <div class="nav">
      <div class="w">
        <a href="javascript:;" :class="{active:sortType===1}" @click="reset()">综合排序</a>
        <a href="javascript:;" @click="sortByPrice(1)" :class="{active:sortType===2}">价格从低到高</a>
        <a href="javascript:;" @click="sortByPrice(-1)" :class="{active:sortType===3}">价格从高到低</a>
      </div>
       <section class="mt30 clearfix">
          <div class="goodlist" > 
             <videoCard :msg="item" :key="i" v-for="(item,i) in goodlist" @cardClick="toLive(item)"></videoCard>
           </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import videoCard from 'components/common/videoCard'
import Button from 'components/common/button'
    export default{
      name:'purchase',
      data(){
        return{
          goodlist:[
             {
            imgLocation:"static/imgs/cover1.jpg",
            videoName:"晚会频道",
            playNum:'22',
            viewNum:'11'
           },
            {
            imgLocation:"static/imgs/cover2.jpg",
            videoName:"学术频道",
            playNum:'2200',
            viewNum:'117'
            },
            {
            imgLocation:"static/imgs/cover1.jpg",
            videoName:"晚会频道",
            playNum:'22',
            viewNum:'11'
           }
          ]
        }
      },
      components:{
        Shelf,
        videoCard,
        Button
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .nav 
     height: 60px;
     line-height: 60px;
     .w
       display: flex;
       align-items: center;
       a 
         padding: 0 15px;
         height: 100%;
         font-size: 12px;
         text-decoration:none; 
         color: #999;
         &.active {
          color: #5683EA;
         }
         &:hover {
          color: #5683EA;
         }
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
  .goodlist
    display flex
    flex-wrap: wrap 
    >div
      flex 1
      width:25%
</style>