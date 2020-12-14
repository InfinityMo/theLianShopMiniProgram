import Vue from 'vue'
import store from '@/store/index.js'
import axios from 'axios'
import {
	stringify
} from 'qs'
import loading from '@/common/utils/func/loading/loading.js'
const serverUrl = 'http://172.165.197.11'
const instance = axios.create({
	baseURL: '/basicinfo',
	timeout: 7000
})
instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
const codeMessage = {
	200: '服务器成功返回请求的数据',
	201: '新建或修改数据成功',
	202: '一个请求已经进入后台排队（异步任务）',
	204: '删除数据成功',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
	401: '用户没有权限（令牌、用户名、密码错误）',
	403: '用户得到授权，但是访问是被禁止的',
	404: '请求不存在',
	406: '请求的格式不可得',
	410: '请求的资源被永久删除，且不会再得到的',
	422: '当创建一个对象时，发生一个验证错误',
	500: '服务器错误',
	502: '网关错误',
	503: '服务不可用，服务器暂时过载或维护',
	504: '网关超时'
}
// 清除请求参数的首尾空格
const trimParams = (params) => {
	for (const prop in params) {
		// eslint-disable-next-line no-prototype-builtins
		if (params.hasOwnProperty(prop)) {
			if (params[prop] && typeof(params[prop]) === 'string') {
				params[prop] = params[prop].trim()
			}
		}
	}
}
instance.interceptors.request.use(config => {
		loading.show()
		config.data = stringify(config.data)
		return config
	},
	error => {
		loading.hide()
		return Promise.reject(error)
	})
instance.interceptors.response.use(response => {
	loading.hide()
	return response.data
	// if (response.data.errorCode === 1) {
	// 	return response.data // 过滤响应对象里多余的字段，只返回需要的data
	// } else {
	// 	uni.showToast({
	// 		title: codeMessage['500']
	// 	})
	// 	return Promise.reject(new Error('服务器发生错误'))
	// }
}, error => {
	loading.hide()
	let code = error.response && error.response.status
	// 如果code不存在且错误信息里包含timeout字段，判断为服务器请求超时，则code设置为504
	if (code === undefined && (error.message.includes('timeout') || error.message.includes('Network Error'))) code = 504
	uni.showToast({
		title: codeMessage[code],
		icon: 'none'
	})
	return Promise.reject(error)
})
axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		let settle = require('axios/lib/core/settle')
		let buildURL = require('axios/lib/helpers/buildURL')
		uni.request({
			method: config.method.toUpperCase(),
			url: buildURL(`${serverUrl}${config.baseURL}${config.url}`, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			success(response) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};
				settle(resolve, reject, response);
			},
			fail(error) {
				uni.showToast({
					title:error
				})
				loading.hide()
			}
		})
	})
}
export default {
	post(url, params, spinning) {
		trimParams(params)
		if (!spinning) {
			loading.show()
		}
		return instance.post(url, params)
	},
	// get 请求
	get(url, params, spinning) {
		if (!spinning) {
			loading.show()
		}
		return instance.get(url, params)
	}
}
