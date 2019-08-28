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
      component: () => import(/* webpackChunkName: "li" */ '@/components/li/li.vue')  //路由懒加载
    },
    {
      path:'feng',
          name:'feng',
          component: () => import(/* webpackChunkName: "feng" */ '@/components/feng/feng.vue')  //路由懒加载
    },
	{
      path:'zou',
          name:'zou',
          component: () => import(/* webpackChunkName: "zou" */ '@/components/zou/zou.vue')  //路由懒加载
    },
	{
      path:'wang',
          name:'wang',
          component: () => import(/* webpackChunkName: "wang" */ '@/components/wang/wang.vue')  //路由懒加载
    }
  ]
})
