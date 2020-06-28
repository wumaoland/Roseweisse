<template>
  <div class="login-page">
    <header class="clearfix">
      <router-link class="clearfix" to="index"></router-link>
    </header>
    <div class="body-wrapper">
      <div class="body">
        <div class="pic-wrapper">
          <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
        </div>
        <div class="login-section">
          <form id="pc-login" action @submit.prevent="formSubmit">
            <div
              class="validate-info"
              :style="{visibility: failMsg === '' ? 'hidden' : 'visible'}"
            >{{failMsg}}</div>
            <div class="login-title">
              <span class="login-by-account">账号登录</span>
              <span class="login-by-mobile">
                手机动态码登录
                <i class="el-icon-mobile-phone"></i>
              </span>
            </div>
            <div class="input-account">
              <span class="country-area">
                <span>+86</span>
                <i class="el-icon-arrow-right"></i>
              </span>
              <input type="text" id="phone-input" placeholder="手机号" name="phone" value />
            </div>
            <div class="input-password">
              <i class="el-icon-unlock"></i>
              <input type="password" id="password-input" placeholder="密码" name="password" value />
            </div>
            <div class="forget">
              <a href>忘记密码？</a>
            </div>
            <div class="button-login">
              <input type="submit" id="input" name="commit" value="登录" />
            </div>
            <div class="register">
              还没有账号？
              <a href>免费注册</a>
            </div>
          </form>
          <div class="other-account">
            <h3 class="title-wrapper">
              <span class="title">用合作网站账号登录</span>
            </h3>
            <div class="qq-and-sina">
              <span class="qq"></span>
              <span class="sina"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <el-row class="info-nav">
        <a href>关于美团</a>
        <span>|</span>
        <a href>加入我们</a>
        <span>|</span>
        <a href>商家入驻</a>
        <span>|</span>
        <a href>帮助中心</a>
        <span>|</span>
        <a href>美团手机版</a>
      </el-row>
      <el-row class="copyright">
        <p>
          ©
          <span>2020</span>
          <a href>美团网团购</a>
          <span>meituan.com</span>
          <a href>京ICP证070791号</a>
          <span>京公网安备11010502025545号</span>
        </p>
      </el-row>
    </footer>
  </div>
</template>

<script>
import api from "@/api/api.js";
import { LOGIN_IN } from "@/store/mutation-types";
export default {
  data() {
    return {
      failMsg: ""
    };
  },
  methods: {
    formSubmit(e) {
      api.login(e.target[0].value, e.target[1].value).then(res => {
        if (res.status !== 200) {
          return;
        }
        if (res.data.status === "fail") {
          this.failMsg = res.data.msg;
        } else {
          this.$store.commit({
            type: LOGIN_IN,
            userName: res.data.userName
          });
          this.$router.push({
            path: "/index"
          });
        }
      });
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/login/login.scss";
</style>