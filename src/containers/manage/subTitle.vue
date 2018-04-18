<template>
  <div class="nav">
  {{title}}
  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .nav 
     height: 60px;
     line-height: 60px;
     font-size 26px;
     text-align left;
</style>

<script>
export default {
     props: {
       title:''
    },
  data(){
      return{

      }
  }
}
</script>

