<template>
  <view class="brand-wrap">
    <scroll-view scroll-y="true"
                 class="scroll "
                 enable-flex="true">
      <view v-for="(good,index) in goods"
            :key="index"
            class="scroll-item"
            @click="toGood(index)">
        <img :src="good.img">
        <h5 class="ell">{{good.title}}</h5>
        <p><text>停售时间：</text><text>{{good.stopTime}}</text></p>
        <view class="price-limit">
          <text class="price">￥{{good.price}}</text>
          <text class="limit">限购{{good.limit}}件</text>
        </view>
      </view>
    </scroll-view>
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
@import "./index";
</style>
