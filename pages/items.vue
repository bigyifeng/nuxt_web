<template>
  <div class="content">
    <div class="list w">
      <div v-for="item in itemLIst" :key="item.path" class="item" @click="gotoPage(item.path)">
        <div class="left">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="right">
          <div class="item-name">{{item.name}}</div>
          <div class="tags">
            <el-tag v-for="tag in item.tags" :key="tag" type="success" effect="plain">
              {{ tag }}
            </el-tag>
            <div class="brief">
              {{item.brief}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'hasHeader',
  data () {
    const itemLIst = [
      {
        name: '后台管理系统',
        path: 'http://admin.hongyifeng.cn',
        imgUrl: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
        brief: '使用vue3，TypeScript，Element-Plus做的一个后台管理系统，主要用于学习vue3和ts',
        tags: ['vue3', 'TypeScript', 'echarts', 'Element-Plus']
      },
      {
        name: '笔记',
        path: 'http://note.hongyifeng.cn',
        imgUrl: 'https://vuepress.vuejs.org/hero.png',
        brief: '使用vuePress做的一个在线笔记网站，主要用于记录平时开发中遇到的问题，方便自己在后续开发中再遇到同样的问题时能快速解决问题',
        tags: ['vuePress', 'MackDown']
      },
      {
        name: '吃喝玩乐随机选',
        path: '',
        imgUrl: '/image/可达鸭.png',
        brief: '使用uniapp做的一个微信小程序。已上线，可以通过微信搜索。',
        tags: ['uni-app', '微信小程序']
      },
    ]
    return {
      itemLIst
    }
  },
  methods: {
    gotoPage (url) {
      if (!url) return
      window.open(url)
    }
  },
}
</script>

<style scoped>
.content {
  background-color: rgb(138, 201, 144, 0.1);
  height: 100%;
  padding-top: 100px;
}
.list {
  width: 1200px;
}
.item {
  height: 200px;
  padding: 20px 40px;
  display: flex;
  transition: all 0.2s;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
}
.item:hover {
  transform: scale(1.02);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.item + .item {
  margin-top: 50px;
}
.left {
  display: flex;
  width: 160px;
  height: 160px;
  margin-right: 50px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.right {
  flex: 1;
}
.item-name {
  font-weight: 600;
  font-size: 24px;
}
.tags {
  margin-top: 15px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.brief {
  margin-top: 20px;
  font-size: 16px;
  line-height: 20px;
  color: #242f57;
}
</style>