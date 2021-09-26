export function isRoute(path) {
  // 判断是否是外链
  const islink = /^http/.test(path)
  return !islink
}

export default {}
