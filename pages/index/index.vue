<template>
	<view class="container">
		<swiper class="swiper" 
		:autoplay="swiperOption.autoplay" 
		:interval="swiperOption.interval"
		:duration="swiperOption.duration">
			<swiper-item v-for="(item,index) in swiperData">
				<view class="swiper-item uni-bg-red">
					<image :src="item.img"></image>
				</view>
			</swiper-item>

		</swiper>  
		<!-- 品牌区域 -->
	<ul class="brand-wrap">
		<li v-for="(item,index) in brand" >
			<img :src="item.img">
			<p>{{item.name}}</p>
		</li>
	</ul>
	<view class="sell-tip">
		<text class="title">本次售卖</text>
		<label>本次共售卖12件商品，欲购从速</label>
	</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				swiperData:[{
					img:require('@/static/img/base/banner1.png')
				},{
					img:require('@/static/img/base/banner2.png')
				}],
				brand:[{
					name:'悦诗风吟',
					img:require('@/static/img/brands/ysfy.png')
				},{
					name:'花王',
					img:require('@/static/img/brands/hw.png')
				},{
					name:'玫珂菲',
					img:require('@/static/img/brands/mkf.png')
				},{
					name:'丝塔芙',
					img:require('@/static/img/brands/stf.png')
				},{
					name:'摩洛哥油',
					img:require('@/static/img/brands/mlgy.png')
				}],
				swiperOption:{
					autoplay: true,
					interval: 2000,
					duration: 500	
				}
			}
		},
		onLoad() {
			this.testApi()
		},
		methods: {
			testApi() {
				this.$request.post('/shopSelect', {
					pageNum: 1,
					pageSize: 5,
					RowGuid:''
				}).then(res => {
					uni.showToast({
						title:res
					})
				}).catch(err=>{
					uni.showToast({
						title:err
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
	.container{
		background-color: #E5E5E5;
	}
	.swiper {
		// width: 100%;
		// height: 164px;

		image {
			width: 100%;
			height: 164px; 
		}
	}
.brand-wrap{
	display: flex;
	justify-content: space-between;
	margin: 10px;
	border-radius: 10px;
	background-color: #fff;
	li{
		width: 20%;
		height: 55px;
		padding: 5px;
		line-height: 1;
		text-align: center;
		img{
			width: 44px;
			height: 35px;
			margin-bottom: 5px;
		}
		p{
			font-size: 13px;
			color: #333333
		}
	}
}
.sell-tip{
	display: flex;
	align-items: center;
	margin: 0 10px 10px 10px;
	.title{
		font-size: 15px;
		line-height: 22px;
		color: #333
	}
	label{
		margin-left: 6px;
		font-size: 12px;
		line-height: 18px;
		color: #777
	}
}
</style>
