import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入vux
import store from './pages/store/store.js'
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
