import Vue from 'vue'
import App from './App'
import request from './common/ajax.js'
Vue.prototype.$uni = request
Vue.config.productionTip = false
Vue.prototype.$http = request

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
