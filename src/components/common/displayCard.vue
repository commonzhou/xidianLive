<template>
<div class="show">
  <div class="good-item">
      <div class="good-img">
        <!-- <router-link :to="'goodsDetails?productId='+msg.productId">
          <img v-lazy="msg.productImageBig" :alt="msg.productName">
        </router-link> -->
        <img src="~assets/imgs/fanshao/school.png" class="first" alt="">
      </div>
      <h3 class="sub-title ellipsis">学术会议</h3>
  </div>
  <div class="good-item">
      <div class="good-img">
        <!-- <router-link :to="'goodsDetails?productId='+msg.productId">
          <img v-lazy="msg.productImageBig" :alt="msg.productName">
        </router-link> -->
        <img src="~assets/imgs/fanshao/party.png" alt="">
      </div>
      <h3 class="sub-title ellipsis">晚会狂欢</h3>
  </div>
</div>
</template>

<script type="text/ecmascript-6">

    export default{
      data(){
           return{
           }
       },
      components:{
        
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .show{
     width:100%;
     height:400px;
     display flex;
     justify-content center 
     align-items  center
 }
 .good-item
    background: #fff;
    width: 50%;
    transition: all .5s;
    height: 400px;
    &:hover
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
    img 
      width:70%
      height:70%
      margin:0 auto 
      margin-top:10px
    .first
      margin-top:70px
  h3 {
      text-align: center;
      line-height: 1.2;
      font-size: 25px;
      color: #d0d0d0;
      padding: 10px;
    }
</style>