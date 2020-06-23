<template>
  <el-row class="header-bar">
    <header-bar-position />
    <header-bar-nav />
  </el-row>
</template>

<script>
import headerBarPosition from './headerBarPosition'
import headerBarNav from './headerBarNav'
export default {
  components: {
    headerBarPosition,
    headerBarNav
  }
}
</script>