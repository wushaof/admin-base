import Main from '@/views/Main.vue'

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: (resolve) => require(['@/views/login/login.vue'], resolve)
}
export const mainRouter = {
  path: '/',
  name: 'mainRouter',
  redirect: '/home',
  component: Main,
  children: [
    {
      path: 'home',
      title: '主页',
      name: 'home',
      component: () => import('@/views/home/home.vue')
     }
  ]
}
export const appRouter = [
  {
    path: '/home',
    title: '首页',
    name: 'home_i',
    icon: 'home',
    istitle: true,
    component: Main,
    children: [
      { path: 'index', title: '主页', name: 'home_index', component: () => import('@/views/home/home.vue') }
    ]
  },
  {
    path: '/consult',
    title: '咨询列表',
    name: 'consult',
    component: Main,
    children: [
      { path: 'index', title:'咨询列表', name: 'consult_index', component: () => import('@/views/consult/consult.vue') }
    ]
  },
  {
    path: '/count',
    title: '数据统计',
    name: 'count',
    component: Main,
    children: [
      { path: 'index', title: '数据统计', name:'count_index', component: () => import('@/views/count/count.vue') }
    ]
  }
];

export const routers = [
  mainRouter,
  ...appRouter,
  loginRouter
]
