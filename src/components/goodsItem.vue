<!--
 * @Author: niweixing
 * @Date: 2023-10-27 12:40:36
 * @LastEditors: niweixing
 * @LastEditTime: 2023-10-31 22:59:58
 * @Description: 
-->
<template>
  <div class="item_div">
    <!-- <div class="item_img"> -->
    <img class="item_img" :src="require('@/assets/images/amazon.png')" alt="" />
    <!-- </div> -->
    <div class="item_scor_div">
      <div class="scor_char_1">4.8</div> 
      <div class="scor_star">
        <van-rate
        v-model="props.scoreValue"
        :size="25"
        color="#EAA911"
        void-icon="star"
        void-color="#eee"
        readonly
      />
      </div>
      
      <p style="margin-left: 18px;"> > </p> 
      <div class="scor_char_2">26 Rating</div>
      <div class="top_icon"><img src="@/assets/images/top_tip.png" alt="" class="top_icon_img"></div>
    </div>

    <div class="item_desc_div">
      <p>
        Aveallore Buffalo Check Quilt Set, Gray & White Bedspread Twin/Twin XL
        Size(68"x86"), Soft Microfiber Gingham Geometric Bedding Coverlet for
        All Seasons (Includes 1 Quilt, 1 Sham)
      </p>
    </div>

    <div class="item_asin_div">
      <div class="save_price">Save $20.00</div>
      <div class="asin_item">coupon code:aijd-852n-wnee</div>
    </div>

    <div class="item_discounted_div">
      <div>
        <p class="discounted_price_div">$69.99</p>
        <p class="price_div">Typical price: $89.99</p>
      </div>
      <!-- <div class="buy_button_tip" @click="goToAmazonBuy"> -->
      <img
        :src="require('@/assets/images/buyonamazon.png')"
        alt=""
        class="buy_button_tip"
        @click="goToAmazonBuy"
      />
      <!-- </div> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineComponent, ref } from "vue";
import { Options, Vue } from "vue-class-component";
//   import { getDictDataList } from "@/utils/utils";
//   import { useAppStore } from "@/store";
// export default class goodsItem extends Vue {
// name: "GoodsItem";
// scoreValue: number = 4;
// props: {
//   scoreValue: Number;
// };
const props = defineProps({
  // message: {
  //   type: String,
  //   require: true,
  //   default: "默认值"
  // },
  scoreValue: Number,
});

// setup() {
//   //const store = useAppStore();
//   // const scoreValue = ref(4);

//   const scoreValue = ref(3);
//   return {
//     // value: computed(() => `${props.ItemValue}`),
//     scoreValue,
//     //dataList: getDictDataList(store.state.dicts, props.dictType)
//   };
// }

const goToAmazonBuy = () => {
  window.location.href =
    "https://www.amazon.com/dp/B0CB6Z7763?maas=maas_adg_api_580939372756743889_static_9_190&ref_=aa_maas&aa_campaignid=B0CB6Z7763&aa_adgroupid=er&aa_creativeid=1697005852020&th=1";
};
// }
</script>
<style  type='less' scoped>
.item_img {
  /* position: absolute; */
  left: 56px;
  top: 407px;
  width: 640px;
  height: 640px;
  border-radius: 5px;
  opacity: 1;
  margin: 31px;
}
.item_scor_div{
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.scor_char_1{
  left: 56px;
top: 1077px;
width: 34px;
height: 22px;
opacity: 1;

font-family: Arial-BoldMT-Bold;
font-size: 24px;
font-weight: normal;
line-height: 22px;
letter-spacing: 0em;

color: #5D5D5D;
margin-left:31px;
}
.scor_star{
  margin-left:19px
}
.scor_char_2{
  left: 56px;
top: 1077px;
/* width: 34px; */
height: 22px;
opacity: 1;

font-family: Arial-BoldMT-Bold;
font-size: 24px;
font-weight: normal;
line-height: 22px;
letter-spacing: 0em;

color: #5D5D5D;
margin-left:20px;
}
.top_icon{
  left: 636px;
  top: 1066px;
  width: 54px;
  height: 44px;
  opacity: 1;
  margin-left:75px
}
.top_icon_img{
    width: 100%;
  }
.item_desc_div p {
  /* position: absolute; */
  left: 59px;
  top: 1145px;
  width: 630px;
  height: 157px;
  opacity: 1;

  font-family: Arial-BoldMT-Bold;
  font-size: 24px;
  font-weight: normal;
  line-height: 36px;
  text-align: justify; /* 浏览器可能不支持 */
  letter-spacing: 0px;

  color: #5d5d5d;
  margin-left: 34px;
  margin-top: 46px;
}
.item_asin_div {
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
}
.save_price {
  left: 58px;
  top: 1333px;
  width: 174px;
  height: 32px;
  border-radius: 5px;
  opacity: 1;
  background: #eaa911;
  margin-left: 33px;
  text-align: center;
}
.asin_item {
  left: 365px;
  top: 1338px;
  width: 330px;
  height: 32px;
  opacity: 1;

  font-family: Arial-BoldMT-Bold;
  font-size: 18px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0em;

  color: #6898CE;
  margin-right: 32px;
}
.item_discounted_div {
  display: flex;
  justify-content: space-between;
  margin: 31px 32px 52px 34px;
}
.discounted_price_div {
  left: 81px;
  top: 1396px;
  width: 121px;
  height: 54px;
  opacity: 1;

  font-family: Arial-BoldMT-Bold;
  font-size: 48px;
  font-weight: normal;
  line-height: 54px;
  text-transform: capitalize;
  letter-spacing: 0em;

  color: #232424;
}
.price_div {
  left: 59px;
  top: 1446px;
  width: 169px;
  height: 22px;
  opacity: 1;

  font-family: Arial Unicode MS;
  font-size: 18px;
  font-weight: normal;
  line-height: 22px;
  text-transform: capitalize;
  letter-spacing: 0em;
  text-decoration: line-through;

  color: #9e9e9e;

  /* Typical price: $ */
  font-family: Arial Unicode MS;
  font-weight: 400;
  font-size: 18;

  /* 89.99 */
  font-family: Arial Unicode MS;
  font-weight: 400;
  font-size: 18;
}
.buy_button_tip {
  left: 0px;
  top: 0px;
  width: 330px;
  height: 64px;
  border-radius: 5px;
  opacity: 1;
}
</style>
  