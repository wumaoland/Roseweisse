<template>
  <el-col class="header-bar-nav" :span="8">
    <ul class="header-nav-ul">
      <li class="has-child">
        <router-link to>我的美团</router-link>
        <ul class="header-nav-my">
          <li>
            <router-link to>我的订单</router-link>
          </li>
          <li>
            <router-link to>我的收藏</router-link>
          </li>
          <li>
            <router-link to>抵用券</router-link>
          </li>
          <li>
            <router-link to>账户设置</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to>手机APP</router-link>
      </li>
      <li class="has-child">
        <router-link to>商家中心</router-link>
        <ul class="header-nav-merchat">
          <li>
            <router-link to>美团餐饮商户中心</router-link>
          </li>
          <li>
            <router-link to>登录商家中心</router-link>
          </li>
          <li>
            <router-link to>美团智能收银</router-link>
          </li>
          <li>
            <router-link to>我想合作</router-link>
          </li>
          <li>
            <router-link to>手机免费开店</router-link>
          </li>
          <li>
            <router-link to>餐饮代理商招募</router-link>
          </li>
          <li>
            <router-link to>商家申请开票</router-link>
          </li>
          <li>
            <router-link to>免费合作美团排队</router-link>
          </li>
        </ul>
      </li>
      <li class="has-child">
        <router-link to>美团规则</router-link>
        <ul class="header-nav-rules">
          <li>
            <router-link to>规则中心</router-link>
          </li>
          <li>
            <router-link to>规则目录</router-link>
          </li>
          <li>
            <router-link to>规则评议院</router-link>
          </li>
        </ul>
      </li>
      <li class="has-child">
        <router-link to>网站导航</router-link>
        <div class="header-nav-site">
          <dl class="header-jiulv">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>民宿</dd>
            <dd>经济型酒店</dd>
            <dd>主题酒店</dd>
            <dd>商务酒店</dd>
            <dd>公寓</dd>
            <dd>豪华酒店</dd>
            <dd>客栈</dd>
            <dd>青年旅社</dd>
            <dd>度假酒店</dd>
            <dd>别墅</dd>
            <dd>农家院</dd>
          </dl>
          <dl class="header-meishi">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>自助餐</dd>
            <dd>火锅</dd>
            <dd>代金券</dd>
          </dl>
          <dl class="header-dianying">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热映电影口碑榜</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
            <dd>北美票房榜</dd>
            <dd>电影排行榜</dd>
          </dl>
          <dl class="header-app">
            <dt>手机应用</dt>
            <dd>
              <img
                src="~@/assets/img/header/meituan.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="~@/assets/img/header/waimai.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="~@/assets/img/header/mingsu.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="~@/assets/img/header/dianping.png"
                alt
              />
            </dd>
            <dd>
              <img
                src="~@/assets/img/header/maoyan.png"
                alt
              />
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </el-col>
</template>

<script>
export default {};
</script>