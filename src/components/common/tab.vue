<template>
  <div class="header-box">
    <div>
        <header class="h">
          <div class="h-logo">
              <router-link tag='div' class="tab-item" to="/main" @click="changePage(1)">学术直播</router-link>
          </div>
          <div class="h-sub">
             <router-link tag='div' class="tab-item" to="/main" @click="changePage(1)">首页</router-link>
             <router-link tag='div' class="tab-item" to="/livecase" @click="changePage(2)">直播案例</router-link>
             <router-link tag='div' class="tab-item" to="/displayvideo" @click="changePage(3)">视频中心</router-link>
          </div>
          <div class="h-aside">
             <router-link tag='div' class="tab-item" to="/login" @click="changePage(4)">登陆</router-link>
             <router-link tag='div' class="tab-item" to="/purchase" @click="changePage(5)">购买</router-link> 
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

<style scoped lang="scss" rel="stylesheet/scss">
   .tab 
     display:flex
     width:100%
     height:5rem
     line-height:5rem
     border:1px solid black
     background:rgba(0,0,0,0.7)
     position:absolute
     top:0
     left:0
     right:0
     margin:auto
     overflow hidden
     z-index:11
     .tab-item
       flex:0 0 9%
       opacity:1 
       color:white
       cursor:pointer
       &:hover
         color:#2EA9DF
       transition: background-color .5s ease
       text-align:center  
       font-size:1.2rem
     .tab-item:nth-child(1)
       font-size:2rem
       flex:0 0 25%
     .tab-item:nth-child(7)
       flex:0 0 18%
     .tab-item:nth-child(8)
       flex:0 0 6%
     .tab-item:nth-child(9)
       flex:0 0 4%
</style>