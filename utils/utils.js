export function isRoute(path) {
  // 判断是否是外链
  const islink = /^http/.test(path)
  return !islink
}

export default {}



// 时间转换
export function getDateDiff(dateStr) {
  const publishTime = Date.parse(dateStr) / 1000;
  let dSeconds;
  let dMinutes;
  let dHours;
  let dDays;
  const timeNow = parseInt(new Date().getTime() / 1000);
  let d;

  const date = new Date(publishTime * 1000);
  const Y = date.getFullYear();
  let M = date.getMonth() + 1;
  let D = date.getDate();
  let H = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  // 小于10的在前面补0
  if (M < 10) {
    M = '0' + M;
  }
  if (D < 10) {
    D = '0' + D;
  }
  if (H < 10) {
    H = '0' + H;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }

  d = timeNow - publishTime;
  dDays = parseInt(d / 86400);
  dHours = parseInt(d / 3600);
  dMinutes = parseInt(d / 60);
  dSeconds = parseInt(d);

  if (dDays > 0 && dDays < 3) {
    return dDays + '天前';
  } else if (dDays <= 0 && dHours > 0) {
    return dHours + '小时前';
  } else if (dHours <= 0 && dMinutes > 0) {
    return dMinutes + '分钟前';
  } else if (dSeconds < 60) {
    if (dSeconds <= 0) {
      return '刚刚';
    } else {
      return dSeconds + '秒前';
    }
  } else if (dDays >= 3 && dDays < 30) {
    return M + '-' + D + ' ' + H + ':' + m;
  } else if (dDays >= 30) {
    return Y + '-' + M + '-' + D + ' ' + H + ':' + m;
  }
}
