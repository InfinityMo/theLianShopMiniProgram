<template>
  <view class="user-wrap">
    <view class="uer-info-box">
      <view class="user flex">
        <image src="@/static/img/base/cat.jpg"></image>
        <view class="user-detail">
          <h4>Infinity</h4>
          <view class="grade"><label>我的积分：</label><text>100</text></view>
        </view>
      </view>
      <ul class="select-fun flex-item-center">
        <li class="flex-item-center"
            @click="toMyOrder">
          <image src="@/static/img/base/order.png"></image>
          <p>我的订单</p>
        </li>
        <li class="flex-item-center"
            @click="toIntegral">
          <image src="@/static/img/base/grade.png"></image>
          <p>积分兑换</p>
        </li>
      </ul>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toMyOrder () {
      uni.navigateTo({
        url: '/pages/myOrder/index',
      })
    },
    toIntegral () {
      uni.navigateTo({
        url: '/pages/integral/index',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
