<template>
  <div class="router-container">
    <el-row class="cc-row-first">
      <el-col class="choose-by-province" :span="10">
        <span class="f-title">按省份选择：</span>
        <choose-box
          :title="'省份'"
          :content="provinceList"
          :contentShow="provinceShow"
          @change_active="changeProvinceActive"
        />
        <choose-box
          :title="'城市'"
          :content="cityList"
          :contentShow="cityShow"
          @change_active="changeCityActive"
        />
      </el-col>
      <el-col class="search" :span="8">
        <span>直接搜索：</span>
        <el-select
          v-model="searchList"
          filterable
          remote
          reserve-keyword
          placeholder="请输入城市中文或拼音"
          :remote-method="remoteMethod"
          :loading="loading"
        >
          <el-option
            v-for="item in cityList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="cc-row-second">
      <span class="hot-city">热门城市：</span>
      <a href class="link-city" v-for="(item,index) in hotCityList" :key="index">{{item.name}}</a>
    </el-row>
    <el-row class="cc-row-third">
      <span>最近访问：</span>
    </el-row>
    <el-row class="cc-row-firth">
      <div class="city-alpha">
        <span>按拼音首字母选择：</span>
        <a :href="`#city-${item}`" v-for="item in AtoZ" :key="item">{{item}}</a>
      </div>
      <div class="all-city" :id="`city-${item}`" v-for="item in AtoZ" :key="'city-'+item">
        <span class="alpha-title">{{item}}</span>
        <div class="citys">
          <a
            href
            v-for="propCity in allCity.filter(each => each.firstChar === item)"
            :key="propCity.id"
          >{{propCity.name}}</a>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
// bug列表
// 没选省份也可以选城市
// 城市位置不对

import axios from "@/api/api.js";
import chooseBox from "@/components/body_changeCity/chooseBox";

export default {
  data() {
    return {
      provinceList: [],
      cityList: [],
      provinceShow: false,
      cityShow: false,
      state: "",
      timeout: null,
      allCity: [],
      searchList: [{ value: 1, label: 1 }],
      hotCityList: [],
      AtoZ: []
    };
  },
  methods: {
    getAtoZ() {
      for (var i = 65; i <= 90; i++) {
        if (["I", "O", "U", "V"].indexOf(String.fromCharCode(i)) === -1) {
          this.AtoZ.push(String.fromCharCode(i));
        }
      }
    },
    changeProvinceActive(flag, currentProvince) {
      this.provinceShow = flag;
      if (flag) {
        this.cityShow = false;
      }
      if (currentProvince) {
        console.log(currentProvince.cityInfoList);
        this.cityList = currentProvince.cityInfoList;
      }
    },
    changeCityActive(flag) {
      this.cityShow = flag;
      if (flag) {
        this.provinceShow = false;
      }
    },
    getAlphaCity(alpha) {
      return this.allCity.filter(item => {
        item.firstChar === alpha;
      });
    }
  },
  computed: {},
  components: {
    chooseBox
  },
  created() {
    axios.getProvince().then(res => {
      this.provinceList = res.data.data;
      console.log(this.provinceList);
      this.provinceList.map(item => {
        this.allCity.push(...item.cityInfoList);
      });
      this.allCity.sort(function(a,b) {
        if(a.rank === 'S') {
          return -1
        }
        if(b.rank === 'S') {
          return 1
        }
        return a.rank > b.rank
      })
      console.log(this.allCity);
    });
    axios.getHotCity().then(res => {
      this.hotCityList = res.data.data;
    });
  },
  mounted() {
    this.searchList = this.provinceList.map(item => {
      return { value: `value:${item}`, label: `label:${$item}` };
    });
    this.getAtoZ();
  }
};
</script>

<style lang="scss">
@import "~@/assets/css/body/changeCity.scss";
</style>