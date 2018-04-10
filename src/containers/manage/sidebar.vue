<template>
  <div class="sider">
     <ul>
         <li :class="{active:item.show}" @click="changeitem(index,item)"
         v-for="(item,index) in manageOption" :key="index">
           <a href="javascript:void(0);">{{item.name}}</a> 
           <transition name="slider">
            <ul v-show="item.show">
                <li v-for="(a,index) in item.list" :key="index" @click.stop>
                  <router-link :to="{path:item.path[index]}">
                      <a href="javascript:void(0)">{{a}}</a>
                  </router-link>
                </li>
            </ul>
           </transition>
         </li>
     </ul>
  </div>
</template>

<script type="text/ecmascript-6">

    export default{
      data(){
           return{
             manageOption: [{
                    name: '频道管理',
                    list: ['分类管理', '新建频道'],
                    show: false,
                    path:['/channel'],
                    nickname:'channel'
                },{
                    name: '账户管理',
                    list: ['个人中心', '认证中心','子账户管理'],
                    show: false,
                    path:['/admin'],
                    nickname:'admin'
                }, {
                    name: '统计信息',
                    list: ['直播统计', '直播表单','点播统计'],
                    show: false,
                    path: ['/count','/form','/dianbo'],
                    nickname:'count'
                }, {
                    name: '授权观看',
                    list: ['用户组观看', '付费观看','授权码观看'],
                    show: false,
                    path:['/system'],
                    nickname:'system'
                }, {
                    name:'媒体中心',
                    list:'全部视频',
                    show:false,
                    path:'',
                    nickname:''
                },{
                    name: '订单管理',
                    list: ['套餐购买','订单记录','账户余额'],
                    show: false,
                    path:['/purchase'],
                    nickname:'purchase'
                }, {
                    name: '使用说明',
                    list: ['操作说明'],
                    show: false,
                    path:['/document'],
                    nickname:'document'
                }]   
           }
       },
       methods:{
           changeitem:function(index,item){
              this.manageOption.forEach(
                  // 当前点击的item show是flase, 遍历item，如果有谁的show不是false，就要设为false,将其关闭，然后将点击的item他的show设为true
                 i=>{
                     if(i.show !== this.manageOption[index].show){
                         i.show = false;
                     }
                 }
              ); 
              
              item.show=!item.show;
           }
       },
      components:{
      
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.sider {
  color: #5D5F63;
  background: #293949;
  font-family: 'Open Sans',sans-serif;
  padding: 0;
  margin: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  width: 240px;
  height: 100%;
  background: #293949;
  position: fixed;
  left:0;
  top:90px;     //因为head是90px
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  z-index: 100;
}
ul{
   margin: -2px 0 0;         //上  左右  下
   padding: 0;               //这一行让ul和li不成阶梯型
}
li{
   list-style-type: none;
   border-bottom: 1px solid rgba(255,255,255,.05);    
}
a{
    color: #aeb2b7; 
    text-decoration: none;
    display: block;
    padding: 18px 0 18px 0;
    font-size: 18px;
    outline: 0;
    -webkit-transition: all 200ms ease-in;
    -moz-transition: all 200ms ease-in;
    -o-transition: all 200ms ease-in;
    -ms-transition: all 200ms ease-in;
     transition: all 200ms ease-in;      
}
 a:hover,
 {
     color: #1abc9c;
 }
li.active{
   color: #000;
}

ul ul li
   background: #23313f;
   margin-bottom: 0;
   margin-left: 0;
   margin-right: 0;
   border-bottom: none;
   a 
     font-size: 14px;
     padding-top: 13px;
     padding-bottom: 13px;
     color: #aeb2b7;     
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slider-enter-active {
  transition: all .6s ease;
}
.slider-leave-active {
  transition: all .3s fast;
}
.slider-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

</style>