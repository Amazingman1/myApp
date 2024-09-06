export default {
  pages: [
    'pages/index/index',
    'pages/login/loginPage',
    'pages/about/aboutUs',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333',
    selectedColor: '#409EFF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/login/loginPage',
        text: '登录',
      },
      {
        pagePath: 'pages/about/aboutUs',
        text: '关于我们',
      }
    ]
  }
}
