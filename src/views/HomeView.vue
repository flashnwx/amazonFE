<template>
  <div>
    <!-- 页面的结构 -->
    <h1 id="mh1" v-text="uname"></h1>
    <!-- 页面跳转 -->
    <!-- 
      router-link  相当于a标签
      to属性必须并且为跳转页面的path
     -->
    <router-link to="/a">about页面1</router-link> <br/>
    <!-- 带参 to内容是对象 -->
    <router-link :to='{name:"about",query:{id:1,name:"bag"}}'>about页面2</router-link> <br/>
    <router-link :to='{path:"/a"}'>about页面3</router-link> 
    <van-button type="primary" @click="handleClick1">传参形式-query</van-button>
    <van-button type="primary"  @click="handleClick2">传参形式-params</van-button>
    <van-button type="primary"  @click="handleChangeState">同步更改</van-button>
    <van-button type="primary"  @click="handleChangeState2">异步更改</van-button>


  </div>
</template>
<script lang="ts">
  // js
  import {Vue,Options} from "vue-class-component"
  import {useRoute,useRouter} from "vue-router"
  import {useStore} from "vuex"
  @Options({
    components:{
      // 组件声明
    }
  })
  export default  class HomeView extends Vue{
    // 声明变量 不可使用关键字var,let,const 并且必须有初始值
    // 使用的时候使用this
    uname:string="小红"
    // 生命周期里面进行方法执行
    // 8个生命周期
    // 1 beforeCreate
    // 数据的初始化一般是在 created/mounted

    route:any =useRoute() //用来获取路由对象的数据
    router:any =useRouter() //路由对象。进行路由跳转
    store:any = useStore()

    handleChangeState():void{
      this.store.commit("addNum") 
      // this.store.commit("addNum2",100)
      console.log("同步更改vuex",this.store.state.num)
    }
    handleChangeState2():void{
      // this.store.dispatch('addNum')
      this.store.dispatch('addNum2',200)
      console.log("异步更改vuex",this.store.state.num)
    }


    
    public beforeCreate():void {
      console.log("beforeCreate",this.uname)
      
    }
    // created
    public created():void {
      console.log("created",this.uname)
      console.log("vuex数据",this.store)
      console.log("vuex数据-state",this.store.state.num) 
      console.log("getter",this.store.getters.getNum) 
      
      
    }
    public beforeMount():void  {
      // 数据渲染前
      console.log("beforeMount",document.querySelector("#mh1"))
    }
    public mounted():void {
      // 数据渲染后
      console.log("mounted",document.querySelector("#mh1"))
      setTimeout(()=>{
        this.uname="小明"
      },2000) 
    }
    // update数据更新并且引发了dom更新 就会触发
    public beforeUpdate():void{
      console.log("beforeUpdate")
      
    }
    public updated():void{ 
      console.log("updated")
    }
    // destory  销毁
    public beforeUnmount ():void{
      // 、vue实例销毁前
      console.log("beforeUnmount")
    }
    public unmounted():void{
      // 、vue实例销毁后
      console.log("unmounted")

    }

    // 方法声明
    handleClick1(){
      this.router.push({
        path:"/a",
        //name:"about",
        query:{
          id:123
        }
      })
    }
    handleClick2(){
       this.router.push({
        // path:"/a",
        // params传参 必须是name
        // 页面刷新参数消失
        name:"about",
        params:{
          id:123
        }
      })
    }
  }
</script>
<style lang="less">
    // 样式
</style>