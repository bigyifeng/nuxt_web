<template>
  <div class="main">
    <div class="study">
      <h1 class="w">万事随缘<br />但不要放弃努力</h1>
      <div class="w itemList">
        <section v-for="item in dataList" :key="item.date" class="item"
          :data-month='`month${getMonth(item.date)}`'>
          <div class="date">{{item.date}}</div>
          <div v-for="(child,i) in item.value" :key="i" class="value"
            :data-month='`month${getMonth(item.date)}_text`'>
            <div class="div">
              {{i+1}}：{{child}}
            </div>
          </div>
          <div v-if="item.diary" class="diary">
            <b>小记：</b> <span>{{item.diary}}</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'hasHeader',
  data () {
    const dataList = [{
      date: `2021/4/27`,
      value: [
        `Object.freeze()   对象冻结`,
        `attr()   配合content使用，获取自定义属性的值`,
      ],
      diary: `可以使用冻结对象来防止项目中其他地方对该对象进行的修改`,
    },
    {
      date: `2021/4/28`,
      value: [`踩坑：空文件石不能转换成base64`],
      diary: `今天一天啥也没干，就改这个小bug，弄了一天，裂开了`,
    },
    {
      date: `2021/4/29`,
      value: [`webpack-cdn-plugin对依赖使用cdn引入`],
      diary: `改良了一下打卡页面数据渲染的结构`,
    },
    {
      date: `2021/4/30`,
      value: [
        `自定义属性实现图片懒加载`,
        `Vue.API: $options(可调用自定义属性)，$parent(父实例)，$root(根实例)，$watch(类似watch，可关闭watch)，v-is(特定元素时调用组件)`,
      ],
      diary: `五一了`,
    },
    {
      date: `2021/5/6`,
      value: [`art-template`],
      diary: `不怎么好用，但是小`,
    },
    {
      date: `2021/5/7`,
      value: [`技术调研收银app的双屏异显`],
      diary: `搞了一下午，如果要做的话需要使用原生安卓，有点难`,
    },
    {
      date: `2021/5/8`,
      value: [`fetch`, `vue3 hooks`],
      diary: `尤雨溪:“读书人的事儿，怎么能叫抄呢”`,
    },
    {
      date: `2021/5/11`,
      value: [`vue3 Suspense`],
      diary: `来进行异步组件的显示`,
    },
    {
      date: `2021/5/13`,
      value: [`中途岛接口调用和调试`],
      diary: `写css是个体力活`,
    },
    {
      date: `2021/5/18`,
      value: [`小程序获取用户信息，手机信息`],
      diary: `必须得用户触发button才能进行接口的调用`,
    },
    {
      date: `2021/5/21`,
      value: [`了解npm script脚本`],
      diary: ``,
    },
    {
      date: `2021/5/24`,
      value: [`node官网node入门`],
      diary: `东西不多`,
    },
    {
      date: `2021/5/28`,
      value: [`proxy理论`],
      diary: ``,
    },
    {
      date: `2021/6/1`,
      value: [`jquery中ajax设置`],
      diary: ``,
    },
    {
      date: `2021/6/2`,
      value: [`uni-app的tabar`],
      diary: ``,
    },
    {
      date: `2021/6/7`,
      value: [`vue2组件使用v-model和sync修饰符`, `vue3组件使用v-model`],
      diary: `vue2使用子组件修改父组件的数据时有多种方法，影响了单向数据流，所以vue3进行了统一`,
    },
    {
      date: `2021/6/8`,
      value: [`npx`],
      diary: `可调用还没下载的依赖，执行完之后进行依赖的删除`,
    },
    {
      date: `2021/6/9`,
      value: [`nodejs内置模块url`],
      diary: `对url地址的各种处理`,
    },
    {
      date: `2021/6/15`,
      value: [`nodejs内置模块http->request`],
      diary: `可进行所有请求`,
    },
    {
      date: `2021/6/19`,
      value: [`JSONP`],
      diary: `主要是运用了node环境没有同源策略的，来使用node的http模块进行其它接口的请求，将其它接口返回的数据返回给前端，然后再调用前端写好的脚本里面的方法来操作服务器返回的数据，实现跨域`,
    },
    {
      date: `2021/6/22`,
      value: [`vuepress`],
      diary: `使用vuepress建立自己的知识库，方便以后查阅资料,基础模板功能较少，于是添加了vdoing这个主题`,
    },
    {
      date: `2021/6/22`,
      value: [`BFC 用来清除浮动  防止mergin重叠，自适应多栏布局`, `$route.matched  返回该页面所在路由`],
      diary: `BFC是CSS2.1就有的一种布局方式`,
    },
    {
      date: `2021/7/5`,
      value: [`Generator 函数`, `canvas`],
      diary: `canvas主要是使用js进行画图`,
    },
    {
      date: `2021/7/7`,
      value: [`vuex->module`, `页面截图`],
      diary: ``,
    },
    {
      date: `2021/7/12`,
      value: [`TypeScript=>类型断言.  使用as来告诉编译器这个变量就是某一个属性，使用as any可以调用所有属性`, `页面截图`],
      diary: `尽量减少全局变量或全局类型的数量，以防止命名冲突，所以最好将她们放到namespace下`,
    },
    {
      date: `2021/7/20`,
      value: [`虚拟列表的实现`, `开通公众号`, `v-slot`],
      diary: `虽然slot-scope依然可以用，但是语法已经废弃，以后尽量使用新的语法v-slot`,
    },
    {
      date: `2021/7/23`,
      value: [`创建nuxt项目，熟悉nuxt项目结构`, `nuxt->route`],
      diary: `在page里创建.vue文件时项目自动生成路由（类似uni-app）`,
    },
    {
      date: `2021/7/20`,
      value: [`nuxt->layout`, '使用koa-generator脚手架创建node项目'],
      diary: ``,
    },
    {
      date: `2021/7/27`,
      value: [`nuxt->asyncData()，页面渲染之前将请求获取的内容渲染到html上`,
        'nxut->$axios，$axios是nuxt里面封装的一个axios，尽量使用这个而不是去使用node_module里面的axios，如果想使用拦截器的话需要在plugins文件夹里面新建文件，然后引入到nuxt.config.js里面',
        `nxut->vuex，语法跟vue有一点不一样，但是用法完全一样`
      ],
      diary: `asyncData和fetch的区别：asyncData主要用来修改当前页面组件的数据，而fetch主要用来修改vuex里面的数据（因为fetch的参数可以调用store这个变量）`,
    },
    {
      date: `2021/7/28`,
      value: [`使用nuxt重构网站`],
      diary: `学以致用`,
    },
    ]
    return {
      dataList
    }
  },
  methods: {
    getMonth (date) { return new Date(date).getMonth() + 1 }
  },
}
</script>


