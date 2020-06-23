<template>
  <el-col class="header-content-search" :span="10">
    <el-input
      v-model="input"
      placeholder="搜索商家或地点"
      @focus="() => headerInput(true)"
      @blur="() => headerInput(false)"
    ></el-input>
    <el-button icon="el-icon-search" circle></el-button>
    <div class="hot-search" v-if="hotSearchShow">
      <dl>
        <dt>热门搜索</dt>
        <dd v-for="(params,index) in hotSearch" :key="index">{{ params }}</dd>
      </dl>
    </div>
    <div class="guess-search" v-if="guessSearchShow">
      <ul>
        <li v-for="(params,index) in guessSearch" :key="index">{{ params }}</li>
      </ul>
    </div>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      inputFocus: false,
      hotSearch: [
        "肖战偷袭珍珠港",
        "肖战偷特朗普内裤",
        "肖战偷喝孙杨尿检样本",
        "肖战逃课"
      ],
      guessSearch: [
        "肖战偷袭珍珠港",
        "肖战偷特朗普内裤",
        "肖战偷喝孙杨尿检样本",
        "肖战逃课"
      ]
    };
  },
  computed: {
    hotSearchShow: function() {
      return this.inputFocus && this.input === "";
    },
    guessSearchShow: function() {
      return this.inputFocus && this.input;
    }
  },
  methods: {
    headerInput(flag) {
      setTimeout(() => {
        this.inputFocus = flag;
      }, 100);
    }
  }
};
</script>