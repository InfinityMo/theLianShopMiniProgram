<template>
  <popup-bottom :show="show"
                @close="closeSkuBox">
    <view class="sku-wrap">
      <view class="sku-top flex">
        <image class="main-img"
               :src="specifications.img"></image>
        <view class="price-stopTime">
          <p class="price"><text class="icon">￥</text>{{price}}</p>
          <p class="stop-time">停售时间：{{specifications.stopTime}}</p>
        </view>
      </view>
      <h5 class="chose-params">选择参数</h5>
      <ul class="parameter">
        <li @click="typeSelect(index)"
            v-for="(item,index) in specifications.parameter"
            :key="index"
            :class="{'select-li':index===defaultLiSelect}">
          {{item.type}}
        </li>
      </ul>
      <view class="flex-between-center select-num">
        <view class="flex-item-center limit">
          <h6>选择数量</h6><text>限购{{specifications.limit}}件</text>
        </view>
        <view class="number flex-item-center">
          <view class="sub flex-item-center"
                @tap.stop="sub">
            <image src="@/static/img/base/sub.png"></image>
          </view>
          <view class="input">
            <input type="number"
                   @input.stop="numberChange($event)"
                   v-model="specifications.num" />
          </view>
          <view class="add flex-item-center"
                @tap.stop="add">
            <image src="@/static/img/base/add.png"></image>
          </view>
        </view>
      </view>
      <view class="okBtn"
            :class="{'okBtn-handle':defaultLiSelect!==-1}"
            @click="confirmHandle">确定</view>
    </view>
  </popup-bottom>
</template>

<script>
import PopupBottom from './popup-bottom'
export default {
  components: {
    PopupBottom
  },

  props: {
    show: {
      type: Boolean,
      default: false
    },

    specificationsObj: {
      type: Object
    },
    defaultSelectIndex: {
      type: Number,
      default: -1
    },
    skuType: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      price: 0,
      specifications: JSON.parse(JSON.stringify(this.specificationsObj)),
      defaultLiSelect: this.defaultSelectIndex
    }
  },
  watch: {

  },
  computed: {

  },
  created () {
    this.price = this.specifications.parameter[0].price
  },
  methods: {
    add () {
      if (this.specifications.num < this.specifications.limit) {
        this.specifications.num++
      } else {
        uni.showToast({
          title: '不可超出限购数量',
          icon: 'none',
          duration: 2000
        })
      }
    },
    sub () {
      this.specifications.num > 1 ? this.specifications.num-- : ''
    },
    typeSelect (index) {
      this.defaultLiSelect = index
      this.price = this.specifications.parameter[index].price
    },
    closeSkuBox () {
      this.$emit('close')
    },

    confirmHandle () {
      if (this.defaultLiSelect === -1) {
        return false
      }
      // 购物车
      if (this.skuType === 1) {
        uni.showToast({
          title: '加入购物车成功',
          icon: 'none',
          duration: 1000
        })
        setTimeout(() => {
          this.$emit('close')
        }, 1500)
      } else {
        let orderData = [{
          brandImg: this.specifications.brandImg,
          brand: this.specifications.brand,
          children: [
            {
              goodImg: this.specifications.img,
              goodTitle: this.specifications.goodTitle,
              limit: this.specifications.limit,
              lastChild: [{
                id: this.specifications.id,
                goodType: this.specifications.parameter[this.defaultLiSelect].type,
                goodPrice: this.specifications.parameter[this.defaultLiSelect].price,
                num: this.specifications.num
              }]
            }
          ]
        }]
        this.$emit('confirm', orderData)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
.flex-center {
  display: flex;
  align-items: center;
}

.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

$font-color-light: #999999;
$page-bg-color-grey: #f5f5f5;

.fs-24 {
  font-size: 24upx;
}

.fs-26 {
  font-size: 26upx;
}

.fs-38 {
  font-size: 38upx;
}

.container {
  width: 690upx;
  margin: 0 auto;
}

.sku-box {
  min-height: 500upx;
  background-color: white;
  padding-bottom: 20upx;
  font-size: 28upx;
  color: #333333;
  .sku-header {
    display: flex;
    padding: 40upx 0 20upx;
    .goods-img {
      width: 200upx;
      height: 200upx;
      border-radius: 6upx;
      border: 4upx solid white;
      flex: none;
      margin-top: -80upx;
    }
  }
  .sku-goods-info {
    margin-left: 20upx;
    .money {
      border: none;
      padding-bottom: 0;
    }
    .stock {
      color: $font-color-light;
    }
  }
  .sku-list {
    max-height: 500upx;
  }
  .sku-item {
    padding: 30upx 0;
    .sku-name {
      font-size: 30upx;
    }
    .sku-content {
      border-bottom: 2upx solid $page-bg-color-grey;
      padding: 20upx 0;
      @extend .flex-center;
      flex-wrap: wrap;
      .sku-content-item {
        padding: 16upx 20upx;
        border-radius: 6upx;
        margin: 0 30upx 20upx 0;
        border: 2upx solid transparent;
      }
    }
    &.count {
      @extend .flex-center;
      justify-content: space-between;
      .count-box {
        @extend .flex-center;
        text,
        .count-content {
          @extend .flex-center-center;
          width: 70upx;
          height: 70upx;
          font-size: 32upx;
          border: 2upx solid $page-bg-color-grey;
        }
        .add,
        .minus {
          font-size: 44upx;
        }
        .count-content {
          border-width: 2upx 0;
          text-align: center;
        }
      }
    }
  }
  .confirm-btn {
    @extend .flex-center-center;
    height: 80upx;
    border-radius: 80upx;
    color: white;
    font-size: 32upx;
    margin-top: 10upx;
  }
}

[class*="disabled"] {
  color: $font-color-light;
  opacity: 0.7;
}
</style>
