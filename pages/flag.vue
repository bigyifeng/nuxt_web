<template>
  <div class="bg">
    <div class="page w">
      <div v-for="state in stateList" :key="state.value" :class="['module',state.className]">
        <div class="title">{{state.text}}（{{filterList(state.value).length}}）</div>
        <div class="list">
          <div v-for="item in filterList(state.value)" :key="item.task" :style="state.style"
            class="item">
            <span v-if="state.value!=0"> {{item.startTime|date}} - {{item.endTime|date}}</span>
            <span v-if="state.value==1">（{{overDay (item.endTime)}}）</span>
            {{item.task}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs'
export default {
  filters: {
    date (val) {
      return dayjs(val).format('YYYY-MM-DD')
    },
  },
  layout: 'hasHeader',
  data () {
    return {
      // 目标列表，后期迁移到数据库，目前写死
      /**
       * @param  {Array<Flag>} flagList 任务列表
       */
      flagList: [
        // {
        //   startTime: 0,
        //   endTime: 0,
        //   task: '未进行示例',
        //   state: 0
        // },
        // {
        //   startTime: 0,
        //   endTime: 0,
        //   task: '进行中示例',
        //   state: 1
        // },
        // {
        //   startTime: 0,
        //   endTime: 0,
        //   task: '已完成示例',
        //   state: 2
        // },
        {
          startTime: 0,
          endTime: 0,
          task: 'React',
          state: 0
        },
        {
          startTime: 0,
          endTime: 0,
          task: 'http详解',
          state: 0
        },
        {
          startTime: '2022-3-15',
          endTime: '2022-4-30',
          task: '读完红宝书第四版',
          state: 1,
        },
        {
          startTime: '2022-3-15',
          endTime: '2022-3-16',
          task: '个人网站增加学习目标页面',
          state: 2,
        },
        {
          startTime: '2022-3-15',
          endTime: '2022-3-16',
          task: '服务器迁移',
          state: 0,
        },

      ],
      // 状态列表
      stateList: [
        {
          value: 0,
          text: '未开始',
          className: 'no-start'
        },
        {
          value: 1,
          text: '进行中',
          className: 'doing'
        },
        {
          value: 2,
          text: '已完成',
          className: 'done'
        },
      ]
    }
  },
  computed: {

  },
  created () {
  },
  methods: {
    // 过滤数据
    filterList (state) {
      return this.flagList.filter(it => it.state === state)
    },
    // 计算剩余天数
    overDay (time) {
      const overTime = new Date(time) - new Date()
      console.log(overTime);
      console.log(new Date(time));
      console.log(new Date());
      const overDay = ~~(overTime / 1000 / 60 / 60 / 24)
      if (overDay >= 0) {
        return `还剩${overDay}天`
      }
      return `已超时${Math.abs(overDay)}天`
    }
  }
}
</script>

<style  scoped>
.bg {
  background: url('https://assets-service.obs.cn-south-1.myhuaweicloud.com/production/mp_57e60d10-a4d0-11ec-9e69-bbea97eda581/6622f982-6358-4e35-9189-45a7960fa52f.jpeg')
    no-repeat;
  min-height: calc(100vh - 72px);
}
.page {
  padding-top: 100px;
}
.module {
}
.module .title {
  color: antiquewhite;
  font-weight: 700;
  font-size: 24px;
}
.module .list {
  margin-top: 24px;
}

.module .list .item {
  padding-left: 24px;
  margin-top: 24px;
  font-size: 18px;
}
.module .list .item + .item {
  margin-top: 32px;
}
.module + .module {
  margin-top: 50px;
}

/* 状态类名定制化 */
/* 未开始 */
.no-start {
}
.no-start .item {
  color: rgb(102, 190, 206);
}
/* 进行中 */
.doing {
}
.doing {
  color: red;
}
/* 已完成 */
.done {
}
.done .item {
  color: #ccc;
  text-decoration: 'line-through';
}
</style>