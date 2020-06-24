<template>
  <div class="maoyan-container">
    <div class="title">
      <dl class="title-left">
        <dt>{{info.title}}</dt>
        <dd v-for="(props,index) in info.childrenTitle" :key="index">
          <span>{{props}}</span>
          <i class="el-icon-caret-top"></i>
        </dd>
      </dl>
      <div class="title-right">
        <span class="more">全部</span>
        <i v-if="activeTag === info.title" class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="content">
      <div class="silder" :class="{'to-left': silderToLeft, 'to-right':silderToRight}">
        <div class="each-film" v-for="(props,index) in info.content" :key="index">
          <a href>
            <img :src="props.cover" />
            <div class="film-info">
              <div class="want-watch">
                <span class="hot">{{props.hot}}</span>
                <span>人想看</span>
              </div>
              <div class="name">{{props.name}}</div>
            </div>
          </a>
        </div>
      </div>
      <div class="left-icon" @click="setSilderPosition('toLeft')">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="right-icon" @click="setSilderPosition('toRight')">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      silderPosition: "left",
      silderToLeft: false,
      silderToRight: false,
      activeTag: "即将上映",
      info: {
        title: "猫眼电影",
        childrenTitle: ["即将上映"],
        content: [
          {
            cover:
              "//p0.meituan.net/movie/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg@267w_371h_1e_1c",
            hot: 1940,
            name: "沉香"
          },
          {
            cover:
              "//p0.meituan.net/movie/f1210412ff52740cfbc3cca8212834bd406835.jpg@267w_371h_1e_1c",
            hot: 750,
            name: "致命复活"
          },
          {
            cover:
              "//p0.meituan.net/movie/a19913517ec4dd7b1e8c56a199ceaa4280560.jpg@267w_371h_1e_1c",
            hot: 12550,
            name: "天下无拐"
          },
          {
            cover:
              "//p1.meituan.net/movie/eb37c5b78ec0c14aaad707700fcc1443390529.jpg@267w_371h_1e_1c",
            hot: 2725,
            name: "恋上美人鱼"
          },
          {
            cover:
              "//p1.meituan.net/movie/ccea56ae49249d482be5997aa98e94691344390.jpg@267w_371h_1e_1c",
            hot: 62664,
            name: "拆弹专家2"
          },
          {
            cover:
              "//p0.meituan.net/movie/fd0e0e48f13236ed671f3df0e4ba7429200080.jpg@267w_371h_1e_1c",
            hot: 6479,
            name: "我想静静"
          },
          {
            cover:
              "//p0.meituan.net/movie/644b66958ccbeb8bac4955c52864c8881471793.jpg@267w_371h_1e_1c",
            hot: 24664,
            name: "北平会馆"
          },
          {
            cover:
              "//p0.meituan.net/moviemachine/331c70099c5728d53694009426fb84ba165027.jpg@267w_371h_1e_1c",
            hot: 8886,
            name: "通往春天的列车"
          },
          {
            cover:
              "//p1.meituan.net/movie/7d4e340665573384faa2f2e34b705b73977180.jpg@267w_371h_1e_1c",
            hot: 23753,
            name: "赤狐书生"
          },
          {
            cover:
              "//p0.meituan.net/movie/d8bba55fde322a809b6eeb95ddbffec82554093.jpg@267w_371h_1e_1c",
            hot: 10411,
            name: "哪吒重生"
          }
        ]
      }
    };
  },
  methods: {
    setSilderPosition(dir) {
      if (this.silderPosition === "right" && dir === "toLeft") {
        this.silderToRight = false;
        this.silderToleft = true;
        this.silderPosition = "left";
      } else if (this.silderPosition === "left" && dir === "toRight") {
        this.silderToleft = false;
        this.silderToRight = true;
        this.silderPosition = "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/body/maoyanContainer.scss";
</style>