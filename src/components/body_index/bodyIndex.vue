<template>
  <div class="body-index-wrapper">
    <el-row class="banner-container">
      <el-col class="banner-left clearfix" :span="5">
        <dl class="banner-all-categories" @mouseleave="ddLeave">
          <dt class="banner-left-title">全部分类</dt>
          <dd
            class="banner-shops-container"
            v-for="(items,index) in allCategories"
            :key="index"
            @mouseenter="ddEnter(items)"
          >
            <i class="iconfont" :class="items.icon" color="yellow"></i>
            <span>{{items.name}}</span>
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
        <div
          class="banner-shops-content"
          v-if="activeDD"
          @mouseenter="shopsEnter"
          @mouseleave="shopsLeave"
        >
          <template v-for="(items,index) in activeDD.children">
            <div class="shops-title" :key="index">
              <h4>{{items.name}}</h4>
              <div class="more">
                <span>更多</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <a href v-for="(prop,index) in items.children" :key="prop+'_'+index">{{prop}}</a>
          </template>
        </div>
      </el-col>
      <el-col class="banner-right clearfix" :span="19">
        <el-row class="right-title">
          <a class="waimai" href>美团外卖</a>
          <a class="dianying" href>猫眼电影</a>
          <a class="jiudian" href>美团酒店</a>
          <a class="mingsu" href>民宿／公寓</a>
          <a class="shangjia" href>商家入驻</a>
          <a class="gongyi" href>美团公益</a>
        </el-row>
        <el-row class="banner-row">
          <div class="silder">
            <el-carousel height="240px">
              <el-carousel-item v-for="item in silderImg" :key="item">
                <img :src="item" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <a href>
            <div class="pic right-pic1"></div>
          </a>
          <div class="login-container">
            <div class="head-img">
              <img src="~@/assets/img/body/avatar.jpg" alt />
            </div>
            <div class="user-name">Hi!你好</div>
            <el-button round>注册</el-button>
            <el-button round>立即登录</el-button>
          </div>
        </el-row>
        <el-row class="banner-row">
          <a href>
            <div class="pic right-pic2"></div>
          </a>
          <a href>
            <div class="pic right-pic3"></div>
          </a>
          <a href>
            <div class="pic right-pic4"></div>
          </a>
          <div class="download-app">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
            <span class="app-name">美团APP手机版</span>
            <span class="app-intr">
              <span>1元起</span>
              <span>吃喝玩乐</span>
            </span>
          </div>
        </el-row>
      </el-col>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCategories: [
        {
          name: "美食",
          icon: "iconkuaizishaozi",
          children: [
            {
              name: "美食",
              children: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜",
                "鲁菜"
              ]
            }
          ]
        },
        {
          name: "外卖",
          icon: "iconwaimai",
          children: [
            {
              name: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          name: "酒店",
          icon: "iconjiudian",
          children: [
            {
              name: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        },
        {
          name: "民宿",
          icon: "iconminsu",
          children: [
            {
              name: "热门城市",
              children: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "武汉",
                "厦门",
                "长沙",
                "青岛",
                "深圳",
                "天津",
                "苏州"
              ]
            },
            {
              name: "热门房源",
              children: ["复式Loft", "别墅"]
            }
          ]
        },
        {
          name: "猫眼电影",
          icon: "iconArtboard-copy",
          children: [
            {
              name: "热门影院",
              children: [
                "幸福蓝海国际影城",
                "万达影城",
                "金逸影城",
                "卢米埃影城",
                "中影国际影城",
                "横店电影城",
                "星美国际影城",
                "海上国际影城",
                "大地影院",
                "耀莱成龙国际影城"
              ]
            }
          ]
        },
        {
          name: "机票 / 火车票",
          icon: "iconhuochepiao",
          children: [
            {
              name: "机票",
              children: ["国内机票", "国际/港澳台机票"]
            },
            {
              name: "火车票",
              children: ["火车票"]
            }
          ]
        },
        {
          name: "休闲娱乐 / KTV",
          icon: "iconKTV",
          children: [
            {
              name: "休闲娱乐",
              children: [
                "足疗按摩",
                "洗浴/汗蒸",
                "酒吧",
                "密室逃脱",
                "轰趴馆",
                "茶馆",
                "私人影院",
                "DIY手工坊",
                "采摘/农家乐",
                "网吧网咖",
                "游乐游艺",
                "VR桌面游戏",
                "真人CS",
                "棋牌室",
                "其他玩乐"
              ]
            },
            {
              name: "KTV",
              children: ["KTV"]
            }
          ]
        },
        {
          name: "生活服务",
          icon: "iconshenghuofuwu",
          children: [
            {
              name: "生活服务",
              children: [
                "衣物/皮具洗护",
                "家政",
                "搬家运输",
                "送水",
                "充值缴费",
                "服饰/鞋包养护",
                "开锁换锁",
                "居家维修",
                "管道疏通",
                "家电维修清洗",
                "电脑维修",
                "手机维修",
                "证件照/肖像摄影",
                "照片冲印/图文文印",
                "商务服务/法律服务",
                "文化传媒机构",
                "成人用品/情趣用品"
              ]
            }
          ]
        },
        {
          name: "丽人 / 美发 / 医学美容",
          icon: "iconliren",
          children: [
            {
              name: "丽人",
              children: [
                "美发",
                "美甲美睫",
                "美容美体",
                "医学美容",
                "瑜伽舞蹈",
                "瘦身纤体",
                "韩式定妆",
                "祛痘",
                "纹身",
                "化妆品",
                "养发"
              ]
            }
          ]
        },
        {
          name: "结婚 / 婚纱摄影 / 婚宴",
          icon: "iconzuanshi",
          children: [
            {
              name: "结婚",
              children: [
                "婚纱摄影",
                "旅拍",
                "个性写真",
                "婚宴",
                "婚庆公司",
                "婚纱礼服",
                "西服定制",
                "婚戒首饰",
                "婚车租赁",
                "司仪主持",
                "彩妆造型",
                "婚礼跟拍",
                "婚礼小礼品",
                "更多婚礼服务"
              ]
            }
          ]
        },
        {
          name: "亲子 / 儿童乐园 / 幼教",
          icon: "iconqinzi",
          children: [
            {
              name: "儿童乐园",
              children: ["婴儿游泳", "其它亲子游乐"]
            },
            {
              name: "幼儿教育",
              children: [
                "早教中心",
                "少儿英语",
                "智力开发",
                "托班/幼儿园",
                "幼儿教育",
                "其他幼儿教育"
              ]
            },
            {
              name: "亲子摄影",
              children: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"]
            },
            {
              name: "孕产护理",
              children: [
                "月子会所",
                "产后恢复",
                "妇幼医院",
                "孕产用品",
                "开奶催乳",
                "月嫂",
                "亲子购物",
                "宝宝派对",
                "亲子服务"
              ]
            }
          ]
        },
        {
          name: "运动健身 / 健身中心",
          icon: "iconjianshen",
          children: [
            {
              name: "运动健身",
              children: [
                "健身中心",
                "武术场馆",
                "游泳馆",
                "羽毛球馆",
                "溜冰场",
                "射箭馆",
                "篮球场",
                "网球馆",
                "台球馆",
                "乒乓球",
                "足球场",
                "高尔夫场",
                "保龄球馆",
                "体育场馆",
                "马术场",
                "壁球馆",
                "更多运动"
              ]
            }
          ]
        },
        {
          name: "家装 / 建材 / 家居",
          icon: "iconjiazhuang",
          children: [
            {
              name: "装修设计",
              children: ["半包装修", "全包装修", "清包装修"]
            },
            {
              name: "装修建材",
              children: [
                "地板",
                "瓷砖石材",
                "橱柜",
                "灯饰照明",
                "厨卫洁具",
                "油漆涂料",
                "集成吊顶",
                "墙纸墙艺",
                "门窗",
                "木材板材",
                "家用五金",
                "电工电料",
                "楼梯",
                "管材管件"
              ]
            },
            {
              name: "家具家居",
              children: [
                "家具",
                "床上用品/家纺",
                "家居饰品",
                "厨具餐具",
                "智能家居"
              ]
            },
            {
              name: "家装卖场",
              children: ["建材卖场", "家居卖场", "灯饰卖场"]
            }
          ]
        },
        {
          name: "学习培训 / 音乐培训",
          icon: "iconshijuanguanli",
          children: [
            {
              name: "音乐培训",
              children: [
                "钢琴",
                "吉他",
                "小提琴",
                "古筝",
                "架子鼓",
                "声乐",
                "其他音乐培训"
              ]
            },
            {
              name: "职业技术",
              children: [
                "美容化妆",
                "会计",
                "IT",
                "厨艺",
                "管理培训",
                "摄影培训",
                "司法考试",
                "公务员培训",
                "其他职业培训"
              ]
            },
            {
              name: "外语培训",
              children: [
                "英语",
                "日语",
                "韩语",
                "法语",
                "德语",
                "汉语",
                "俄语",
                "西班牙语",
                "其他外语"
              ]
            },
            {
              name: "美术培训",
              children: ["绘画", "书法", "其他美术"]
            }
          ]
        },
        {
          name: "医疗健康 / 宠物 / 爱车",
          icon: "iconyiliao",
          children: [
            {
              name: "医疗健康",
              children: [
                "医院",
                "齿科口腔",
                "体检中心",
                "药店",
                "中医",
                "其他健康服务"
              ]
            },
            {
              name: "爱车",
              children: [
                "洗车",
                "租车",
                "加油站",
                "维修保养",
                "驾校",
                "汽车美容",
                "陪练",
                "汽车用品",
                "停车场",
                "汽车保险",
                "4S店/汽车销售",
                "更多汽车服务",
                "机油保养",
                "汽车报价",
                "二手车广告",
                "驾校交警队",
                "汽车改装",
                "汽车配件"
              ]
            },
            {
              name: "宠物",
              children: ["宠物店", "宠物医院"]
            }
          ]
        },
        {
          name: "酒吧 / 密室逃脱",
          icon: "iconjiuba",
          children: [
            {
              name: "玩乐",
              children: [
                "KTV",
                "酒吧",
                "密室逃脱",
                "游乐游艺",
                "网吧",
                "网咖",
                "私人影院",
                "DIY手工坊",
                "桌面游戏",
                "采摘/农家乐",
                "棋牌室",
                "轰趴馆",
                "真人CS",
                "VR",
                "其他玩乐"
              ]
            }
          ]
        }
      ],
      activeDD: null,
      timer: null,
      silderImg: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ]
    };
  },
  methods: {
    ddEnter(e) {
      this.activeDD = e;
    },
    ddLeave() {
      this.timer = setTimeout(() => {
        this.activeDD = null;
      }, 100);
    },
    shopsEnter() {
      clearTimeout(this.timer);
    },
    shopsLeave() {
      this.activeDD = null;
    }
  }
};
</script>
