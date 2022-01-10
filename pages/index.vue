<template>
  <div class="main">
    <div v-loading="!loadEnd" class="bg">
      <h1 class="hide">洪一锋</h1>
      <div class="content w">
        <div class="logo">
          <img
            src="https://assets-service.obs.cn-south-1.myhuaweicloud.com/production/mp_a46d2830-510b-11ec-943b-511504fccf92/f8397150-b817-4ec4-b147-a2d5b7b3eaba.png"
            alt="">
        </div>
        <ul class="nav" :class="[loadEnd?'':'before']">
          <li v-for="item in navList" :key="item.href">
            <span class="menu-text" @click="goToPage(item.path)">{{item.text}}</span>
          </li>
        </ul>
        <p :class="[loadEnd?'':'before']">时光正好，未来可期，加油 ！ </p>
      </div>
    </div>
  </div>
</template>

<script>
import { isRoute } from '@/utils/utils'
export default {
  data () {
    return {
      navList: [
        {
          text: '知识库',
          path: 'http://note.hongyifeng.cn'
        },
        {
          text: '学习打卡',
          path: '/study'
        },
        {
          text: '演示项目',
          path: '/items'
        },
        {
          text: '关于我',
          path: '/contactUs'
        },
        {
          text: 'Github',
          path: 'https://github.com/bigyifeng/bigyifeng.github.io'
        },
      ],
      loadEnd: false, // 页面加载完毕,
    }
  },
  mounted () {
    this.loadEnd = true

    const whiteScreen = new Date() - performance.timing.navigationStart
    console.log('页面白屏时间', whiteScreen);
  },
  methods: {
    goToPage (path) {
      if (isRoute(path)) {
        this.$router.push(path)
        return
      }
      window.location.href = path
    }
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  min-height: 700px;
  background: url('https://assets-service.obs.cn-south-1.myhuaweicloud.com/test/mp_48cabef0-1044-11ec-851a-276d2c8d5c81/5ca51862-6ad9-4678-b17e-41e13c95dd39.jpeg')
    no-repeat;
  background-size: cover;
  overflow: hidden;
}
.bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: grammaticalization 2s linear infinite alternate;
}

h1 {
  display: none;
}

.content {
  position: relative;
  width: 700px;
  height: auto;
  padding: 50px 0;
  transform: translateY(-80px);
}

.logo {
  animation: smallToBig 2s linear infinite alternate;
  margin: 0 auto;
  width: 170px;
  height: 170px;
  margin-bottom: 20px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.nav {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 30px;
  transition: all 2s;
}

.nav li {
  color: #409eff;
  min-width: 80px;
  font-size: 20px;
  cursor: pointer;
}
.nav li:hover {
  color: rgb(126, 0, 115);
}

.nav.before {
  transform: translateX(-1500px);
}

p {
  color: #43b98e;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  transition: all 2s;
}
p.before {
  transform: translateX(1500px);
}

/* 背景虚化 */
@keyframes grammaticalization {
  0% {
    backdrop-filter: blur(1px);
  }

  50% {
    backdrop-filter: blur(6px);
  }

  100% {
    backdrop-filter: blur(1px);
  }
}

@keyframes smallToBig {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
