export default [
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/components/Contact.vue')
  }
]
