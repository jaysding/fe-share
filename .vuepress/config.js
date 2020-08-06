module.exports = {
  title: '前端小记',
  description: '代码写出来是给人看的，附带能在机器上运行',
  head: [
    ['link', { rel: 'icon', href: '/logo-white.png' }]
  ],
  port: 2333,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '编码规范', link: '/code/standard/' },
      { text: '鱼塘', link: '/code/fishPond/' },
      {
        text: '代码块',
        items: [
          { text: 'CSS', link: '/code/css/' },
          { text: 'JavaScript', link: '/code/js/' },
          { text: 'Vue 组件', link: '/code/components/' }
        ]
      },
      { text: '微信小程序', link: '/code/mini-program/' },
      { text: 'Github', link: 'https://github.com/L-cw/fe-share' },
    ],
    sidebar: {
      '/code/standard/': [
        '',
        'css-standard',
        'js-standard',
        'less-standard',
        'vue-standard'
      ],
      '/code/css/': [
        '',
        'variable',
        'base-style',
        'media-query',
        'reset-style',
        'scroll-bar-style',
        'css-overview'
      ],
      '/code/js/': [
        '',
        'js-overview',
        'js-other-tools',
        'js-date-tools',
        'js-amount-tools'
      ],
      '/code/fishPond/': [
        '',
        'fe-study',
        'fe-vue-project',
        'fe-and-dev',
        'array-about',
        'Element-UI-Record',
        'Webpack-Record',
        'centos-install-python3'
      ],
      '/code/components/': [
        '',
        'vouchers'
      ],
      '/code/mini-program/': [
        '',
        'wxs'
      ]
    },
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    }
  }
}