<!--
 * @Author: niweixing
 * @Date: 2023-10-25 16:22:58
 * @LastEditors: niweixing
 * @LastEditTime: 2023-10-31 22:32:12
 * @Description: 
-->
<template>
    <!-- <div> -->
    <div class="my_wrap">

        <div class="top_info">
           <!-- <van-icon name="chat-o" /> -->
           <div class="top_icon"><van-icon name="http://localhost:1024/user_icon.png" /></div>
           
           <div class="info_mail">bruno203@gmail.com</div>
           <img  class="top_info_img" src='@/assets/images/amazonlogo.png' alt="">
           <div class="top_info_dir"> > </div>
        </div>

        <div class="withdraw_div">
            <div class="withdraw_div_top">
                <div class="available_div">
                    <div class="available_div_title">Available balance（$）</div>
                    <div class="available_div_num">999.99</div>
                </div>
                <div class="withdraw_top_right">
                    <div class="withdraw_date">{{formatDate()}}</div>
                    <div class="withdraw_button" @click="withwdraw">
                        <p class="width_char">Withwdraw</p>
                    </div>
                </div>
            </div>

            <div class="withdraw_num_div">
                <div class="grand_total">
                    <div class="withdraw_title_char">Grand total ($)</div>
                    <div class="num_char">9999.99</div>
                </div>
                <div class="Received_num">
                    <div class="withdraw_title_char">Received ($)</div>
                    <div class="num_char">99999.99</div>
                </div>
                <div class="total_order">
                    <div class="withdraw_title_char">Total order</div>
                    <div class="num_char">1000+</div>
                </div>
            </div>
        </div>

      
        <div class="sharing_div_title">Sharing Links</div>
        <div class="sharing_div" >
            <img  class="user_share_img" src='@/assets/images/userShare.png' alt="" />
            <div class="sharing_left">
                <div class="sharing_left_title">share it now get your cash $</div>
                <div class="share_content_div">
                    <div class="share_discount">-20%</div>
                    <div class="share_price_div">
                        <p class="share_price">$71.99</p>
                        <p class="share_origin_price">Typical price: $89.99</p>
                    </div>
                </div>
                <div class='sharing_btn' @click="shareLink">
                    <div class="sharing_btn_tip">share link</div>
                    <div  class="sharing_btn_icon"><img src='@/assets/images/share_icon.png'  alt=""></div>
                </div>
            </div>
        </div>
    

       
        <div class="commission_rank_div">commission rank</div>
        <div class="rank_div">
            <div class="row_item">
                <div class="row_title_user">Users</div>
                <div class="row_title">Total revenue ($)</div>
                <div class="row_title">total order</div>
                <div class="row_title">Ranking</div>
            </div>
            <div class="van-hairline--top"></div>

            <div class="row_item">
                <div class="row_char_mail">b****@gmail.com</div>
                <div class="row_char">99999.99</div>
                <div class="row_char">99999+</div>
                <div class="row_char">图片</div>
            </div>
            <div class="van-hairline--top"></div>

            <div class="row_item">
                <div class="row_char_mail">b****@gmail.com</div>
                <div class="row_char">99999.99</div>
                <div class="row_char">99999+</div>
                <div class="row_char">图片</div>
            </div>
            <div class="van-hairline--top"></div>

            <div class="row_item">
                <div class="row_char_mail">b****@gmail.com</div>
                <div class="row_char">99999.99</div>
                <div class="row_char">99999+</div>
                <div class="row_char">图片</div>
            </div>

            <div class="row_item">
                <div class="row_char_mail">b****@gmail.com</div>
                <div class="row_char">99999.99</div>
                <div class="row_char">99999+</div>
                <div class="row_char">图片</div>
            </div>

            <div class="row_item">
                <div class="row_char_mail">b****@gmail.com</div>
                <div class="row_char">99999.99</div>
                <div class="row_char">99999+</div>
                <div class="row_char">图片</div>
            </div>
            <!-- <van-row justify="space-around" gutter="45">
                <van-col span="6" class="row_char">Users</van-col>
                <van-col span="6" class="row_char">Total revenue ($)</van-col>
                <van-col span="6" class="row_char">total order</van-col>
                <van-col span="6" class="row_char">Ranking</van-col>
            </van-row>
            <van-row justify="space-around" gutter="45">
                <van-col span="6" class="row_char">b****@gmail.com</van-col>
                <van-col span="6" class="row_char">99999.99</van-col>
                <van-col span="6" class="row_char">99999+</van-col>
                <van-col span="6" class="row_char">图片</van-col>
            </van-row>
            <van-row justify="space-around"  gutter="45">
                <van-col span="6">b****@gmail.com</van-col>
                <van-col span="6">99999.99</van-col>
                <van-col span="6">99999+</van-col>
                <van-col span="6">图片</van-col>
            </van-row>
            <van-row justify="space-around"  gutter="45">
                <van-col span="6">b****@gmail.com</van-col>
                <van-col span="6">99999.99</van-col>
                <van-col span="6">99999+</van-col>
                <van-col span="6">图片</van-col>
            </van-row>
            <van-row justify="space-around"  gutter="45">
                <van-col span="6">b****@gmail.com</van-col>
                <van-col span="6">99999.99</van-col>
                <van-col span="6">99999+</van-col>
                <van-col span="6">图片</van-col>
            </van-row> -->
        </div>
    </div>
        
    
