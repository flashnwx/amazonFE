<template>
    <div class="login_wrap">   
    <h1>商品列表</h1>
    <NavBar  @divSearch = "handleSearch"/>
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="80"
        :immediate-check="false"
        class="van_box"
        >
        <van-cell v-for="item in goodsList" :key="item" class="goods_wrap">
            <div class="flex goods_item" @click="handleToDetail(item.id)">
                <img :src="require('@/assets/images/goods/'+item.goodsPictureName)"   ismapalt="">
                <div class="goods_info">
                    <h1>{{item.goodsName}}</h1>
                    <p>价格：{{item.goodsPrice}}</p>
                    <p>库存：{{item.goodsNum}}</p>
                </div>
            </div>
            </van-cell>
        </van-list>
    <TabBar :active="3"  />  
    </div>
</template>
<script lang="ts">
import {Options , Vue } from "vue-class-component" 
import {useStore} from "vuex"
import {useRouter,useRoute} from "vue-router"
import TabBar from "@/components/tabBar.vue"
import NavBar from "@/components/navBar.vue"
import {goodsListType} from "@/utils/interface"
import {getGoodsListApi} from "@/utils/request"
type paramsTyep={
    goodsName:string,
    currentPage:number,
    size:number
}
@Options({ 
    components:{
        TabBar, 
        NavBar
    }
})
export default class Login extends Vue{
    route=useRoute()
    router=useRouter()
    searchParams:paramsTyep={
        goodsName:"",
        currentPage:1,
        size:10
    }
    key:string=this.route.params.key as string
    goodsList:goodsListType[]=[]
    loading:boolean=false
    finished:boolean=false
    onLoad():void{
        // 加载下一页
        // 页码进行加一
        this.searchParams.currentPage+=1;
        this.loading=true
        this.getGoodsList(true)
    }
    handleSearch(val?:string):void{
        val ?this.searchParams.goodsName = val:null; 
        // 搜索对应商品 
       this.getGoodsList(false)
    }
    getGoodsList(type:boolean):void{
         getGoodsListApi(this.searchParams).then((res:any)=>{
            this.loading=false
            console.log("商品数据",res)
            if(type){ 
                this.goodsList=[...this.goodsList,...res.body.records]
            }else{
               this.goodsList =res.body.records
            }
            // 分页是否完成
            if(res.body.total<=this.goodsList.length){
                this.finished = true
            }
            // 请求异步结束loading一定改为false
          
        })
    }
    handleToDetail(id:number){
        this.router.push({
            name:"goodsDec",
            query:{
                id
            }
        })
    }
    public mounted(){
        this.searchParams.goodsName=this.key
        this.handleSearch()
    }

}
</script>
<style lang="less" scope>
    .van_box{
        padding-bottom: 80px;
        background: rgb(247, 247, 247); 
    }
    .login_wrap{
        background: rgb(247, 247, 247); 
        padding:0 30px;
    }
     .goods_wrap{
        margin-bottom: 30px;
        
    }
    .goods_item{
        img{
            width:50%;
            height:160px;
        }
        background: rgb(255, 255, 255);
        .goods_info{
            padding-left: 50px;
            h1{
                font-size: 40px;
            }
            p{
                font-size: 34px;
                padding-top:18px;
            }
        }
    }
</style>