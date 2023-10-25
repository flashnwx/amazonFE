<template>
    <van-nav-bar fixed placeholder>
        <template #title>
             <van-search v-model="searchVal" placeholder="请输入搜索关键词"
                @search="handelSearch"
              />
              <!-- @search="divSearch" -->
        </template>
    </van-nav-bar>
    <!-- 
        一般是通过事件进行子组件数据传输给父组件

     -->
</template>   

<script lang="ts"> 
    import {Options,Vue } from "vue-class-component"   
    import {Prop,Emit} from "vue-property-decorator"
    import {useRouter} from "vue-router"
    @Options({})
    export default class AboutView extends Vue{ 
        searchVal:string=""
        router=useRouter()
        handelSearch = ():void=>{
            // 输入的值，需要传给父组件
            // 在父组件声明一个方法，绑定在子组件，然后触发此次行为进行数据传递
            this.divSearch()
            this.router.push({
                name:"goodsList",
                params:{
                    key:this.searchVal
                }
            })
        }
        @Emit() //事件名对应
        divSearch():string{
            // return的数据就是给到父组件的数据
            return this.searchVal
        }
    }
</script>
<style lang="less" scoped>
  :deep .van-nav-bar__title{
      max-width: 100%;
      width: 100%;
    }
</style>