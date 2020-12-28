<template>
  <view class="integral-wrap">
    <view class="end-title">
      <view v-for="(item,index) in items"
            :key="index"
            class="tab-item"
            :class="{btna:count == index}"
            @tap="change(index)">
        {{item}}
      </view>
    </view>
    <view class="end-cont"
          :class="{dis:btnnum == 0}">
      　<ul class="integral-box">
        <li v-for="(item,index) in integral"
            :key="index"
            class="flex-between-center integral-item">
          <view class="flex-item-center left">
            <image src="@/static/img/base/integral.png"></image>
            <view>
              <p class="title">{{item.title}}</p>
              <p class="grade">需{{item.grade}}积分</p>
            </view>
          </view>
          <text class="exchange"
                @click="exchangeHandle">兑换</text>
        </li>
      </ul>
    </view>
    <view class="end-cont"
          :class="{dis:btnnum == 1}">
      　　<ul class="record">
        <li v-for="(record,index) in allRecord"
            :key="index"
            class="record-date">
          <view class="time">{{record.time}}</view>
          <ol v-for="(item,sec) in record.children"
              :key="sec"
              class="record-item-wrap">
            <li class="flex-between-center">
              <view>
                <p class="title">{{item.title}}</p>
                <p class="surplus">剩余{{item.surplus}}积分</p>
              </view>
              <text class="cost">花费{{item.cost}}积分</text>
            </li>
          </ol>
        </li>
      </ul>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      btnnum: 0,
      items: ['兑换', '兑换记录'],
      count: '',
      integral: [{
        title: '增加 3 次考勤免签',
        grade: 30
      }],
      allRecord: [{
        time: '2020-11-12',
        children: [
          {
            title: '增加3次考勤免签',
            surplus: '10',
            cost: 30
          },
          {
            title: '增加3次考勤免签',
            surplus: '40',
            cost: 30
          }
        ]
      }, {
        time: '2020-11-04',
        children: [
          {
            title: '增加3次考勤免签',
            surplus: '70',
            cost: 30
          }
        ]
      }]
    }
  },

  methods: {
    change (e) {
      this.count = e
      this.btnnum = e
    },
    exchangeHandle () {
      uni.showModal({
        title: '确定花费30积分兑换“增加3次考勤免签”奖励？',
        content: '兑换后您本月的考勤免签次数将会增加3次',
        success: function (res) {
          if (res.confirm) {
            uni.showToast({
              title: '兑换成功',
              icon: 'success',
              duration: 2000
            })
          } else if (res.cancel) {
            return false
          }
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
