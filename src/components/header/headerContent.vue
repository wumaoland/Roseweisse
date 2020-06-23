<template>
  <el-row class="header-content">
    <div class="header-content-wrapper">
      <header-content-title />
      <header-content-search />
    </div>
  </el-row>
</template>

<script>
import headerContentTitle from "./headerContentTitle";
import headerContentSearch from "./headerContentSearch";
export default {
  components: {
    headerContentTitle,
    headerContentSearch
  }
};
</script>