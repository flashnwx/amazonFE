<!--
 * @Author: niweixing
 * @Date: 2023-10-25 16:22:58
 * @LastEditors: niweixing
 * @LastEditTime: 2023-10-31 22:39:21
 * @Description: 
-->
<template>
  <div class="login_wrap">
    <img class="login_head_img" src="@/assets/images/login_png.png" alt="" />
    <div class="form_wrap">
      <div class="form_char">Email</div>
      <van-field
        class="login_input"
        v-model="userName"
        placeholder="Enter Your Email"
      >
        <template #left-icon>
          <van-icon name="envelop-o" color="#6898CE" />
        </template>
        <template #right-icon>
          <van-icon name="success" color="#6898CE" />
        </template>
      </van-field>

      <div class="form_char">password</div>
      <van-field
        class="login_input"
        v-model="password"
        :type="this.passwordType"
        placeholder="Enter Your Password"
      >
        <template #right-icon>
          <span class="solts" @click="switchPasswordType">
            <van-icon
              name="eye"
              v-if="passwordType === 'password'"
              color="#6898CE"
            />
            <van-icon name="closed-eye" v-else color="#6898CE" />
          </span>
        </template>
      </van-field>

      <!-- <div class="form_char" v-if="loginStatus == 2">Confirm Password</div>
      <van-field
        class="login_input"
        v-model="ConfirmPassword"
        :type="this.passwordType"
        placeholder="Enter Your Password"
        v-if="loginStatus == 2"
      >
        <template #right-icon>
          <span class="solts" @click="switchPasswordType">
            <van-icon
              name="eye"
              v-if="passwordType === 'password'"
              color="#5BC7F5"
            />
            <van-icon name="closed-eye" v-else color="#5BC7F5" />
          </span>
        </template>
      </van-field> -->

      <div class="forget_char">Forget password ？</div>
      <!-- <div class="privacy_check" v-if="loginStatus == 2">
        <van-radio-group v-model="checked">
          <van-radio checked-color="#5BC7F5">privacy policy</van-radio>
        </van-radio-group>

        <van-icon
          name="warning-o"
          size="15"
          color="#5BC7F5"
          class="privacy_icon"
          @click="goToPrivacy"
        />
      </div> -->

      <van-button class="login_btn" type="primary" @click="handleLogin">
        Login
      </van-button>
      <van-button class="regist_btn" type="primary" @click="handleRegist"
        >Sing up</van-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { loginApi, registApi } from "@/utils/request";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Toast } from "vant";
@Options({})
export default class Login extends Vue {
  userName: string = "";
  password: string = "";
  ConfirmPassword: string = "";
  passwordType: string = "password";
  checked: boolean = false;
  // 1 ,登录 2的时候是注册
  // loginStatus: number = 1;
  router = useRouter();
  // handleChangeStatus() {
  //   this.loginStatus = this.loginStatus == 1 ? 2 : 1;
  // }
  store: any = useStore();
  handleLogin() {
    loginApi({
      userName: this.userName,
      userPassword: this.password,
    }).then((res: any) => {
      this.router.push({ path: "/myspace" });
      console.log("登录数据", res);
      // if (res.code == 200) {
      //   // 把登录信息存储到本地
      //   localStorage.setItem("uInfo", JSON.stringify(res.body));
      //   this.store.commit("uInfo/setUInfo", res.body);
      //   this.router.push({ path: "/myspace" });
      // }
    });
    console.log("用户信息", this.userName, this.password);
  }
  handleRegist() {
    this.router.push({ path: "/regist" });
  }
  switchPasswordType() {
    // console.log(123);
    this.passwordType = this.passwordType === "password" ? "text" : "password";
  }
  goToPrivacy() {
    this.router.push({ path: "/privacy" });
  }
}
</script>
<style  type='less' scoped>
.login_wrap {
  position: relative;
  width: 750px;
  height: 1624px;
  opacity: 1;

  /* 背景色 */
  /* background: linear-gradient(180deg, #d9edfb 0%, #ffffff 100%); */
}
.login_head_img {
  /* position: absolute; */
  left: 0px;
  top: -51px;
  width: 750px;
  height: 556px;
  opacity: 1;

  /* 登录页头部配色 */
  /* background: linear-gradient(180deg, #5dc0f9 0%, #77d9fa 100%); */
}
.form_wrap {
  /* display: flex; */
  /* background: linear-gradient(180deg, #d9edfb 0%, #ffffff 100%); */
}
.form_char {
  left: 55px;
  top: 550px;
  /* width: 83px; */
  height: 36px;
  opacity: 1;

  font-family: Arial-BoldMT-Bold;
  font-size: 28px;
  font-weight: normal;
  line-height: 36px;
  text-transform: capitalize;
  letter-spacing: 0em;

  color: #232424;
  margin-top: 49px;
  margin-left: 55px;
}
.login_input {
  /* position: absolute; */
  /* left: 55px; */
  /* top: 611px; */
  width: 640px;
  height: 88px;
  border-radius: 10px;
  opacity: 1;

  background: #fefefe;

  /* 阴影 */
  box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
  margin-left: 55px;
  margin-top: 21px;
}
.forget_char {
  left: 470px;
  top: 923px;
  width: 213px;
  height: 32px;
  opacity: 1;

  font-family: Arial Unicode MS;
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  text-transform: capitalize;
  letter-spacing: 0em;

  color: #232424;
  margin-left: 470px;
  margin-top: 38px;
}
.login_btn {
  /* position: absolute; */
  left: 0px;
  top: 0px;
  width: 640px;
  height: 88px;
  border-radius: 10px;
  opacity: 1;

  /* 按钮配色 */
  background: #6898CE;
  border-color: #fff;
  margin-top: 156px;
  margin-left: 56px;
}
.regist_btn {
  left: 0px;
  top: 0px;
  width: 640px;
  height: 88px;
  border-radius: 10px;
  opacity: 1;

  background: #ffffff;
  border-color: #fff;
  /* 阴影 */
  box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
  margin-top: 52px;
  margin-left: 56px;
  color: #6898ce;
}
</style>