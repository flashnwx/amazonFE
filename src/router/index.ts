/*
 * @Author: niweixing
 * @Date: 2023-10-25 16:22:58
 * @LastEditors: niweixing
 * @LastEditTime: 2023-11-02 10:45:38
 * @Description: 
 */
import { createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw } from "vue-router";
// 引入组件  
import HomeView from "../views/HomeView.vue";
import store from "../store/index"
// 声明路由list
// ts 泛型 ：类型不定，课推断
const routes:Array<RouteRecordRaw>=[
  // 路由对象，必须属性 path ， name,component
  // meta:{}
  {
    path:"/",
    name:"index",
    component:()=>import("../views/index.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login.vue")
  },
  {
    path:"/regist",
    name:"regist",
    component:()=>import("../views/regist.vue")
  },
  {
    path:"/privacy",
    name:"privacy",
    component:()=>import("../views/privacy.vue")
  },
  // 商品列表
  // {
  //   path:"/goodsList",
  //   name:"goodsList",
  //   component:()=>import("../views/goodsList.vue")
  // }, 
  // 商品详情
  // {
  //   path:"/goodsDec",
  //   name:"goodsDec",
  //   component:()=>import("../views/goodsDec.vue")
  // }, 
  // // 购物车页面
  // {
  //   path:"/goodsCar",
  //   name:"goodsCar",
  //   component:()=>import("../views/goodsCar.vue")
  // }, 
  // 订单列表
  // {
  //   path:"/orderList",
  //   name:"orderList",
  //   component:()=>import("../views/orderList.vue")
  // }, 
  {
    path:"/myspace",
    name:"myspace",
    component:()=>import("../views/mySpace.vue")
  }, 

  // {
  //   path:"/addressList",
  //   name:"addressList",
  //   component:()=>import("../views/addressList.vue")
  // }, 
  

  // 以下是语法页面
  // {
  //   path:"/",
  //   name:"index",
  //   component:HomeView
  // },
  // {
  //   path:"/a",
  //   name:"about",
  //   // 异步引入组件优化性能
  //   component:()=>import("../views/AboutView.vue")
  // }
]
// 声明路由对象
const router = createRouter({
  history:createWebHistory(), //hash模式链接有#
  routes:routes
})
// 路由守卫
// 只要进入到某个路由就会执行此方法
router.beforeEach((to,from,next)=>{
  // from 从哪个路由跳转的
  //to 到达的路由
  // 只有执行了next页面才会被渲染 
  // 判断用户是否登录
  /**
    如果用户没有登录则进行跳转到登录页的操作
    否则正常跳转
    */ 
  console.log("store----",store.state)
 
  if(store.state.uInfo&&store.state.uInfo.id){
    // 用户已登录  
    next()
  }else{
    // 未登录
    next()
    // if(to.path=="/login"){
    //   next()
    //   return
    // }
    // next("/login")
  }
})
export default router