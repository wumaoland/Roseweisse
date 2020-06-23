<template>
  <div class="page-default">
    <el-header class="header" height>
      <header-bar />
      <header-content />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer class="footer" height>
      <footer-link />
      <footer-copyright />
    </el-footer>
  </div>
</template>

<script>
import headerBar from "@/components/header/headerBar";
import headerContent from "@/components/header/headerContent";
import footerLink from "@/components/footer/footerLink";
import footerCopyright from "@/components/footer/footerCopyright";

export default {
  components: {
    headerBar,
    headerContent,
    footerLink,
    footerCopyright
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/header/headerNav.scss";
@import "~@/assets/css/header/headerContent.scss";
@import "~@/assets/css/footer/footerLink.scss";
@import "~@/assets/css/footer/footerCopyright.scss";
@import "~@/assets/css/body/bodyIndex.scss";
</style>