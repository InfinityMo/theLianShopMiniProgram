<template>
  <scroll-view scroll-y="true">
    <view class="container">
      <swiper class="swiper"
              :autoplay="swiperOption.autoplay"
              :interval="swiperOption.interval"
              :duration="swiperOption.duration">
        <swiper-item v-for="(item,index) in swiperData"
                     :key="index">
          <view class="swiper-item uni-bg-red">
            <image :src="item.img"></image>
          </view>
        </swiper-item>
      </swiper>
      <!-- 品牌区域 -->
      <ul class="brand-wrap">
        <li v-for="(item,index) in brand"
            :key="index"
            @click="toBrand(item.name)">
          <img :src="item.img">
          <p>{{item.name}}</p>
        </li>
      </ul>
      <view class="sell-tip">
        <text class="title">本次售卖</text>
        <label>本次共售卖12件商品，欲购从速</label>
      </view>
      <ul class="good-wrap">
        <li v-for="(good,index) in goods"
            :key="index"
            @click="toGood(index)">
          <view class="img-wrap"><img :src="good.img"></view>
          <view class="info">
            <h5 class="ell">{{good.title}}</h5>
            <p><label>停售时间：</label><text>{{good.stopTime}}</text></p>
            <view class="price-limit">
              <text class="price">￥{{good.price}}</text>
              <text class="limit">限购{{good.limit}}件</text>
            </view>
          </view>
        </li>
      </ul>
    </view>
  </scroll-view>

</template>
<script>
export default {
  data () {
    return {
      swiperData: [{
        img: require('@/static/img/base/banner.png')
      }],
      brand: [{
        name: '悦诗风吟',
        img: require('@/static/img/brands/ysfy.png')
      }, {
        name: '花王',
        img: require('@/static/img/brands/hw.png')
      }, {
        name: '玫珂菲',
        img: require('@/static/img/brands/mkf.png')
      }, {
        name: '丝塔芙',
        img: require('@/static/img/brands/stf.png')
      }, {
        name: '摩洛哥油',
        img: require('@/static/img/brands/mlgy.png')
      }],
      swiperOption: {
        autoplay: true,
        interval: 2000,
        duration: 500
      },
      goods: [
        {
          img: 'http://img.alicdn.com/bao/uploaded/i2/845001562/O1CN01i5TdJF1NPRIaSVkBF_!!845001562.jpg',
          title: '悦诗风吟洗护套装（水乳、护肤）',
          stopTime: '2020-01-03 18:00',
          price: '276',
          limit: 5
        },
        {
          img: '//img.alicdn.com/bao/uploaded/i4/845001562/O1CN01oIk1g91NPRIK8xxCE_!!845001562.jpg',
          title: '悦诗风吟明星洁面乳套装补水保湿控油清洁毛孔洗面奶',
          stopTime: '2020-01-07 18:00',
          price: '299',
          limit: 5
        }
      ]
    }
  },
  onLoad () {

  },
  methods: {
    toBrand (name) {
      uni.navigateTo({
        url: '/pages/brand/index?name=' + name,
      })
    },
    toGood (id) {
      uni.navigateTo({
        url: '/pages/good/index',
      })
    },
    testApi () {
      this.$request.post('/shopSelect', {
        pageNum: 1,
        pageSize: 5,
        RowGuid: ''
      }).then(res => {
        uni.showToast({
          title: res
        })
      }).catch(err => {
        uni.showToast({
          title: err
        })
      })
    }
  }
}
</script>


<style lang="scss" scoped>
// @import '@/common/style/brands.scss'
// @import "~@/common/styles/brands.css"
// @import  './index.scss'
page {
  background-color: #e5e5e5;
}
.container {
  padding-bottom: 10px;
  background-color: #e5e5e5;
}
.swiper {
  // width: 100%;
  // height: 164px;

  image {
    width: 100%;
    height: 164px;
  }
}
.brand-wrap {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  li {
    width: 20%;
    height: 55px;
    padding: 10px 5px;
    line-height: 1;
    text-align: center;
    img {
      width: 44px;
      height: 35px;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
      color: #333333;
    }
  }
}
.sell-tip {
  display: flex;
  align-items: center;
  margin: 0 10px 10px 10px;
  .title {
    font-size: 15px;
    line-height: 22px;
    color: #333;
  }
  label {
    margin-left: 6px;
    font-size: 12px;
    line-height: 18px;
    color: #777;
  }
}
.good-wrap {
  li {
    display: flex;

    padding: 20px 12px;
    margin: 0 12px 10px 12px;
    border-radius: 5px;
    background-color: #fff;
    .img-wrap {
      width: 147px;
      height: 120px;
      margin-right: 17px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      width: calc(100% - 164px);
    }
    h5 {
      margin-bottom: 10px;
      font-size: 13px;
      line-height: 13px;
      color: #333333;
    }
    p {
      font-size: 11px;
      color: #777;
    }
    .price-limit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 47px;
      .price {
        font-weight: 500;
        font-size: 13px;
        color: #f04f2d;
      }
      .limit {
        font-size: 11px;
        color: #777;
      }
    }
  }
}
</style>