<!-- </div> -->
</template>
<script lang="ts" setup>
import {Options , Vue } from "vue-class-component" 
import {orderListApi} from "@/utils/request"
import {useStore} from "vuex"
import {useRouter} from "vue-router"
// export default class OrderList extends Vue{ 
  const  store = useStore()
  const  router = useRouter()
  const  uInfo:any= store.state.uInfo
  const  toOrder =()=>{
        router.push({
            name:"orderList"
        })
    }

    //取钱
    const withwdraw=()=>{

    }

    //分享商品链接
    const shareLink=()=>{

    }

    function formatDate(){
        const day = new Date().toDateString().split(" ")[2]
        const month = new Date().toDateString().split(" ")[1]
        const year = new Date().toDateString().split(" ")[3]
         //return `${day}`+`${month}`+` ,` +`${year}'
        // const  curretDate=  day+month+` ,` +year     
        return day+month+` ,` +year
    } 
 
    // return {
    //     curretDate
    // }
// }
</script>
<style lang="less" scope>
.my_warp{
    width: 750px;
    height: 1624px;
    opacity: 1;
/* 背景色 */
    // background: linear-gradient(180deg, #D9EDFB 0%, #FFFFFF 100%);
    background:#F4F6F8;
}
   .top_info{
    display: flex;
    // margin-top: 81px;
   }
   .top_icon{
    margin-left:44.5px;
    margin-top: 81px;
   }
   .info_mail{
    left: 56px;
    top: 4px;
    width: 380px;
    height: 28px;
    opacity: 1;

    font-family: Arial-BoldMT-Bold;
    font-size: 36px;
    font-weight: normal;
    line-height: 28px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #232424;
    margin-left:20px;
    margin-top: 81px;
   }
   .top_info_img{
    left: 0px;
    top: 0px;
    width: 64px;
    height: 30px;
    border-radius: 5px;
    opacity: 1;

    background: #1F2936;
    margin-left:21px;
    margin-top: 81px;
   }
   .top_info_dir{
    margin-left:102px;
    margin-top: 81px;
   }
   .withdraw_div{
    left: 26px;
    top: 253px;
    width: 702px;
    height: 336px;
    border-radius: 10px;
    opacity: 1;
    background: #FEFEFE;
    box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
    margin-top:78px;
    margin-left:26px;
   }
   .withdraw_div_top{
    left: 55px;
    top: 288px;
   // width: 253px;
    height: 22px;
    opacity: 1;
    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 22px;
    text-transform: capitalize;
    letter-spacing: 0em;
    color: #9E9E9E;
    display:flex;
    justify-content:space-between;
   }
  .available_div{
     margin-left:29px;
     margin-top: 35px;
  }
  .available_div_title{
    left: 55px;
    top: 288px;
    width: 253px;
    height: 22px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 22px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #9E9E9E;
  }
  .available_div_num{
    left: 55px;
    top: 346px;
    width: 196px;
    height: 72px;
    opacity: 1;

    font-family: Arial-BoldMT-Bold;
    font-size: 64px;
    font-weight: normal;
    line-height: 72px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #232424;
    margin-top:39px;
    
  }
  .withdraw_top_right{
    margin-left:121px;
    margin-top:35px;
  }
  .withdraw_date{
    left: 563px;
    top: 283px;
   // width: 126px;
    height: 32px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 32px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #939293;
    margin-right: 59px;
    justify-content: flex-end;
    display: flex;
  }
  .withdraw_button{
    // left: 0px;
    // top: 0px;
    width: 260px;
    height: 48px;
    border-radius: 10px;
    opacity: 1;

    /* 按钮配色 */
    background: #6898CE;
    text-align: center;
    margin-top:39px;
    margin-right:39px;
    display: flex;
  }
  .width_char{
    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 22px;
    text-transform: capitalize;
    letter-spacing: 0em;
    color: #FFFFFF;
    margin:auto;
  }
   


   .withdraw_num_div{
    display: flex;
    justify-content:space-around;
    margin-top:96px;
   }
   .grand_total {
   margin-top:96px;
   }
   .Received_num {
   margin-top:96px;
   }
   .total_order{
   margin-top:96px;
   }
   .withdraw_title_char{
    left: 55px;
    top: 475px;
    width: 163px;
    height: 22px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 22px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #9E9E9E;
   }
   .num_char{
    left: 55px;
    top: 505px;
    width: 131px;
    height: 48px;
    opacity: 1;

    font-family: Arial-BoldMT-Bold;
    font-size: 36px;
    font-weight: normal;
    line-height: 48px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #232424;
    margin-top:8px;
   }

   .sharing_div_title{
    // left: 26px;
    // top: 656px;
    width: 194px;
    height: 36px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 32px;
    font-weight: normal;
    line-height: 36px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #9E9E9E;
    margin-top: 67px;
    margin-left:26px;
    
   }

   .sharing_div{
    // left: 26px;
    // top: 709px;
    width: 702px;
    height: 260px;
    border-radius: 10px;
    opacity: 1;

    background: #FEFEFE;

    box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
    margin-top:16px;
    margin-left:26px;
    display:flex;
    justify-content: space-between;
   }
   .user_share_img{
    left: 46px;
    top: 729px;
    width: 220px;
    height: 220px;
    border-radius: 5px;
    opacity: 1;
    .img{
        width: 100%;
        height: 100%;
    }
    margin-top:20px;
    margin-left:20px;
   }
   .sharing_left{
    margin-left:33px;
    margin-top:20px;
   }
   .sharing_left_title{
    width: 397px;
    height: 72px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 32px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #9E9E9E;
   }
   .share_content_div{
    display: flex;
   }
   .share_discount{
    width: 168px;
    height: 72px;
    opacity: 1;

    font-family: Arial-BoldMT-Bold;
    font-size: 64px;
    font-weight: normal;
    line-height: 72px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #E71F19;
   }
   .share_price_div{
    margin-left:42px
   }
   .share_price{
    width: 91px;
    height: 44px;
    opacity: 1;

    font-family: Arial-BoldMT-Bold;
    font-size: 36px;
    font-weight: normal;
    line-height: 44px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #232424;
   }
   .share_origin_price{
    width: 131px;
    height: 18px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    text-transform: capitalize;
    letter-spacing: 0em;
    text-decoration: line-through;

    color: #9E9E9E;

    /* Typical price: $ */
    font-family: Arial Unicode MS;
   }
   .sharing_btn{
    width: 412px;
    height: 48px;
    border-radius: 10px;
    opacity: 1;

    /* 按钮配色 */
    background: #6898CE;
    margin-right: 17px;
    display: flex;
    justify-content: space-between;
   }
   .sharing_btn_tip{
    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 32px;
    letter-spacing: 0px;

    color: #FFFFFF;
    margin-left:127px;
    margin-top:7px;
   }
   .sharing_btn_icon{
    left: 160px;
    top: 6px;

    width: 21px;
    height: 26px;
    // transform: rotate(90deg);
    opacity: 1;

    // background: #FFFFFF;
    margin-right:125px;
    margin-top:7px;
    // margin-bottom: 13px;
    .img{
        width:100%;
        height: 100%;
    }
   }
   .commission_rank_div{
    width: 269px;
    height: 36px;
    opacity: 1;

    font-family: Arial Unicode MS;
    font-size: 32px;
    font-weight: normal;
    line-height: 36px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #9E9E9E;
    margin-top:69px;
    margin-left:21px;
   }
   .rank_div{
    left: 26px;
    top: 1093px;
    width: 702px;
    height: 446px;
    border-radius: 10px;
    opacity: 1;

    box-sizing: border-box;
    border: 1px solid #6898CE;
    margin-left:21px;
    margin-top:19px;
   }
   .row_item{
      margin-top:28px;
      display: flex;
      justify-content:space-around;
    //   max-width: 149px;
   }
   .row_char_mail{
    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 48px;
    text-transform: capitalize;
    letter-spacing: 0em; 
    color: #9E9E9E;
    max-width: 149px;
   }
   .row_title_user{
    min-width:149px;
   }
   .rank_title{
    width: 149px;
    height: 22px;
    opacity: 1;

    font-family: Arial-BoldMT-Bold;
    font-size: 18px;
    font-weight: normal;
    line-height: 22px;
    text-transform: capitalize;
    letter-spacing: 0em;

    color: #232424;
   }
  .row_char{
    width: 101px;
    height: 48px;
    opacity: 1;
        
    font-family: Arial Unicode MS;
    font-size: 24px;
    font-weight: normal;
    line-height: 48px;
    text-transform: capitalize;
    letter-spacing: 0em; 
    color: #9E9E9E;
  }
  
</style>