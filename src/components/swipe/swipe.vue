<template>
  <div>
    <div class="slider">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

// import img1 from 'assets/imgs/back01.jpg'
// import img2 from 'assets/imgs/back02.jpg'
    export default{
      data(){
        return{
          currentIndex:1,
          links:[
              "https://muse.huaban.com//assets//145f141678b7f0c514268472b1a99d68.jpg",
              "https://muse.huaban.com//assets//18926c8dfd3fa4b394f99c0c8e4002be.jpg",
              "https://muse.huaban.com//assets//80fb09762c5334606c6c1d4c36947fe1.jpg",
              "https://muse.huaban.com//assets/38cc865b97ed4c0270dbb92c3449ced2.jpg"
        ]
        }
      },
      components:{

      },
      methods:{
        _playAssit(){
           let sliderSection=document.getElementsByClassName('slider')[0];
           if(this.currentIndex==(this.links.length)){
             this.currentIndex=0
           }
           sliderSection.style.opacity=0.001;
           this.timer2=setTimeout(()=>{
             sliderSection.style.backgroundImage="url("+this.links[this.currentIndex]+")";
             this.currentIndex++;
             sliderSection.style.opacity=1;
           },1000)
        },
        _play(){
          this.timer1=setInterval(()=>{
            this._playAssit()
          },5000)
        }
      },
      mounted(){
        this._play()
      },
      activated(){
        this._play()
      },
      deactivated(){
         clearTimeout(this.timer1);
         clearTimeout(this.timer2);
      },
      destroyed(){
         clearTimeout(this.timer1);
         clearTimeout(this.timer2);
      }
    }
    //两个该进的点，一个是图片一闪一闪，使用opacity的变化来掩盖了这个问题
    //另一个是一开始没有clearTimeout，所以切换页面回到主页时，有的时间还没清除
    //所以清除掉计时器
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slider
   background-image:url("https://muse.huaban.com//assets//145f141678b7f0c514268472b1a99d68.jpg")
   height:35rem
   position:relative
   margin:0 -10px
   top:-5rem
   zoom:1
   opacity:1
   transition:opacity 1s linear
   -moz-transition:opacity 1s linear
   -webkit-transition:opacity 1s linear
   -o-transition:opacity 1s linear
</style>

