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
        <ol>
          <li v-for="(item,index) in goods.children"
              class="good-box"
              :key="index">
            <view class="good-main-title flex-between-center">
              <h4 class="ell">{{item.goodTitle}}</h4>
              <text>此商品限购{{item.limit}}件</text>
            </view>
            <view class="flex-item-center"
                  v-for="last in item.lastChild"
                  :key="last.id">
              <view class="radio-wrap">
                <radio class="radio"
                       @click="radioHandle(last.id)"
                       :checked="last.select" />
              </view>
              <view class="good flex">
                <view class="main-img">
                  <image :src="item.goodImg"></image>
                </view>
                <view class="content">
                  <h5>{{item.goodTitle}}</h5>
                  <text class="type">{{last.goodType}}</text>
                  <view class="flex-between-center">
                    <text class="price"><text>￥</text>{{last.goodPrice}}</text>
                    <view class="number flex-item-center">
                      <view class="sub"
                            @tap.stop="sub(last.id)">
                        <text class="iconfont icon icon-jianhao">-</text>
                      </view>
                      <view class="input">
                        <input type="number"
                               v-model="last.num" />
                      </view>
                      <view class="add"
                            @tap.stop="add(last.id)">
                        <text class="iconfont icon iconjia1">+</text>
                      </view>
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
      }
      ]
    }
  },
  methods: {
    add (id) {
      let targetParent = {}
      let target = {}
      this.car.map(item => {
        item.children.map(child => {
          child.lastChild.map(i => {
            if (i.id === id) {
              targetParent = child
              target = i
            }
          })
        })
      })
      let total = targetParent.lastChild.reduce((prev, cur) => prev + cur.num, 0)
      if (total < targetParent.limit) {
        target.num++
      } else {
        uni.showToast({
          title: '不可超出限购数量',
          icon: 'none',
          duration: 2000
        })
      }
    },
    sub (id) {
      let targetParent = {}
      let target = {}
      this.car.map(item => {
        item.children.map(child => {
          child.lastChild.map(i => {
            if (i.id === id) {
              targetParent = child
              target = i
            }
          })
        })
      })
      this.car.filter(i => {
        if (target.num > 1) {
          target.num--
        }
      })
    },
    radioHandle (id) {
      let targetParent = {}
      let target = {}
      this.car.map(item => {
        item.children.map(child => {
          child.lastChild.map(i => {
            if (i.id === id) {
              targetParent = child
              target = i
            }
          })
        })
      })
      target.select = !target.select
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
