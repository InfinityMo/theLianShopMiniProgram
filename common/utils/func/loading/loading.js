export default {
	show(title = '加载中...'){
		uni.showLoading({title:title})
	},
	hide(){
		uni.hideLoading()
	}
}