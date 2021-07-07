/*
 * @since: 2021-07-07 16:05:20
 * @LastAuthor: Do not edit
 * @lastTime: 2021-07-07 16:47:10
 * @文件相对于项目的路径: \data-report-webe:\项目开发\web__news\vuepress-starter\docs\.vuepress\config.js
 * @Author: ltm@xtoneict.com
 * @message: 文档配置
 */

module.exports = {
  title: 'Charactor\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: '前端基础', link: '/accumulate/' },
      { text: '算法题库', link: '/algorithm/' },
      { text: '诗和远方', link: '/others/' },
      { text: '微博', link: 'https://baidu.com' }
    ],
    sidebar: {
      '/accumulate/': [
        {
          title: '前端积累',
          children: [
            '/accumulate/1.html',
            '/accumulate/2.html',
            '/accumulate/3.html',
            '/accumulate/4.html',
            '/accumulate/5.html',
            '/accumulate/6.html',
            '/accumulate/7.html',
            '/accumulate/8.html',
            '/accumulate/9.html',
            '/accumulate/10.html',
            '/accumulate/11.html',
          ]
        }
      ],
      //     '/algorithm/': [
      //       '/algorithm/', 
      //       {
      //         title: '第二组侧边栏下拉框的标题1',
      //         children: [
      //           '/algorithm/' 
      //         ]
      //       }
      //     ]
    },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};