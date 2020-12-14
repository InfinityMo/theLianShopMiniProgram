import Vue from 'vue'
import App from './App'
import store from './store'
import request from '@/common/network/request.js'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$request = request
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
