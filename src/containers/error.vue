<template>
  <div class="back">
    <div class="dialog">
      <h1>Oops!</h1>
      <p>We were unable to find the page you were looking for, but working hard to resolve this issue.</p>
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
  
   .back {
    height: 100%;
    width: 100%;
    background: #fefefe url("~assets/imgs/fanshao/404.png") center bottom fixed;     //background-attachment 属性设置背景图像是否固定或者随着页面的其余部分滚动。fixed和scroll
    -webkit-background-size: cover;                          //把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
    -moz-background-size: cover; 
    -o-background-size: cover;
    background-size: cover;
    color: #2E2F30;
    font-family: sans-serif;
    margin: 0;
  }
  .dialog {
    float:left;
    text-align: left;
    width: 50%;
    margin: 2% auto 0;
    padding-left: 10%;
  }

  h1 { 
    font-size: 3.5em;
    color: #393939;
    line-height: 1em;
  }

  p {
    font-size: 1.4em;
    color: #393939;
    
  }
</style>