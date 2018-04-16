<template>
<div>
     <div class="goTop_btn"  title="回到顶部" @click="goTop()" v-show="show">TOP</div>
</div>
 
</template>
<script>

export default {
   data(){
       return{
           threshold:50,
           show:false
       }
   },
   methods:{
       goTop:function(){
        // 线性
        //   let scrollStep=-window.scrollY/20;
        //   let scrollInterval=setInterval(function(){
        //       if(window.scrollY){
        //           window.scrollBy(0,scrollStep);
        //       }
        //       else{
        //           clearInterval(scrollInterval);
        //       }
        //   },1);

        //直接回顶部
         // window.scrollTo(0,0); 

         //ease in and out
        // const  scrollHeight = window.scrollY,
        // scrollStep = Math.PI / ( 1500 / 15 ),
        // cosParameter = scrollHeight / 2;
        // let scrollCount = 0,
        // scrollMargin,
        // scrollInterval = setInterval( function() {
        //     if ( window.scrollY != 0 ) {
        //         scrollCount = scrollCount + 1;  
        //         scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
        //         window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
        //     } 
        //     else clearInterval(scrollInterval); 
        // }, 15 );

        //改进的ease in and out,平滑的很啊
         var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (1000 / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
       },
       scrollHandler:function(){
    
          if(window.scrollY>this.threshold){
               this.show=true;
           }
           else{
               this.show=false;
           }
       },
       throttle:function (func, wait, mustRun) {  
    var timeout,  
        startTime = new Date();  
   
    return function() {  
        var context = this,  
            args = arguments,  
            curTime = new Date();  
   
        clearTimeout(timeout);  
        // 如果达到了规定的触发时间间隔，触发 handler  
        if(curTime - startTime >= mustRun){  
            func.apply(context,args);  
            startTime = curTime;  
        // 没达到触发间隔，重新设定定时器  
        }else{  
            timeout = setTimeout(func, wait);  
        }  
    };  
  }
   },
   watch:{
       '$route':function(to,from){      //解决子路由切换的问题
         document.body.scrollTop =0;
         document.documentElement.scrollTop = 0; 
       }
   },
   mounted(){
       window.addEventListener('scroll',this.throttle(this.scrollHandler,500,1000),false)
   },
   destroyed(){                         //切换路由以后依旧其他页面也触发了scrollHandler函数，然后我想到使用了vue-router做的spa项目，window对象不变的，所以需要在每次使用后销毁
       window.removeEventListener('scroll',this.throttle(this.scrollHandler,500,1000),false)
       window.scrollTo(0,0);                         //解决主路由切换的sroll问题
   }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.goTop_btn{
	position: fixed;
	width: 45px; height: auto;
	bottom: 20px;right: 0px;
	background-color: #353535;
	color: #fff;
	font-size: 20px;
	line-height: 24px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-radius: 5px 0px 0px 5px;
	text-align: center;
	cursor: pointer;
	z-index: 5;
  opacity:0.7;
}
.goTop_btn:hover{
	background-color: #114488;
  opacity:0.7;
}

</style>
