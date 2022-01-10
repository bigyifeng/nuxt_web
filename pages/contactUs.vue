<template>
  <div v-cloak v-loading="isLoading" class="bg" >
    <div class="contact w module">
      <div class="title">关于我</div>
      <p class="desc">
        你好，我是易风。欢迎加我微信
        <i>hongyifeng_</i>
        交流。湖北人，目前在成都从事前端开发工作，也是一枚游戏爱好者。所知甚少，唯善学。常以
        <b>易风</b> 为名混迹于江湖。
      </p>
    </div>
    <div class="module w">
      <div class="title">留言</div>
      <el-input
        v-model.trim="message"
        type="textarea"
        placeholder="在此处输入你的留言"
        maxlength="500"
        rows="5"
        resize="none"
        @keydown.enter="setComment"
      ></el-input>

      <el-button class="comment-btn" @click="setComment">留言</el-button>

      <h3>留言列表</h3>
      <div class="comment-list">
        <div v-for="comment in dataList" :key="comment.id" class="comment">
          <div class="comment_header">
            <img class="comment_img" :src="comment.userImg" alt="" />
            <div>{{ comment.userName }}</div>
            <div class="flex-1"></div>
            <div class="comment_time">
              {{ comment.createdAt | dateFilter }}
            </div>
          </div>
          <div class="comment_content">{{ comment.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import dayjs from 'dayjs'
import {getDateDiff}  from "@/utils/utils"
export default {
  filters: {
    dateFilter(val) {
      return getDateDiff(val)
      // return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
    },
  },
  layout: 'hasHeader',
  data() {
    const dataList = []
    return {
      message: '',
      dataList,
      isLoading:true
    }
  },
  created() {
    this.getCommentList()
  },
  methods: {
    async getCommentList() {
      const res = await this.$axios.get('/comment/list')
      this.dataList = res.data.reverse()
      this.isLoading=false
    },
    async setComment() {
      if (!this.message) return this.$message.error('留言不可为空！')
      await this.$axios.post('/comment/add', { content: this.message })
      this.message = ''
      this.getCommentList()
    },
  },
}
</script>

<style scoped>
.bg {
  background-color: #f4f5f5;
  padding: 16px;
  height: 100%;
}

.w {
  width: 1200px;
}

.module {
  background-color: #fff;
  padding: 24px;
}
.module > .title {
  text-align: center;
  margin: 24px;
  font-size: 25px;
  font-weight: 500;
}

.module + .module {
  margin-top: 16px;
}

.contact .title {
  text-align: center;
  margin: 24px;
  font-size: 25px;
  font-weight: 500;
}
.contact .desc {
  font-size: 16px;
  margin-top: 16px;
  line-height: 1.5;
  text-indent: 4em;
}

/* 评论 */
.module--comment {
}
h3 {
  margin: 30px 0;
  font-weight: 500;
}

.comment-btn {
  margin-top: 20px;
}
.comment-list {
  margin-top: 20px;
}
.comment + .comment {
  margin-top: 16px;
}
.comment_header {
  display: flex;
  align-items: center;
  font-weight: 500;
}
.comment_time {
  font-style: 14px;
  color: #8a919f;
}
.comment_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(1, 2, 3, 0.1);
  display: block;
  margin-right: 16px;
}
.comment_content {
  padding: 0 66px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 2rem;
  color: #515767;
  margin-top: 8px;
  -webkit-line-clamp: 6;
}
</style>
