<template>
  <div class="home">
       <div class="banner">
         <div class="bg" ref="bg" @mouseover="bgOver($refs.bg)"
            @mousemove="bgMove($refs.bg,$event)"
            @mouseout="bgOut($refs.bg)" style="background:url('static/imgs/starry.jpg')">
        <!-- <img   scr="~assets/imgs/fanshao/starry.jpg"  /> -->
          <span class="img a"></span>
          <!-- <img src="~assets/imgs/fanshao/starry.jpg" alt=""> -->
          <span class="text b">西电直播<br/>助您仰望更远的星空</span>
        </div>
    </div>

    <section class="mt30 clearfix">
        <Shelf title="应用场景">
          <!-- <div slot="content" class="hot">
            <mall-goods :msg="item" v-for="(item,i) in hot" :key="i"></mall-goods>
          </div> -->
        </Shelf>
    <disCard></disCard>
    </section>
    <section class="mt30 clearfix">
       <Shelf title="直播实例">
       </Shelf>
      <div  class="homevideo"> 
        <videoCard :msg="item" :key="i" v-for="(item,i) in homevideo"></videoCard>
       </div>
    </section>

    <goTop></goTop>
  </div>
</template>

<script type="text/ecmascript-6">
import Shelf from 'components/common/shelf'
import disCard from 'components/common/displayCard'
import videoCard from 'components/common/videoCard'
import goTop from 'components/common/goTop'
 export default{
      data(){
          return{
            banner:{},
            bgOpt:{
                px:0,
                py:0,
                w:0,
                h:0
            },
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
      methods:{
          bgOver(dom){
              this.bgOpt.px = dom.offsetLeft
              this.bgOpt.py = dom.offsetTop
              this.bgOpt.w = dom.offsetWidth
              this.bgOpt.h = dom.offsetHeight
          },
          bgMove(dom,e){
             let bgOpt=this.bgOpt;
             let X,Y;
             let mouseX=e.pageX-bgOpt.px;
             let mouseY=e.pageY-bgOpt.py;
             if(mouseX>bgOpt.w/2){
                 X=mouseX-(bgOpt.w/2);
             }
             else{
                 X=mouseX-(bgOpt.w/2);
             }

              if (mouseY > bgOpt.h / 2) {
                 Y = bgOpt.h / 2 - mouseY
              } 
              else {
                 Y = bgOpt.h / 2 - mouseY
              }
              dom.style['-webkit-transform']=`rotateY(${X/50}deg) rotateX(${Y/50}deg)`;
              dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
          },
          bgOut(dom){
              dom.style['-webkit-transform']=`rotateY(0deg) rotateX(0deg)`;
              dom.style.transform = `rotateY(0deg) rotateX(0deg)`
          }
      },
      components:{
         Shelf,
         disCard,
         videoCard,
         goTop
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .home {
    display: flex;
    flex-direction: column;
  }
  .banner, .banner span, .banner div {
    font-family: "Microsoft YaHei";
    transition: all .3s;
    -webkit-transition: all .3s;
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
  }
  .banner {
    perspective: 3000px;
    position: relative;
    z-index: 19;
  }
  .bg {
    position: relative;
    width: 1220px;
    height: 500px;
    margin: 20px auto;
    margin-top:40px;
    background: center no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
    -webkit-transform: rotateY(0deg) rotateX(0deg);
  }
  .text {
    position: absolute;
    top: 20%;
    right: 10%;
    font-size: 30px;
    color: #fff;
    text-align: right;
    font-weight: lighter;
  }
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