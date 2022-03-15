<template>
  <div class="page w">
    <div class="module module--noStart">
      <div class="title">未开始（{{notStartList.length}}）</div>
      <div class="list">
        <div v-for="item in notStartList" :key="item.task" class="item">
          {{item.startTime|date}} - {{item.endTime|date}}： &nbsp; {{item.task}}
        </div>
      </div>
    </div>
    <div class="module module--unFinish">
      <div class="title">进行中（{{unFinishList.length}}）</div>
      <div class="list">
        <div v-for="item in unFinishList" :key="item.task" class="item">
          {{item.startTime|date}} - {{item.endTime|date}} （还剩{{item.endTime-new Date()|day}}天）
          &nbsp; {{item.task}}

        </div>
      </div>
    </div>
    <div class="module module--finish">
      <div class="title">已完成（{{finishList.length}}）</div>
      <div class="list">
        <div v-for="item in finishList" :key="item.task" class="item">
          {{item.startTime|date}} - {{item.endTime|date}}： &nbsp; {{item.task}}
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
    day (val) {
      return ~~(val / 1000 / 60 / 60)
    }
  },
  layout: 'hasHeader',
  data () {
    return {
      // 目标列表，后期迁移到数据库，目前写死
      flagList: [
        {
          startTime: 1647351699374,
          endTime: 1651248000000,
          task: '读完红宝书第四版',
          finish: 1
        },
        // {
        //   startTime: 0,
        //   endTime: 0,
        //   task: '未进行示例',
        //   finish: 0
        // },
        // {
        //   startTime: 0,
        //   endTime: 0,
        //   task: '进行中示例',
        //   finish: 1
        // },
        // {
        //   startTime: 0,
        //   endTime: 0,
        //   task: '已完成示例',
        //   finish: 2
        // }
      ]
    }
  },
  computed: {
    // 已完成
    finishList () {
      return this.flagList.filter(it => it.finish === 2)
    },
    // 进行中
    unFinishList () {
      return this.flagList.filter(it => it.finish === 1)
    },
    // 未开始
    notStartList () {
      return this.flagList.filter(it => it.finish === 0)
    }
  },
  created () {
  },
}
</script>

<style  scoped>
.page {
  padding-top: 100px;
}
.module {
}
.module .title {
  font-weight: 700;
  font-size: 24px;
}
.module .list {
  margin-top: 24px;
}

.module .list .item {
  margin-top: 24px;
  font-size: 18px;
}
.module .list .item + .item {
  margin-top: 32px;
}
.module + .module {
  margin-top: 50px;
}

/* 不同的状态对应不同颜色 */
.module--noStart .item {
  color: rgb(141, 214, 219);
}
.module--unFinish .item {
  color: rgb(206, 0, 0);
}
.module--finish .item {
  color: rgb(119, 119, 119);
}
</style>