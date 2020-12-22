<template>
  <view class="car-wrap">
    <ul>
      <li v-for="(goods,index) in car"
          :key="index"
          class="car-item">
        <view class="flex-item-center brand">
          <image class="brand-img"
                 :src="goods.brandImg"></image>
          <text class="brand-title">{{goods.brand}}</text>
        </view>
        <view class="good-main-title flex-between-center">
          <h4 class="ell">{{goods.children[0].goodTitle}}</h4>
          <text>此商品限购{{goods.limit}}件</text>
        </view>
        <ol>
          <li v-for="(item,index) in goods.children"
              :key="index"
              class="good-box flex-item-center">
            <view class="radio-wrap">
              <radio class="radio"
                     :checked="item.select" />
            </view>
            <view class="good flex">
              <view class="main-img">
                <image :src="item.goodImg"></image>
              </view>
              <view class="content">
                <h5>{{item.goodTitle}}</h5>
                <text class="type">{{item.goodType}}</text>
                <view class="flex-between-center">
                  <text class="price"><text>￥</text>{{item.goodPrice}}</text>
                  <view class="number">
                    <view class="sub">
                      <text class="iconfont icon icon-jianhao"></text>
                    </view>
                    <view class="input">
                      <input type="number"
                             :class="'text-'+themeColor.name"
                             v-model="item.num" />
                    </view>
                    <view class="add">
                      <text class="iconfont icon iconjia1"></text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </li>
        </ol>
      </li>
    </ul>
  </view>
</template>

<script>
export default {
  data () {
    return {
      car: [{
        brandImg: require('@/static/img/brands/ysfy.png'),
        brand: '悦诗风吟',
        limit: 5,
        children: [
          {
            select: false,
            goodImg: 'http://img.alicdn.com/bao/uploaded/i2/845001562/O1CN01i5TdJF1NPRIaSVkBF_!!845001562.jpg',
            goodTitle: '悦诗风吟洁面护肤面膜套装双重功效洗护一体',
            goodType: '180ml',
            goodPrice: '76',
            num: 1
          }
        ]
      }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
