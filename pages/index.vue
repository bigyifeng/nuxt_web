<template>
  <div class="main">
    <div class="bg">
      <h1 class="hide">洪一锋</h1>
      <div class="content w">
        <div class="logo">
          <img
            src="https://assets-service.obs.cn-south-1.myhuaweicloud.com/production/mp_c8d760a0-8307-11eb-a3eb-d500e74411b7/5d531e1b-4681-4b53-85f9-7883b6d3c168.png"
            alt="">
        </div>
        <ul class="nav">
          <li v-for="item in navList" :key="item.href">
            <span class="menu-text" @click="goPage(item.route)">{{item.text}}</span>
          </li>
        </ul>
        <p>时光正好，未来可期，加油 ！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          text: '知识库',
          route: '/repository'
        },
        {
          text: '学习打卡',
          route: '/study'
        },
        {
          text: '演示项目',
          route: '/items'
        },
        {
          text: 'Github',
          route: 'https://github.com/bigyifeng/bigyifeng.github.io'
        },
      ],
    }
  },
  methods: {
    goPage (path) {
      this.$router.push(path)
    }
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  min-height: 700px;
  background: url('https://assets-service.obs.cn-south-1.myhuaweicloud.com/production/mp_c8d760a0-8307-11eb-a3eb-d500e74411b7/31d0b252-932b-4ea2-8531-9b1ff117436a.jpeg')
    no-repeat;
  background-size: cover;
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
}

.nav li {
  color: #409eff;
  min-width: 80px;
  font-size: 20px;
  cursor: pointer;
}

p {
  color: #43b98e;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
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
