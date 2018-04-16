<template>
  <div class="feedback-wrapper">
     <section class="mt30 clearfix">
       <Shelf title="直播观看人列表">
       </Shelf>
    
          <el-table
        :data="feedbackList"
        border
        :height="tableHeight"
        style="width: 100%">
        <el-table-column
          type="index"
          label="#"
          align="center"
          :resizable="false"
          width="100">
        </el-table-column>
        <el-table-column
          prop="user.id"
          label="用户ID"
          align="center"
          :resizable="false"
          width="240">
        </el-table-column>
        <el-table-column
          label="用户头像"
          align="center"
          :resizable="false"
          width="200">
          <template slot-scope="scope">
            <el-popover
              trigger="hover"
              placement="top"
              :open-delay="500"
            >
              <user-info-tooltip :user="scope.row.user"></user-info-tooltip>
              <div slot="reference" class="avatar-wrapper">
                <i
                  :style="{backgroundImage: `url(${scope.row.user.avator || (scope.row.user.gender === '男' ? Images.MaleNull : Images.FemaleNull)})`}"
                ></i>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column
          label="反馈内容"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <div class="content-wrapper">
              <p class="feedback-content">{{ scope.row.content }}</p>
              <a
                href="javascript:void(0)"
                @click.stop="showFeedbackDetail(scope.row)"
              >查看详情</a>
            </div>
          </template>
        </el-table-column> -->
        <el-table-column
          prop="date"
          width="400"
          align="center"
          :resizable="false"
          label="观看时间">
        </el-table-column>
        <el-table-column
          align="center"
          label="状态"
          width="253"
          :resizable="false"
        >
          <template slot-scope="scope">
            <p class="handled" v-if="scope.row.handled">
              <span>已查看</span>
              <a
                href="javascript:void(0)"
                class="del-feedback"
                @click.stop="showDelConfirm(scope.row)"
              >删除</a>
            </p>
            <p class="unhandled" v-else>未查看</p>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="反馈内容"
        :visible.sync="showDetailDialog"
        center
        v-if="chosenFeedback"
      >
        <section class="dialog-content">
          <header>
            <p>
              用户&nbsp;
              <i :style="{backgroundImage: `url(${chosenFeedback.user.avator || (chosenFeedback.user.gender === '男' ? Images.MaleNull : Images.FemaleNull)})`}"></i>&nbsp;
              {{ chosenFeedback.user.nickName }}&nbsp;
              反馈：
            </p>
          </header>
          <p class="d-content">{{ chosenFeedback.content }}</p>
          <p>反馈时间：<time>{{ chosenFeedback.date }}</time></p>
        </section>
        <span slot="footer">
        <el-button type="primary" @click="confirmReceiveFeedback">确 定</el-button>
      </span>
      </el-dialog>
      <el-dialog
        title="提示"
        :visible.sync="showDelDialog"
        size="tiny">
        <span>您确定要删除当前选中的反馈信息吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showDelDialog = false">取 消</el-button>
          <el-button type="primary" @click="confirmDelFeedback">确 定</el-button>
        </span>
      </el-dialog>
     </section>
   
     
  
  </div>
</template>

<script>
import Shelf from 'components/common/shelf';
import info from 'store/liveInfo.js';
import { mapMutations, mapState } from 'vuex';
  export default {
    name: 'form',
    components: {
      Shelf
    },
    mounted () {
      const TITLE_HEIGHT = 50 + 15
      let container = this.$refs.feedbackContainer
      let wrapper = container.$el.parentNode
      wrapper.style.height = wrapper.parentNode.style.height = '100%'
      this.tableHeight = container.$el.clientHeight - TITLE_HEIGHT
      window.addEventListener('resize', () => {
        this.tableHeight = container.$el.clientHeight - TITLE_HEIGHT
      })

      this._getFeedbackList()
    },
    data () {
      return {
        tableHeight: 0,
        feedbackList: [],
        showDetailDialog: false,
        showDelDialog: false,
        chosenFeedback: null,
        Images
      }
    },
    created(){
       var that=this;
         var userId=sessionStorage.getItem('userName');
          info.liveUserData({'liveId':'123'}).then(function(res){
              if(res.data.retureValue==0){
                console.log(res.data.retureData);
                that.$store.state.liveUser=[];
                for(let i=0;i<res.data.retureData.length;i++){
                   let temp=res.data.retureData[i];
                   that.$store.state.liveUser.push(temp);
                }
              }
              else{
                 alert("加载失败");
              }
         }).catch(function(err){
             console.log(err);
             alert("加载失败.");
         });
    },
     computed:{
        ...mapState(
          ['liveUser']
        )
      },
    methods: {
      showFeedbackDetail (item) {
        this.chosenFeedback = item
        this.showDetailDialog = true
      },
      confirmReceiveFeedback () {
        this.showDetailDialog = false
        feedbackApi.handleFeedback(this.chosenFeedback.id).then(response => {
          console.log(response)
          if (response.code === 0) {
            console.log('查看成功！')
            this._getFeedbackList()
          }
        }).catch(error => {
          console.log(error)
        })
      },
      showDelConfirm (item) {
        this.chosenFeedback = item
        this.showDelDialog = true
      },
      confirmDelFeedback () {
        this.showDelDialog = false
        feedbackApi.delFeedback(this.chosenFeedback.id).then(response => {
          if (response.code === 0) {
            this.$message({
              message: '信息删除成功!',
              type: 'success'
            })
            this._getFeedbackList()
          } else {
            this.$message({
              message: '信息删除失败!',
              type: 'error'
            })
          }
        }).catch(error => {
          console.log(error)
        })
      },
      _getFeedbackList () {
        feedbackApi.getData('/admin/feedback/getInfoList').then(data => {
          console.log(data)
          if (data.code === 0) {
            this.feedbackList = data.data.list.map(v => ({
              handled: v.handled === 1,
              id: v.id,
              date: moment(v.time, 'YYYY-MM-DD HH:mm').fromNow(),
              user: v.user,
              content: v.content.content
            }))
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .feedback-wrapper
    padding-right: 25px

  .avatar-wrapper
    padding: 10px 0
    i
      width: 40px
      height: 40px
  .avatar-wrapper i, .dialog-content i
    display: inline-block
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    -webkit-background-size: contain
    background-size: contain
    margin: 0 auto
    vertical-align: top
  .content-wrapper
    padding: 10px 0 5px
    &:after
      content: ''
      display: block
      width: 0px
      height: 0px
      clear: left
  .feedback-content
    line-height: 18px
    max-height: 36px
    overflow: hidden
    -ms-text-overflow: ellipsis
    text-overflow: ellipsis
    margin-bottom: 5px
    text-align: justify
  a
    float: left
    line-height: 18px
    color: #20a0ff
    &:hover
      color: #999
  .handled
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 15px
    color: #13CE66
  .del-feedback
    color: #FF4949
    &:hover
      color: #FF4949
      border-bottom: 1px solid #FF4949
  .unhandled
    color: #F7BA2A

  .dialog-content
    i
      width: 30px
      height: 30px
    header
      p
        line-height: 30px
    .d-content
      margin: 20px 0
      line-height: 20px
      border: 1px dashed #d1dbe5
      -webkit-border-radius: 5px
      -moz-border-radius: 5px
      border-radius: 5px
      padding: 10px
</style>
