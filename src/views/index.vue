<template>
  <div class="index_wrap">
    <!-- <NavBar @divSearch="handelDivSearch" /> -->
    <!-- <h1>你输入的搜索关键字为：{{searchKey}}</h1> -->
    <!-- <div class="page_content">
      <van-swipe
        class="my-swipe"
        :initial-swipe="activeIndex"
        :autoplay="3000"
        indicator-color="white"
        @change="handleSwiperChange"
      >
        <van-swipe-item
          @click="handleSwiperItem"
          v-for="item in swiperGoodsList"
          :key="item"
        >
          <img
            :src="require('@/assets/images/goods/' + item.goodsPictureName)"
          />
        </van-swipe-item>
      </van-swipe> -->
    <!-- 消息tips -->
    <!-- <div class="tips">女装5折</div> -->
    <!-- 商品推荐 -->
    <div class="login_share">
      <div class="share_title">
        Participate in promotions and share commissions
      </div>
      <div class="share_button">
        <div class="loginShare_char" @click="loginToShare">Login to Share</div>
      </div>
    </div>
    <div class="goods_list">
      <!-- <h3>商品推荐</h3> -->

      <!-- <div class="flex-float"> -->
      <!-- <div
          v-for="item in goodsList"
          :key="item.id"
          class="item flex"
          @click="toDetail(item.id)"
        > -->
      <GoodsItem :scoreValue="4" />
      <!-- </div> -->
      <!-- </div> -->
    </div>
    <!-- </div> -->
    <!-- 父组件传子组件数据 通过在子组件的标签内添加属性，
      子组件通过prop获取
      -->
    <!-- <TabBar :active="3" /> -->
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useRouter } from "vue-router";
// import TabBar from "@/components/tabBar.vue";
import GoodsItem from "@/components/goodsItem.vue";
import { getIndexPageDataApi } from "@/utils/request";
import { goodsListType } from "@/utils/interface";
// currentPage=1&size=10

@Options({
  components: {
    GoodsItem,
  },
})
export default class AboutView extends Vue {
  searchKey: string = "";
  swiperGoodsList: goodsListType[] = [];
  goodsList: goodsListType[] = [];
  activeIndex: number = 0;
  scoreValue: number = 0;

  router = useRouter();
  // handelDivSearch = (val: string): void => {
  //   console.log("???搜索的内容", val);
  //   this.searchKey = val;
  // };
  // 获取首页商品数据接口
  getGoodsData = (): void => {
    getIndexPageDataApi({
      currentPage: 1,
      size: 10,
    }).then((res: any) => {
      if (res.code == 200) {
        console.log(res);
        const resData = res.body.records;
        this.swiperGoodsList = resData.slice(0, 3);
        this.goodsList = resData.slice(3);

        // 拿到商品数据
      }
    });
  };
  // handleSwiperChange(index: number): void {
  //   this.activeIndex = index;
  // }
  toDetail(id: number) {
    this.router.push({
      name: "goodsDec",
      query: {
        id,
      },
    });
  }
  // handleSwiperItem(): void {
  //   this.router.push({
  //     path: "/goodsDec",
  //     query: {
  //       id: this.swiperGoodsList[this.activeIndex].id,
  //     },
  //   });
  // }
  // 生命周期
  public mounted(): void {
    // this.getGoodsData();
  }
  loginToShare = () => {
    console.log(1111);
    this.router.push({
      path: "/login",
      // query: {
      //   id,
      // },
    });
  };
}
</script>

<style lang="less" scope>
// * {
//   background: linear-gradient(180deg, #d9edfb 0%, #ffffff 100%);
// }
.login_share {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 702px;
  height: 228px;
  border-radius: 10px;
  opacity: 1;
  background: linear-gradient(180deg, #6898CE 0%, rgba(104, 152, 206, 0.55) 100%);
  box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
  margin: 20px 24px 20px 24px;
  display: flex;
}
.share_title {
  position: absolute;
  left: 139px;
  top: 38px;
  width: 425px;
  height: 64px;
  opacity: 1;

  font-family: Arial Unicode MS;
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0em;

  color: #FFFFFF;
}
.share_button {
  position: absolute;
  left: 231px;
  top: 124px;
  width: 240px;
  height: 64px;
  border-radius: 5px;
  opacity: 1;

  // /* 按钮配色 */
   background: #FFFFFF;
}
.loginShare_char {
  //position: absolute;
  left: 268.5px;
  top: 132px;
  width: 165px;
  height: 48px;
  opacity: 1;

  font-family: Arial Unicode MS;
  font-size: 24px;
  font-weight: normal;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0em;

  color: #F2B331;

  margin-top: 8px;
  margin-left: 37.5px;
}
.goods_list {
  position: absolute;
  left: 25px;
  top: 316px;
  width: 702px;
  // height: 1148px;
  border-radius: 10px;
  opacity: 1;
  background: #fefefe;
  box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
  // margin-top: 40px;
  display: flex;
}
</style>
