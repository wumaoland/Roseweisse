<template>
  <el-col class="header-bar-position" :span="8">
    <i class="el-icon-location-outline"></i>
    <span class="current-city">南京</span>
    <router-link class="change-city" to="changeCity">切换城市</router-link>
    <div class="near-citys">
      [
      <routerLink to="" class="city-guess">句容</routerLink>
      <routerLink to="" class="city-guess">仪征</routerLink>
      <routerLink to="" class="city-guess">马鞍山</routerLink>
      ]
    </div>
    <div class="header-register">
      <router-link class="log" to="login">立即登录</router-link>
      <router-link class="register" to="">注册</router-link>
    </div>
  </el-col>
</template>

<script>
export default {
  
}
</script>