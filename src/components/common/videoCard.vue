<template>
  <div class="video-item" @click="cardClick($event)">
      <div class="cover-img">
        <!-- <router-link :to="'goodsDetails?productId='+msg.productId">
          <img v-lazy="msg.productImageBig" :alt="msg.productName">
        </router-link> -->

        <img :src="imgLocation" :alt="videoName">

      </div>
      <h3 class="title">{{msg.videoName}}</h3>
      <!-- <h3 class="sub-title ellipsis">{{msg.sub_title}}</h3> -->
      <div class="good-price">
        <div class="info">
          <div><img src="~assets/imgs/fanshao/play.png" alt="播放总数"><span>{{msg.playNum}}</span></div>
          <div><img src="~assets/imgs/fanshao/view.png" alt="在线人数"><span>{{msg.viewNum}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      msg: {}
    },
    data () {
      return {
          imgLocation:this.msg.imgLocation,
          videoName:this.msg.videoName
      }
    },
    components: {
    },
    methods: {
      cardClick (event) {
        this.$emit('cardClick', event)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .video-item 
    background: #fff;
    width: 25%;
    transition: all .5s;
    height: 400px;
    &:hover
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
     
    // .info {
    //   @extend %block-center;
    //   width: 100%;
    //   display: none;
    // }
    .cover-img {
      img {
        width:15vw
        height:22vh
        margin:0 auto 
        margin-top:2vh
      }
    }

    .good-price {
      margin: 15px 0;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #e4393c;
      font-size: 20px;
    }

    .title {
      text-align: center;
      line-height: 1.2;
      font-size: 25px;
      color: #d0d0d0;
      padding: 10px;
    }
    .info
       display: flex;
       width:100%
       color: #666666
       >div
         flex:1
         img 
           width:1.4vw
           height:2.1vh
           display inline-block
           margin:0 auto 
           margin-top:2vh
</style>