import { createStore } from 'vuex'
import uInfo from "./userInfo" 

export default createStore<any>({
  // state 初始化 vuex数据
  state: {
    num:1,
  },
  // 相当于计算
  getters: {
    getNum(state){
      return state.num+"！！！"
    }
  },
  // 同步更改state
  // commit触发mutations内的方法
  // state的更改最终都是触发mutations
  mutations: {
    addNum(state){
      state.num+=1
    },
    addNum2(state,param){
      state.num+=param
    }
  },
  // 异步更改
  // 可以返回promise
  // dispatch触发actions内的方法
  actions: {
    addNum(context){
      context.commit("addNum")
    }, 
    addNum2(context,param){
      return new Promise((resolve,reject)=>{
        // 进行ajax请求
        // 成功失败进行不同操作
        context.commit("addNum2",param)
      })
    }
  },
  // 取值的时候 state后面需要加上模块名
  // 触发方法的时候 方法名字为 "模块名/方法名"
  modules: {
    uInfo
  }
})
