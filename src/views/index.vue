<template>
  <div class="index_wrap">  
    <NavBar @divSearch="handelDivSearch"/> 
    <!-- <h1>你输入的搜索关键字为：{{searchKey}}</h1> -->
    <div class="page_content">
      <van-swipe class="my-swipe" :initial-swipe="activeIndex" :autoplay="3000" indicator-color="white"
        @change="handleSwiperChange"
      >
          <van-swipe-item @click="handleSwiperItem" v-for="item in swiperGoodsList" :key="item">
            <img :src="require('@/assets/images/goods/'+item.goodsPictureName)" />
          </van-swipe-item>
      </van-swipe>
      <!-- 消息tips -->
      <div class="tips">女装5折</div>
      <!-- 商品推荐 -->
      <div class="goods_list">
        <h3>商品推荐</h3>

        <div  class="flex-float">
          <div v-for="item in goodsList" :key="item.id" class="item flex" @click="toDetail(item.id)">
            <img :src="require('@/assets/images/goods/'+item.goodsPictureName)" alt="">
            <div>
              <p>{{item.goodsName}}</p>
              <p>价格：￥{{item.goodsPrice}}</p>
            </div>  
          </div> 
        </div>
      </div>
    </div> 
    <!-- 父组件传子组件数据 通过在子组件的标签内添加属性，
      子组件通过prop获取
      -->
    <TabBar :active="3"  />  
  </div>
</template>
<script lang="ts"> 
import {Options,Vue } from "vue-class-component" 
import {useRouter} from "vue-router"
import TabBar from "@/components/tabBar.vue"
import NavBar from "@/components/navBar.vue"
import {getIndexPageDataApi} from "@/utils/request"
import {goodsListType} from "@/utils/interface"
// currentPage=1&size=10

@Options({
    components:{
        TabBar,
        NavBar
    }
})
export default class AboutView extends Vue{ 
  searchKey:string=""
  swiperGoodsList:goodsListType[]=[]
  goodsList:goodsListType[]=[]
  activeIndex:number=0

  router=useRouter()
  handelDivSearch=(val:string):void=>{
    console.log("???搜索的内容",val)
    this.searchKey=val
  }
  // 获取首页商品数据接口
  getGoodsData=():void=>{
    getIndexPageDataApi({
      currentPage:1,
      size:10
    }).then((res:any)=>{
      if(res.code==200){
        console.log(res)
        const resData = res.body.records
        this.swiperGoodsList = resData.slice(0,3)
        this.goodsList = resData.slice(3)
        
        // 拿到商品数据
      }
    })
  }
  handleSwiperChange(index:number):void{
    this.activeIndex=index
  }
  toDetail(id:number){
       this.router.push({
            name:"goodsDec",
            query:{
                id
            }
        })
  }
  handleSwiperItem():void{ 
    this.router.push({
      path:"/goodsDec",
      query:{
        id:this.swiperGoodsList[this.activeIndex].id
      }
    })

  }
  // 生命周期
  public mounted():void{
    this.getGoodsData()
  }
}
</script>
