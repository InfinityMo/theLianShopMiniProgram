<template>
  <view class="brand-wrap">
    <ul>
      <li v-for="(good,index) in goods"
          :key="index"
          @click="toGood(index)">
        <img :src="good.img">
        <h5 class="ell">{{good.title}}</h5>
        <p><text>停售时间：</text><text>{{good.stopTime}}</text></p>
        <view class="price-limit">
          <text class="price">￥{{good.price}}</text>
          <text class="limit">限购{{good.limit}}件</text>
        </view>
      </li>
    </ul>
  </view>
</template>
<script>
export default {
  data () {
    return {
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
        },
        {
          img: '//img.alicdn.com/bao/uploaded/i1/845001562/O1CN01LMb0k21NPRIhD9tnm_!!0-item_pic.jpg_180x180.jpg',
          title: 'innisfree/悦诗风吟新绿茶精萃柔肤水补水保湿控油 ',
          stopTime: '2020-01-07 18:00',
          price: '299',
          limit: 5
        },
        {
          img: '//img.alicdn.com/bao/uploaded/i1/845001562/O1CN01lAklSb1NPRIZK170y_!!0-item_pic.jpg_180x180.jpg',
          title: 'innisfree/悦诗风吟火山岩泥调理爽肤水控油清洁毛孔',
          stopTime: '2020-01-07 18:00',
          price: '299',
          limit: 5
        },
        {
          img: '//img.alicdn.com/bao/uploaded/i3/845001562/O1CN01VOscKe1NPRId1CW7Y_!!0-item_pic.jpg_180x180.jpg',
          title: 'innisfree/悦诗风吟绿茶泡沫洁面乳女温和控油洗面奶',
          stopTime: '2020-01-07 18:00',
          price: '299',
          limit: 5
        },
        {
          img: '//img.alicdn.com/bao/uploaded/i1/845001562/O1CN01tnrrnT1NPRId18gkv_!!0-item_pic.jpg_180x180.jpg',
          title: 'nnisfree/悦诗风吟九重臻致修护调理水紧致提拉补水',
          stopTime: '2020-01-07 18:00',
          price: '299',
          limit: 5
        }
      ]
    }
  },
  onLoad (options) {
    uni.setNavigationBarTitle({
      title: options.name
    })
  },
  methods: {
    toGood (id) {
      uni.navigateTo({
        url: '/pages/good/index?good=' + id,
      })
    }
  }
}
</script>


<style lang="scss" scoped>
// @import '@/common/style/brands.scss'
// @import "~@/common/styles/brands.css"
// @import  './index.scss'
.ell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.brand-wrap {
  padding: 10px 12px 3px 12px;
  background-color: #e5e5e5;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      // width: calc(50% - 7px);
      width: 49%;
      padding: 30px 12px 10px 12px;
      margin-bottom: 7px;
      background-color: #fff;
      border-radius: 5px;
      box-sizing: border-box;
      img {
        width: 147px;
        height: 120px;
        margin-bottom: 25px;
      }
      h5 {
        margin-bottom: 6px;
        color: #333;
        line-height: 13px;
        font-size: 13px;
      }
      p {
        margin-bottom: 12px;
        font-size: 11px;
        line-height: 11px;
        color: #777;
      }
      .price-limit {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
}
</style>
