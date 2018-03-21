<template>
  <div class="header-box">
    <div>
        <header class="h-box">
          <div class="h-logo">
              <router-link tag='div' class="tab-item" to="/main" @click="changePage(1)" :class="{active:choosePage===1}">学术直播</router-link>
          </div>
          <div class="h-sub">
             <router-link tag='div' class="tab-item" to="/main" @click="changePage(1)" :class="{active:choosePage===1}">首页</router-link>
             <router-link tag='div' class="tab-item" to="/livecase" @click="changePage(2)" :class="{active:choosePage===2}">直播案例</router-link>
             <router-link tag='div' class="tab-item" to="/displayvideo" @click="changePage(3)" :class="{active:choosePage===3}">视频中心</router-link>
          </div>
          <div class="h-aside">
             <router-link tag='div' class="tab-item person" to="/login" @click="changePage(4)" :class="{active:choosePage===4}"><img src="~assets/imgs/fanshao/user.png" alt="登陆"></router-link>
             <router-link tag='div' class="tab-item buy" to="/purchase" @click="changePage(5)" :class="{active:choosePage===5}"><img src="~assets/imgs/fanshao/buy.png" alt="购买"></router-link> 
          </div>
        </header>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
   export default{
       data(){
           return{
            user:{},
            choosePage:1
           }
       },
       methods:{
          changePage(v){   //监控导航栏的变化
             this.choosePage=v;
          },
           // 通过路由改变导航文字样式
          getPage(){
            if(this.$toute.path === '/'||this.$route.path === '/main'){
               this.changePage(1) 
            }
            else if(this.$route.path === '/livecase'){
               this.changePage(2)
            }
            else if(this.$route.path === '/displayvideo'){
               this.changePage(3)
            }
            else if(this.$route.path === '/login'){
               this.changePage(4)
            }
            else if(this.$route.path === '/purchase'){
               this.changePage(5)
            }
            else{

            }
          } 
       }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header-box{
      background:#1a1a1a;
      background-image: -webkit-linear-gradient(#000, #121212);
      background-image: linear-gradient(#000, #121212);
      width:100vw;
      height: 100px;
      margin: 0 auto;
      margin-top:-60px;margin-left:-1vw;
      z-index: 30;
  }
  header{
    display flex
    justify-content space-between
    align-items center
    height:100%
    color:white
  }
   .h-logo
      flex 1
      height: 100%
      text-align:center  
      font-size:1.8rem
      div 
        margin-top:2vh
        cursor:pointer
        &:hover
          color:#2EA9DF
   .h-sub
      flex:1
      display flex
      justify-content center
      align-content center
      text-align:center  
      font-size:1.2rem
      div
        margin-top:2vh
        margin-right:5vw
        cursor:pointer
        &:hover
          color:#2EA9DF
   .h-aside
      flex 1
      display flex
      justify-content center 
      align-content center 
      text-align center
      font-size:1.2em
      div
        margin-top:3vh
        margin-right:5vw
        cursor:pointer
        &:hover
          color:#2EA9DF
        img 
          height:40px;
    // .active{
    //   font-weight:bold
    //   color:#2EA9DF
    // }
</style>