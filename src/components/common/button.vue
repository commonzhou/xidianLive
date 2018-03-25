<template>
       <div>
         <button  :class="classStyle" @click="btnClick($event)" >
             <span>{{text}} </span>
         </button>
         </div>
</template>
<script>
  export default {
    props: {
      text: {
        type: [String, Number],
        default: '按钮在此'
      },
      classStyle: {
        type: String,
        default: 'default-btn'
      }
    },
    methods: {
      btnClick (event) {
        this.$emit('btnClick', event)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    button 
      color:#fff
      font-size: 1vw;
      text-align :center
      width:8vw;
      height:5vh;
      padding 0.5vw;
      border-radius:4px;
      background-color:#293949;
      transition: all 0.5s;
      span 
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
        &:hover                             
          padding-right:2vw;
     
      span:after{
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;         
        right: -2vw;
        transition: 0.5s;
      }
      span:hover:after{
        opacity:1;
        right:0
      }
       
</style>