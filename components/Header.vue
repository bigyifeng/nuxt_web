<template>
  <div class="header">
    <h1 class="hide">洪一锋</h1>
    <div id="header">
      <div class="header_bg">
        <header class="w">
          <div class="title"><a @click.prevent="$router.push('/')">易风 YiFeng</a> </div>
          <ul class="nav">
            <li v-for="item in navList" :key="item.path" @click="$router.push(item.path)">
              <a class="menu-text">{{item.text}}</a>
            </li>
          </ul>
          <div class="right">
            <a href="https://github.com/bigyifeng/bigyifeng.github.io"
              class="blog-github iconfont github">
              GitHub
            </a>
          </div>
        </header>
      </div>
      <!-- <div class="banner">
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      navList: [{
        text: '个人简历（建设中）',
        path: './src/views/me/me.html'
      },
      {
        text: '知识库',
        path: '/repository'
      },
      {
        text: '学习打卡',
        path: 'study'
      },
      {
        text: '演示项目',
        path: '/items'
      },
      {
        text: '联系方式（建设中）',
        path: './src/404.html'
      }]
    };
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
};
</script>

<style scoped>
.header_bg {
  background-color: var(--theme-bg-color);
  height: 72px;
}

header {
  height: 100%;
  display: flex;
  line-height: 72px;
  color: #2b2e2e;
}

header .title {
  width: 200px;
  cursor: pointer;
}

header .title a {
  font-size: 22px;
  font-weight: bold;
  color: #0555da;
}

header .nav {
  display: flex;
  justify-content: space-around;
  flex: 1;
}

header .nav li {
}

header .nav .menu-text {
  display: block;
  padding: 0;
  height: 72px;
  font-size: 16px;
  font-weight: bold;
  line-height: 72px;
  opacity: 0.95;
  -webkit-transition: color 0.3s linear;
  position: relative;
  z-index: 2;
  color: #2b2e2e;
}

.right {
  line-height: 72px;
}

.github {
  display: block;
  font-size: 25px;
  cursor: pointer;
  height: 72px;
  transform: translateY(-1px);
}

.github::before {
  font-size: 35px;
  transform: translateY(-4px);
  position: relative;
  top: 4px;
}

.banner {
  margin: 0 auto;
  width: 100%;
  height: 640px;
  background: url('https://assets-service.obs.cn-south-1.myhuaweicloud.com/test/mp_562497b0-7fbc-11eb-b1f2-4de4946d79ce/b7fcc1c0-4f83-4f37-a070-cb88511c51e4.png')
    no-repeat top;
  background-size: cover;
}
</style>
