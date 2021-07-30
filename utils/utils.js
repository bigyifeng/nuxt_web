export function isRoute(path) {
  // 判断是否是外链
  const islink = /^http/.test(path)
  // 判断时候是静态资源
  const isStaticItem = ['/repository', '/items'].some(item => path.startsWith(item))
  return !(islink || isStaticItem)
}

export default {}
