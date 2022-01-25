<template>
  <div v-cloak v-loading="isLoading" class="bg">
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
      <el-input v-model.trim="message" type="textarea" placeholder="在此处输入你的留言" maxlength="500"
        rows="5" resize="none" @keydown.enter="setComment"></el-input>

      <div class="flex tools">
        <div class="flex-1"></div>
        <el-tooltip effect="light" placement="left">
          <template #content>
            <div class="select-emoji">
              <Emotion v-for="emojiItem in emotionList" :key="emojiItem"
                :emotionName='emojiItem' @click.native="addEmoji(emojiItem)" />
            </div>
          </template>
          <i class="iconfont blog-xiaolian"></i>
        </el-tooltip>

        <el-button class="comment-btn" @click="setComment">留言</el-button>
      </div>

      <h3>留言列表</h3>
      <div class="comment-list" ref="commentList">
        <div v-for="comment in dataList" :key="comment.id" class="comment">
          <div class="comment_header">
            <img class="comment_img" :src="comment.userImg" alt="" />
            <div>{{ comment.userName }}</div>
            <div class="flex-1"></div>
            <div class="comment_time">
              {{ comment.createdAt | dateFilter }}
            </div>
          </div>
          <div class="comment_content" v-html="comment.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import dayjs from 'dayjs'
import { getDateDiff } from "@/utils/utils"
export default {
  filters: {
    dateFilter (val) {
      return getDateDiff(val)
    },
  },
  layout: 'hasHeader',
  data () {
    const emotionList = [
      "微笑",
      "撇嘴",
      "色",
      "发呆",
      "得意",
      "流泪",
      "害羞",
      "闭嘴",
      "睡",
      "大哭",
      "尴尬",
      "发怒",
      "调皮",
      "呲牙",
      "惊讶",
      "难过",
      "酷",
      "冷汗",
      "抓狂",
      "吐",
      "偷笑",
      "可爱",
      "白眼",
      "傲慢",
      "饥饿",
      "困",
      "惊恐",
      "流汗",
      "憨笑",
      "大兵",
      "奋斗",
      "咒骂",
      "疑问",
      "嘘",
      "晕",
      "折磨",
      "衰",
      "骷髅",
      "敲打",
      "再见",
      "擦汗",
      "抠鼻",
      "鼓掌",
      "糗大了",
      "坏笑",
      "左哼哼",
      "右哼哼",
      "哈欠",
      "鄙视",
      "委屈",
      "快哭了",
      "阴险",
      "亲亲",
      "吓",
      "可怜",
      "菜刀",
      "西瓜",
      "啤酒",
      "篮球",
      "乒乓",
      "咖啡",
      "饭",
      "猪头",
      "玫瑰",
      "凋谢",
      "示爱",
      "爱心",
      "心碎",
      "蛋糕",
      "闪电",
      "炸弹",
      "刀",
      "足球",
      "瓢虫",
      "便便",
      "月亮",
      "太阳",
      "礼物",
      "拥抱",
      "强",
      "弱",
      "握手",
      "胜利",
      "抱拳",
      "勾引",
      "拳头",
      "差劲",
      "爱你",
      "NO",
      "OK",
      "爱情",
      "飞吻",
      "跳跳",
      "发抖",
      "怄火",
      "转圈",
      "磕头",
      "回头",
      "跳绳",
      "挥手",
      "激动",
      "街舞",
      "献吻",
      "左太极",
      "右太极"
    ];
    return {
      message: '',
      dataList: [],
      emotionList,
      isLoading: true
    }
  },
  created () {
    this.getCommentList()
  },
  methods: {
    async getCommentList () {
      const { data } = await this.$axios.get('/comment/list')
      // 表情替换
      data.dataList.forEach(item => {
        this.emotionList.forEach((it, idx) => {
          let regexp = new RegExp(`\\\[${it}\\\]`, "g")  // eslint-disable-line
          item.content = item.content.replace(regexp, `<img class='emo' src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${idx}.gif">`)
        })
      })
      this.dataList = data.dataList
      this.isLoading && (this.isLoading = false)
    },
    async setComment () {
      if (!this.message) return this.$message.error('留言不可为空！')
      await this.$axios.post('/comment/add', { content: this.message })
      this.message = ''
      this.getCommentList()
    },
    addEmoji (name) {
      this.message += `[${name}]`
    }
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
.tools {
  padding-top: 20px;
  align-items: center;
}
.tools .comment-btn {
  margin-left: 16px;
}
.tools .blog-xiaolian {
  font-size: 20px;
  cursor: pointer;
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
  max-width: 100%;
}

/deep/ .emo {
  display: inline-block;
  vertical-align: middle;
}
/* 选择表情 */
.select-emoji {
  width: 250px;
  height: 250px;
  overflow-y: auto;
}
</style>
