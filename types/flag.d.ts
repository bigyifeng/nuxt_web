declare enum flagState {
  '未开始',
  '进行中',
  '已完成',
}

declare interface Flag {
  startTime: Date //开始时间
  endTime: Date //结束时间
  task: String //任务名称
  state: flagState //状态
}
