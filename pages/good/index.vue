<template>
  <view class="good-wrap">
    <view class="good-baseinfo">
      <swiper class="swiper"
              :autoplay="swiperOption.autoplay"
              :interval="swiperOption.interval"
              :duration="swiperOption.duration">
        <swiper-item class="swiper-item-wrap"
                     v-for="(item,index) in swiperData"
                     :key="index">
          <view class="swiper-item uni-bg-red">
            <image :src="item.img"></image>
          </view>
        </swiper-item>
      </swiper>
      <h5 class="title">{{good.title}}</h5>
      <view class="info">
        <view class="price-limit">
          <label><text>￥</text>{{good.price}}</label>
          <text class="limit">限购{{good.limit}}件</text>
        </view>
        <view class="time">停售时间：{{good.stopTime}}</view>
      </view>
    </view>
    <view class="info-detail">
      <h4>参数详情</h4>
      <ol>
        <li><label>品牌：</label><text>{{infoDateil.brand}}</text></li>
        <li><label>类型：</label><text>{{infoDateil.type}}</text></li>
        <li><label>保质期：</label><text>{{infoDateil.guarantee}}</text></li>
        <li><label>限购数量：</label><text>{{infoDateil.limit}}</text></li>
        <li><label>商品描述：</label><text>{{infoDateil.remark}}</text></li>
      </ol>
    </view>
    <view class="imgs-wrap">
      <view v-for="(img,index) in imgsArr"
            :key="index">
        <image :src="img"></image>
      </view>
    </view>
    <!-- buy -->
    <view class="car-wrap">
      <view class="flex-item-center">
        <view class="home-car home"
              @click="toHome">
          <img src='../../static/img/base/good-home.png'>
          <p>首页</p>
        </view>
        <view class="home-car"
              @click="toCar">
          <img src='../../static/img/base/good-car.png'>
          <p>购物车</p>
        </view>
      </view>
      <view class="flex-item-center">
        <view class="btn buy-car"
              @click="joinCar">加入购物车</view>
        <view class="btn buy"
              @click="buy">立即购买</view>
      </view>
    </view>
    <echone-sku :show="popupShow"
                :skuType="skuType"
                v-if="popupShow"
                :defaultSelectIndex="defaultSelectIndex"
                :specificationsObj="specificationsObj"
                @close="handleClose"
                @confirm="handleConfirm">
    </echone-sku>
  </view>
</template>
<script>
import echoneSku from '@/components/echone-sku/echone-sku.vue'
export default {
  components: {
    echoneSku,
  },
  data () {
    return {
      skuType: 1,
      popupShow: false,
      defaultSelectIndex: -1,
      specificationsObj: {
        id: 1,
        limit: 5,
        num: 1,
        brand: '悦诗风吟',
        goodTitle: '悦诗风吟洁面护肤面膜套装双重功效洗护一体',
        brandImg: require('@/static/img/brands/ysfy.png'),
        img: 'http://img.alicdn.com/bao/uploaded/i2/845001562/O1CN01i5TdJF1NPRIaSVkBF_!!845001562.jpg',
        stopTime: '2020-12-12 18:00',
        parameter: [{
          type: '保湿系列/10片装',
          stock: 200,
          price: 188
        }, {
          type: '保湿系列/5片装',
          stock: 200,
          price: 105
        }, {
          type: '美白系列/10片装',
          stock: 200,
          price: 208
        }, {
          type: '美白系列/5片装',
          stock: 200,
          price: 115
        }, {
          type: '修护系列/10片装',
          stock: 200,
          price: 240
        }, {
          type: '修护系列/5片装',
          stock: 200,
          price: 140
        }]
      },
      swiperOption: {
        autoplay: true,
        interval: 2000,
        duration: 1000
      },
      swiperData: [{
        img: 'http://img.alicdn.com/bao/uploaded/i2/845001562/O1CN01i5TdJF1NPRIaSVkBF_!!845001562.jpg'
      }, {
        img: '//img.alicdn.com/bao/uploaded/i4/845001562/O1CN01oIk1g91NPRIK8xxCE_!!845001562.jpg'
      }],
      good: {
        img: 'http://img.alicdn.com/bao/uploaded/i2/845001562/O1CN01i5TdJF1NPRIaSVkBF_!!845001562.jpg',
        title: '悦诗风吟洁面护肤面膜套装双重功效洗护一体共5瓶＋5片，送小样',
        stopTime: '2020-01-03 18:00',
        price: '140-240',
        limit: 5
      },
      infoDateil: {
        brand: '悦诗风吟',
        type: '洗面奶',
        guarantee: '三年',
        limit: 5,
        remark: '非常划算，欲购从速'
      },
      imgsArr: [
        'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/845001562/O1CN01RXfX3J1NPRIJBacXP_!!845001562.jpg_430x430q90.jpg',
        'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/845001562/O1CN01YySLPM1NPRIN7qD8j_!!845001562.jpg_430x430q90.jpg',
        'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/845001562/O1CN01ffxaXr1NPRIIAjC2o_!!845001562.jpg_430x430q90.jpg',
        'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/845001562/O1CN012yfRBo1NPRINzjlM6_!!845001562.jpg_430x430q90.jpg'
      ]
    }
  },
  onLoad () {

  },
  methods: {

    joinCar () {
      this.skuType = 1
      this.popupShow = true
    },
    buy () {
      this.skuType = 2
      this.popupShow = true
    },
    handleClose () {
      this.popupShow = false
    },
    handleConfirm (data) {
      this.popupShow = false
      uni.navigateTo({
        url: '/pages/order/index?orderData=' + encodeURIComponent(JSON.stringify(data))
      })
    },
    toHome () {
      uni.switchTab({
        url: '/pages/index/index',
      })
    },
    toCar () {
      uni.switchTab({
        url: '/pages/car/car',
      })
    },

  }
}
</script>


<style lang="scss" scoped>
@import "./index";
</style>
