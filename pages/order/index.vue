<template>
  <view class="car-wrap">
    <ul>
      <li v-for="(goods,index1) in car"
          :key="index1"
          class="car-item">
        <view class="flex-item-center brand">
          <image class="brand-img"
                 :src="goods.brandImg"></image>
          <text class="brand-title">{{goods.brand}}</text>
        </view>
        <ol>
          <li v-for="(item,index2) in goods.children"
              class="good-box"
              :key="index2">
            <view class="good-main-title flex-between-center">
              <h4 class="ell">{{item.goodTitle}}</h4>
            </view>
            <view class="flex-item-center"
                  v-for="(last,ind) in item.lastChild"
                  :key="ind">
              <view class="good flex">
                <view class="main-img">
                  <image :src="item.goodImg"></image>
                </view>
                <view class="content">
                  <h5>{{item.goodTitle}}</h5>
                  <text class="type">{{last.goodType}}</text>
                  <view class="flex-between-center">
                    <text class="price"><text>￥</text>{{last.goodPrice}}</text>
                    <view class="number flex-item-center number-normal">
                      x {{last.num}}
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </li>
        </ol>
      </li>
    </ul>
    <view class="calc">
      <view class="flex-between-center calc-content">
        <view class="flex-item-center">
          <text class="total">合计：</text>
          <text class="price"><text class="icon">￥</text>{{total}}</text>
          <text class="total-num">共{{totalNum}}件</text>
        </view>
        <view>
          <text class="calc-btn"
                @click="submitOrder">提交订单</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      car: [{
        brandImg: require('@/static/img/brands/ysfy.png'),
        brand: '悦诗风吟',
        children: [
          {
            goodImg: 'http://img.alicdn.com/bao/uploaded/i2/845001562/O1CN01i5TdJF1NPRIaSVkBF_!!845001562.jpg',
            goodTitle: '悦诗风吟洁面护肤面膜套装双重功效洗护一体',
            limit: 5,
            lastChild: [
              {
                id: 1,
                select: false,
                goodType: '180ml',
                goodPrice: '76',
                num: 1
              },
              {
                id: 2,
                select: false,
                goodType: '180ml',
                goodPrice: '76',
                num: 1
              }
            ]
          }
        ]
      }, {
        brandImg: require('@/static/img/brands/hw.png'),
        brand: '花王',
        children: [
          {
            goodImg: '//img.alicdn.com/bao/uploaded/i1/707890732/O1CN01rx4Bfn1HHIYVkwws3_!!0-item_pic.jpg_180x180.jpg',
            goodTitle: '日本花王妙而舒腰贴式L54片3包纸尿裤婴儿尿不湿透气',
            limit: 5,
            lastChild: [
              {
                id: 3,
                select: false,
                goodType: '保湿系列/10片装',
                goodPrice: '109',
                num: 1
              }
            ]
          }
        ]
      },
      ]
    }
  },
  computed: {
    total () {
      let total = 0
      this.car.map(item => {
        item.children.map(child => {
          child.lastChild.map(i => {
            total += Number(i.goodPrice) * i.num
          })
        })
      })
      return total
    },
    totalNum () {
      let total = 0
      this.car.map(item => {
        item.children.map(child => {
          child.lastChild.map(i => {
            total += i.num
          })
        })
      })
      return total
    }
  },
  methods: {
    submitOrder () {
      uni.showToast({
        title: '订单提交成功',
        icon: 'success',
        duration: 500
      })
      setTimeout(() => {
        uni.navigateTo({
          url: '/pages/myOrder/index',
        })
      }, 1000)

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
