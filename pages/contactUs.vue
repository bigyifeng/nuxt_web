<template>
  <div class="main w">
    <h1>给大爹留言</h1>
    <el-input
      v-model="message"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="有什么想对大爹说的？"
      maxlength="500"
    ></el-input>

    <el-button @click="setComment">留言</el-button>

    <h2>留言列表</h2>
    <div class="comment-list">
      <div v-for="comment in dataList" :key="comment.id" class="comment">
        <div class="comment_header">
          <img class="comment_img" :src="comment.userImg" alt="" />
          <div>{{ comment.userName }}</div>
          <div class="flex-1"></div>
          <div>{{ comment.createdAt | dateFilter }}</div>
        </div>
        <div class="comment_content">{{ comment.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    dateFilter(val) {
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
    },
  },
  layout: 'hasHeader',
  data() {
    const dataList = []
    return {
      message: '',
      dataList,
    }
  },
  created() {
    this.getCommentList()
  },
  methods: {
    async getCommentList() {
      const res = await this.$axios.get('/comment/list')
      this.dataList = res.data
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
h1 {
  text-align: center;
  margin: 30px;
}
h2 {
  margin: 30px;
}
.w {
  width: 1200px;
}
.el-button {
  margin-top: 20px;
}
.comment-list {
  margin-top: 20px;
}
.comment {
}
.comment + .comment {
  margin-top: 16px;
}
.comment_header {
  display: flex;
  align-items: center;
}
.comment_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(1, 2, 3, 0.5);
  display: block;
  margin-right: 16px;
}
.comment_content {
  margin-top: 16px;
  font-size: 20px;
}
</style>
