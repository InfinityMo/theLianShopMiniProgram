<template>
	<view>
		<button class="login-btn" type="primary" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">微信一键登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				jsCode:'',
				userInfo:{}
			}
		},
		onLoad(){ 
			    wx.login({  
			        success: (res) => {  
			            if (res.code) {         //微信登录成功 已拿到code  
			                this.jsCode=res.code        //保存获取到的code  
			                uni.request({  
			                    url: 'https://api.weixin.qq.com/sns/jscode2session',  
			                    method:'GET',  
			                   data: {
			                   	appid: 'wxb307b005f7a63329', //小程序的APPID  
			                   	secret: '8df4fd9c136c45c8c531a260cb7e8c39', //小程序的secret,  
			                   	js_code: res.code //wx.login 登录成功后的code  
			                   }, 
			                    success: (cts) => { 
									this.userInfo = cts.data
			                        // this.openid=cts.data.openid     //openid 用户唯一标识  
			                        // this.unionid=cts.data.unionid     //unionid 开放平台唯一标识  
			                        // this.session_key=cts.data.session_key     //session_key  会话密钥  
			                    }  
			                });  
			            } else {  
			                console.log('登录失败！' + res.errMsg)  
			            }  
			        }  
			    })
		},
		methods: {
			onGetPhoneNumber(e){
				       if(e.detail.errMsg=="getPhoneNumber:fail user deny"){       //用户决绝授权  
				
				            //拒绝授权后弹出一些提示  
				
				        }else{      //允许授权  
				            console.log(e.detail.encryptedData)  
				            e.detail.encryptedData      //加密的用户信息  
				            e.detail.iv     //加密算法的初始向量  时要用到  
				        } 
			},
			getuserinfo(user) {
				wx.login({
					success: (res) => {
						// 微信登录的code,通过code获取用户手机号
						if (res.code) {
							//            uni.showToast({
							//            	title:res.code,
							// icon:'none'
							//            })
							this.getSession(res.code)
						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
			getSession(code) {
				uni.request({
					url: 'https://api.weixin.qq.com/sns/jscode2session',
					method: 'GET',
					data: {
						appid: 'wxb307b005f7a63329', //小程序的APPID  
						secret: '8df4fd9c136c45c8c531a260cb7e8c39', //小程序的secret,  
						js_code: code //wx.login 登录成功后的code  
					},
					success: (res) => {
						console.log(res.data)
						// 换取成功后 暂存这些数据 留作后续操作  
						this.openid = res.data.openid //openid 用户唯一标识  
						this.session_key = res.data.session_key //session_key  会话密钥  
					}
				});
				// this.$request('https://api.weixin.qq.com/sns/jscode2session', {
				// 	appid: 'wxb307b005f7a63329', //你的小程序的APPID  
				// 	secret: '8d0cf61d64b8ed4ab98389e1a2ed4286', //你的小程序的secret,  
				// 	code: code
				// }).then(res=>{

				// })
			}
		}
	}
</script>

<style lang="scss">
	.login-btn {
		width: 80%;
		margin-top: 100px;
	}
</style>
