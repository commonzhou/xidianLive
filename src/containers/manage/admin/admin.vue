<template>
    <div class="info_container">
        <!--个人信息栏-->
        <el-row class="info_row row" :gutter="10">
                <el-col :span="4">
                <div class="area">
                    <div class="imgarea">
                        <img src="~assets/imgs/fanshao/user.png" alt="头像">
                       <!-- <el-upload
                            class="upload-demo"
                            :action="uploadaction"
                            multipl='false'
                            accept="image/*"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :on-success="handSuccess"
                            :on-error="handError"
                            :before-upload="beforeAvatarUpload"
                            :file-list="fileList">
                            <el-button type="success" size="small">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                        </el-upload> -->
                         <el-button type="success" size="small">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                    </div>
                </div>
                </el-col>

                <el-col :span="5">
                <div class="area">
                    <div class="namearea">
                        <p>姓名：鸡哥威武不能屈</p>
                        <p>昵称：PW68061826</p>
                        <p>使用年限：5年</p>
                        <p>绑定邮箱：9061446xx@qq.com</p>
                        <p>绑定手机：189xxxx9028</p>
                        <p class="awards"><i class="el-icon-date el-icon--left"></i>签到有奖</p>
                    </div>
                </div>
                </el-col>

                <el-col :span="9">
                <div class="area">
                    <div class="moneyarea">
                        <p class="title">可用现金:</p>
                        <p class="title"><span class="money">0.00</span><span class="yuan">元</span></p>
                        </div>
                    <div class="chongzhiarea">
                       
                        <p class="chongzhi">
                            <el-button type="success" size="">我要出借</el-button>
                            <el-button type="warning" size="">充值</el-button>
                            <el-button type="danger" size="">提现</el-button>
                        </p>
                    </div>
                    <div class="tipsarea">
                        <p>您的每笔交易资金，都将接受银行全程存管   <a href="http://www.baidu.com" target="_blank">了解资金存管 》</a></p>
                    </div>
                </div>
                </el-col>
                <el-col :span="6">
                <div class="area">
                    <div class="dataarea">
                        <p class="gtitle"><i class="el-icon-date el-icon--left"></i>个人数据</p>
                        <div class="gdataarea clear">
                            <div class="gdata left">
                                <p class="num">20</p>
                                <p class="title">投资数量</p>
                            </div>
                            <div class="gdata left">
                                <p class="num">200</p>
                                <p class="title">关注的人</p>
                            </div>
                            <div class="gdata left">
                                <p class="num">3000</p>
                                <p class="title">粉丝</p>
                            </div>
                        </div>
                        <p class="morearea">谢谢您的关注，<a href="http://www.baidu.com" target="_blank">了解我的更多个人信息 》</a></p>
                    </div>
                </div>
                </el-col>
        </el-row>
        <!--资金信息栏-->
        <el-row class="data_row row" :gutter="10">
                <el-col :span="6">
                <div class="area">
                    <p class="title"><i class="fa fa-cog"></i>待收资产</p>
                    <p class="num"><span class="symbol">￥</span>78.00</p>
                    <a class="detail dbgcolor">查看详情&nbsp;&nbsp;<i class="el-icon-d-arrow-right"></i></a>
                </div>
                </el-col>
                <el-col :span="6">
                    <div class="area">
                    <p class="title"><i class="fa fa-cog"></i>账户总资产</p>
                    <p class="num"><span class="symbol">￥</span>2078.00</p>
                    <a class="detail zbgcolor">查看详情&nbsp;&nbsp;<i class="el-icon-d-arrow-right"></i></a>
                </div>
                </el-col>
                <el-col :span="6">
                    <div class="area">
                    <p class="title"><i class="fa fa-cog"></i>已得回报</p>
                    <p class="num"><span class="symbol">￥</span>1000.00</p>
                    <a class="detail dbgcolor">查看详情&nbsp;&nbsp;<i class="el-icon-d-arrow-right"></i></a>
                </div>
                </el-col>
                <el-col :span="6">
                <div class="area">
                    <p class="title"><i class="fa fa-cog"></i>期待回报</p>
                    <p class="num"><span class="symbol">￥</span>3000.00</p>
                    <a class="detail zbgcolor">查看详情&nbsp;&nbsp;<i class="el-icon-d-arrow-right"></i></a>
                </div>
                </el-col>
        </el-row>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
               bandata:[
                   {url:'http://www.baidu.com',data:300},
                   {url:'http://www.sina.com',data:200},
                   {url:'http://www.360.com',data:100},
                   {url:'http://www.weibo.com',data:0},
                   {url:'http://www.hao123.com',data:100},
               ],
               uploadaction:'/api/userInfo/uploadimg',
               fileList:[], // name,url
            }
        },
      	mounted() {
         
	    },
        methods: {
            // 超过文件上传个数提示
            handleExceed(files, fileList) {
               this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                     this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                     this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
           },
           handSuccess(file){
           },
           handError(file){
           },
        },
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    .info_container{
        padding: 10px;
        margin: 0 10px;
        margin-left:250px;
        padding-top:50px;
        overflow: auto;
        
    }
    .row{
        margin:20px;
    }
 .info_row .area {
   border: 1px solid #dfdfdf;
   height: 178px;
   overflow: hidden;
}
.info_row .area .imgarea {
  text-align: center;
  padding: 10px;
}
.info_row .area .imgarea img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.info_row .area .namearea {
  padding: 10px;
  font-size: 14px;
}
.info_row .area .namearea p {
  line-height: 24px;
}
.info_row .area .namearea .awards {
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  background-color: #3bc5ff;
  border: 1px solid #3bc5ff;
  color: white;
  display: block;
}
.info_row .area .namearea .awards:hover {
  background-color: #f9c855;
  border: 1px solid #f9c855;
}
.info_row .area .moneyarea {
  padding: 10px;
  float: left;
}
.info_row .area .moneyarea .title {
  font-size: 15px;
  font-weight: bolder;
  line-height: 50px;
}
.info_row .area .moneyarea .title .money {
  color: #c10000;
  margin-right: 5px;
}
.info_row .area .moneyarea .title .yuan {
  font-weight: 100;
  font-size: 13px;
}
.info_row .area .chongzhiarea {
  padding: 10px;
  text-align: center;
}
.info_row .area .chongzhiarea img {
  width: 80%;
  height: 40px;
}
.info_row .area .chongzhiarea .chongzhi {
  margin-top: 10px;
}
.info_row .area .tipsarea {
  clear: both;
  font-size: 14px;
  padding: 10px;
  padding-top: 15px;
}
.info_row .area .tipsarea a {
  color: #3bc5ff;
}
.info_row .area .dataarea {
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
.info_row .area .dataarea .gtitle {
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  background-color: #3bc5ff;
  color: white;
  display: block;
}
.info_row .area .dataarea .gdataarea {
  padding-left: 25px;
}
.info_row .area .dataarea .gdataarea p {
  line-height: 38px;
}
.info_row .area .dataarea .gdataarea .num {
  font-weight: bolder;
  color: #c10000;
}
.info_row .area .dataarea .gdataarea .title {
  color: #3bc5ff;
}
.info_row .area .dataarea .gdataarea .gdata {
  margin: 10px;
}
.info_row .area .dataarea .morearea a {
  color: #3bc5ff;
}
.data_row {
  font-size: 18px;
}
.data_row .area {
  border: 1px solid #dfdfdf;
  height: 220px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
  font-weight: bolder;
}
.data_row .area .fa {
  margin-right: 10px;
}
.data_row .area .symbol {
  font-size: 16px;
  font-style: italic;
  margin-right: 10px;
  color: #232323;
  font-weight: 100;
  font-family: "microsoft yahei";
}
.data_row .area p {
  line-height: 70px;
}
.data_row .area .num {
  color: #c10000;
}
.data_row .area .detail {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  color: white;
  display: block;
  border: 1px solid #3bc5ff;
}
.data_row .area .dbgcolor {
  background-color: #3bc5ff;
}
.data_row .area .zbgcolor {
  color: #3bc5ff;
}
.data_row .area .dbgcolor:hover {
  background-color: #fff;
  color: #3bc5ff;
}
.data_row .area .zbgcolor:hover {
  background-color: #3bc5ff;
  color: #fff;
}
.ban_row .area {
  padding-left: 4%;
}
.ban_row .area .banarea li {
  float: left;
  width: 200px;
  margin-right: 10px;
}
.ban_row .area .banarea li a {
 // background: url(../assets/img/pro_map.gif?v=1.0) no-repeat;
  width: 200px;
  height: 50px;
  display: block;
}

</style>