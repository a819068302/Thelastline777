import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'li',
      name:'li',
      component: () => import(/* webpackChunkName: "comingsoon" */ '@/components/li/li.vue')  //路由懒加载
    },
    {
      path:'comimgsoon',
          name:'comingsoon',
          component: () => import(/* webpackChunkName: "comingsoon" */ '@/components/zou/zou.vue')  //路由懒加载
    }
  ]
})
