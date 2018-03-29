<template>
  <div>
    <div id="timePeople"></div>
  
  </div>
</template>

<script type="text/ecmascript-6">
      // 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入线图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
    export default{
      data(){
           return{
           
           }
       },
      components:{
        
      },
      methods:{
       
      },
      mounted(){
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('timePeople'));
window.onresize=function(){
  myChart1.resize()
}
// 绘制图表
myChart1.setOption({
    title: {
        text: '点播时间和人数'
    },
    tooltip: {},
    xAxis: {
        data: ['10', '20', '30', '40', '50', '60']
    },
    yAxis: {
      type:'value'
    },
    series: [{
        name: '人数',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   #timePeople
     width:100%
     height:50vh
    
</style>