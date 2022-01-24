export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '易风个人网站',
    htmlAttrs: {
      lang: 'zh-cn'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '这是我洪一锋自己的个人网站，主要用来记录自己的学习和对知识的积累'
      },
      {
        name: 'keywords',
        content: '易风,洪一锋,洪一峰,学习,博客,个人网站,yifeng,bigyifeng'
      },
      {
        name: 'format-detection',
        content: 'telephone=17786456397'
      },
      {
        name: 'baidu-site-verification',
        content: 'code-PIGVGK7Hy5'
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/asset/css/reset.css',
    '@/asset/css/acss.css',
    '@/asset/css/iconfont.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:3000' // 本地
    baseURL: 'http://hongyifeng.cn:3000' // 线上
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  server: {
    port: 3456, // default: 3000
  }
}
