<template>
  <div class="about"> 
      <h1 v-text="text1"></h1>
      <h1>{{text2}}</h1>
      <hr>
      <h1 v-html="text2" v-bind:h1id="attrId" :idd="attrId"></h1>
      <!-- 绑定类名 -->
      <h1 class="ish " :class="{'red':isRed,'big':isBig}">我的文字颜色</h1>
      <!-- 商品质量 -->
      <p v-if="goodsType=='A'">商品很好</p>
      <p v-else-if="goodsType=='B'">商品合格</p>
      <p v-else>商品不合格</p>
      <p v-show="showPrice">价格：100</p>
      <p v-show="showDec">详情</p>
      <hr>
      <h1>商品列表页</h1>
      <ul>
        <li v-for="(item,index) in goodsList" :key="index">
          <p>商品标题：{{item.goodsName}}</p>
          <p>商品价格：{{item.goodsPrice}}</p>
          <p v-if="item.goodsDec">商品详情：{{item.goodsDec}}</p>
          <hr>
        </li>
      </ul>


      <van-button type="danger"   v-on:click="handleDanger">单击警告</van-button>
      <van-button type="danger"   @dblclick="handleDanger2">双击警告</van-button>
      <input type="text" placeholder="请输入你的需求" v-model="needVal" />
      <p>{{needVal}}</p>
      <!-- input事件 -->
      
      <input type="text" placeholder="请输入你的需求" v-model="needVal2" @input="handleInput" 
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"/>
  </div>
</template>
<script lang="ts">
interface IGoods{
  goodsName:string,
  goodsPrice:number,
  goodsDec?:string
}
import {Options,Vue } from "vue-class-component"

  import {useRoute} from "vue-router"
export default class AboutView extends Vue{
  /*
    1. v-text 绑定文本 缩写  标签内 {{变量名}} 频率比较高
    2. v-html  绑定富文本
    3. v-bind: 绑定属性值  缩写 直接一个冒号
    4. v-if v-else/v-if v-else-if v-else
    5. v-show
      // 区别 
      v-if通过控制渲染来进行展示隐藏
      v-show通过控制样式来进行展示隐藏
    6. v-for  :key一点更要写
    
    7. v-on:事件名="事件"   缩写 @事件名="事件" 
    // 双向绑定-只针对表单组件
  */ 
  text1:string="我是普通文本"
  text2:string="<i>我是html文本</i>"
  attrId:number=100
  isRed:boolean=!false
  isBig:boolean=true
  goodsType:string="C"
  showPrice:boolean=false
  showDec:boolean=true
  needVal:string=""
  needVal2:string=""
  // 商品是个数组
  goodsList:IGoods[]=[
    {
      goodsName:"商品名1",
      goodsPrice:100,
      goodsDec:"商品详情"
    },
    {
      goodsName:"商品名2",
      goodsPrice:200, 
    },
    {
      goodsName:"商品名3",
      goodsPrice:300,
      goodsDec:"商品详情"
    },
    {
      goodsName:"商品名4",
      goodsPrice:400,
      goodsDec:"商品详情"
    },
    {
      goodsName:"商品名5",
      goodsPrice:500, 
    }
  ]
  route = useRoute()
  // 生命周期
  public created(){
    console.log("query参数",this.route.query)
    console.log("params参数",this.route.params)
  }
  // 事件
  handleDanger():void{
    alert("这是一个单击警告"+this.needVal)
    
  }
  handleDanger2():void{
    alert("这是一个双击警告")
  }
  handleInput():void{
    console.log("用户在输入",this.needVal2)
  }
  handleChange():void{
    console.log("用户handleChange",this.needVal2)
  }
  handleFocus():void{
    console.log("用户获取焦点",this.needVal2)
  }
  handleBlur():void{
    console.log("用户失去焦点",this.needVal2)
  }
  
}
</script>
