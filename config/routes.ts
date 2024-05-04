export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/user', layout: false, routes: [{ path: '/user/register', component: './User/Register' }] },
  // { path: '/welcome', icon: 'smile', component: './Welcome', name: '欢迎页' },
  { path: '/add_chart', icon: 'barChart', component: './AddChart', name: '智能分析（同步处理）' },
  { path: '/add_chart_async', icon: 'barChart', component: './AddChartAsync', name: '智能分析（异步处理）' },
  { path: '/my_chart', icon: 'slack', component: './MyChart', name: '我的图表' },
  {
    path: '/admin',
    icon: 'crown',
    name: '管理页',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { icon: 'table', path: '/admin/user', component: './Admin/User', name: '用户管理' },
    ],
  },
  { path: '/', redirect: '/add_chart' },
  { path: '*', layout: false, component: './404' },
];
