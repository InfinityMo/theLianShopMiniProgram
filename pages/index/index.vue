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
		<li v-for="(item,index) in brand" :class="item"></li>
	</ul>
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
				brand:['ysfy','hw','mkf','stf','mlgy'],
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
	li{
		width: 20%;
		height: 55px;
	}
}
</style>
