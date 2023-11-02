<!--
 * @Author: niweixing
 * @Date: 2023-10-25 16:22:58
 * @LastEditors: niweixing
 * @LastEditTime: 2023-10-31 22:50:24
 * @Description: 
-->
<template>
  <div class="login_wrap">
    <img class="login_head_img" src="@/assets/images/signuphead.png" alt="" />
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

      <div class="form_char">Confirm Password</div>
      <van-field
        class="login_input"
        v-model="ConfirmPassword"
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

      <div class="privacy_check">
        <van-radio-group v-model="checked">
          <van-radio checked-color="#6898CE">privacy policy</van-radio>
        </van-radio-group>

        <van-icon
          name="warning-o"
          size="15"
          color="#6898CE"
          class="privacy_icon"
          @click="goToPrivacy"
        />
      </div>

      <van-button class="realy_regist_btn" type="primary" @click="handleRegist"
        >Sing up</van-button
      >
    </div>
    <p class="siginup_to_login">
      already have an account？ <a href="/login" class="signinUrl">sign in</a>
    </p>
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
  router = useRouter();

  store: any = useStore();
  handleLogin() {
    loginApi({
      userName: this.userName,
      userPassword: this.password,
    }).then((res: any) => {
      console.log("登录数据", res);
      if (res.code == 200) {
        // 把登录信息存储到本地
        localStorage.setItem("uInfo", JSON.stringify(res.body));
        this.store.commit("uInfo/setUInfo", res.body);
        this.router.push({ path: "/" });
      }
    });
    console.log("用户信息", this.userName, this.password);
  }
  handleRegist() {
    registApi({
      userName: this.userName,
      userPassword: this.password,
    }).then((res: any) => {
      console.log("注册信息", res);
      if (res.code === 200) {
        Toast("注册成功");
        this.router.push({ path: "/login" });
      }
    });
    console.log("用户信息", this.userName, this.password);
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
}
.login_head_img {
  left: 0px;
  top: -51px;
  width: 750px;
  height: 556px;
  opacity: 1;
}
.form_char {
  left: 55px;
  top: 550px;
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
  color: #6898CE;
}
.realy_regist_btn {
  left: 0px;
  top: 0px;
  width: 640px;
  height: 88px;
  border-radius: 10px;
  opacity: 1;

  background: #6898CE;
  border-color: #fff;
  /* 阴影 */
  box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.2);
  margin-top: 104px;
  margin-left: 56px;
  color: #ffffff;
}
.siginup_to_login {
  font-family: OPPOSans;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  text-transform: capitalize;
  letter-spacing: 0em;
  text-decoration: underline;
  font-feature-settings: "kern";
  text-align: center;
  margin-top: 34px;
}
.privacy_check {
  margin-left: 58px;
  margin-top: 54.5px;
  display: flex;
}
.privacy_icon {
  margin-left: 12px;
}
.signinUrl{
  color: #6898CE;
}
</style>