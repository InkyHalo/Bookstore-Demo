import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import MintUi from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

// 定义Vue可以使用VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUi)


import routers from './js/roeuter.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers,
  components:{App}
})
