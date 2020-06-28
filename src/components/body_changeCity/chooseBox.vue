<template>
  <div class="choose-container" @click.stop="inputFocus">
    <div class="input">
      <span>{{ showTitle }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="content" v-if="contentShow">
      <div class="content-title">{{ title }}</div>
      <div class="content-details">
        <div class="cao" v-for="num in contentLength" :key="num">
          <span
            :class="{active: activeSelect === item.provinceName || activeSelect === item.name}"
            v-for="item in content.slice(num*12-12,num*12)"
            :key="item.provinceCode || item.id"
            @click.stop="changeCurrentCity(item)"
          >{{item.provinceName | filter(item.name) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "contentShow"],
  data() {
    return {
      showTitle: this.title,
      activeSelect: null,
      contentList: this.content
    };
  },
  methods: {
    inputFocus() {
      this.$emit("change_active", true);
    },
    inputUnfocus() {
      this.$emit("change_active", false);
    },
    changeCurrentCity(currentCity) {
      this.activeSelect = this.showTitle = currentCity.provinceName || currentCity.name;
      this.$emit("change_active", false, currentCity);
    }
  },
  computed: {
    contentLength: function() {
      return Math.ceil(this.content.length / 12);
    }
  },
  watch: {
    content: function(newV, oldV) {
      this.contentList = JSON.parse(JSON.stringify(newV));
    }
  },
  filters: {
    filter: function(value, name) {
      if(!value) {
        return name
      }
      return value
    }
  },
  mounted() {
    this.globalClick(this.inputUnfocus);
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/body/chooseBox.scss";
</style>