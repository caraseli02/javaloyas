export default [
  {
    path: '/news',
    name: 'news',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/components/News.vue')
  }
]
