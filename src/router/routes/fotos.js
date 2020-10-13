export default [
  {
    path: '/fotos',
    name: 'fotos',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/components/Fotos.vue')
  }
]