<style scoped>
.main {
  display: flex;
  justify-content: center;
  min-height: 700px;
  background: url('https://assets-service.obs.cn-south-1.myhuaweicloud.com/production/mp_c8d760a0-8307-11eb-a3eb-d500e74411b7/d8ab6225-739c-463d-8b89-3acbb157ea22.jpeg')
    no-repeat;
  background-size: cover;
}

.study {
  padding-top: 50px;
}

.itemList {
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
}

.item {
  background-color: rgb(150, 177, 134);
  border: 1px solid rgb(173, 172, 172);
  opacity: 0.8;
}

.item .date {
  font-weight: 700;
  padding: 20px 20px;
  font-size: 20px;
}

.item .value {
  padding: 0px 20px 10px 20px;
  line-height: 20px;
  letter-spacing: 1px;
  font-size: 16px;
  color: rgb(43, 43, 43);
  display: flex;
}

.item b {
  width: 52px;
  min-width: 52px;
}

.item span {
  flex: 1;
}
.item .diary {
  padding: 0px 30px 10px 20px;
}

h1.w {
  text-align: center;
  color: aliceblue;
  font-size: 90px;
  line-height: 100px;
}

/* 四月份 */
[data-month='month4'] {
  background-color: rgb(218, 218, 218);
}

.val[data-month='month4_text'] {
  color: black;
}

.itemList [data-month='month4']:nth-of-type(4) {
  margin-bottom: 50px;
}

/* 五月份 */
[data-month='month5'] {
  background-color: rgb(172, 137, 255);
}

.val[data-month='month5_text'] {
  color: rgb(35, 0, 82);
}

.itemList [data-month='month5']:nth-of-type(13) {
  margin-bottom: 50px;
}

/* 六月份 */
[data-month='month6'] {
  background-color: rgb(220, 240, 40);
}

.val[data-month='month6_text'] {
  color: rgb(80, 102, 0);
}

.itemList [data-month='month6']:nth-of-type(22) {
  margin-bottom: 50px;
}

/* 七月份 */
[data-month='month7'] {
  background-color: rgb(248, 233, 95);
}

.val[data-month='month7_text'] {
  color: rgb(81, 90, 48);
}

@media screen and (max-width: 800px) {
  body,
  input,
  textarea,
  select {
    font-size: 12pt;
    line-height: 1.5em;
  }

  body .study-herf {
    display: block;
  }

  body .w {
    width: 350px;
  }

  body h1.w {
    font-size: 30px;
    line-height: 50px;
  }

  body .item p {
    font-weight: 700;
    padding: 10px 20px;
    font-size: 20px;
  }
}
</style>