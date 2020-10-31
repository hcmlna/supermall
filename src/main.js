import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'


// ES6模块化直接引入： 可以直接用 import 'filename'; 这种写法来执行目标文件而不引入内容， 且多书写此代码只会执行一次（即在单类模式中只实际执行一次代码， 之后每次返回（若为import xx from xx形式）第一次执行所创建的实例）
import 'components/vant'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()
// 安装toast插件，会执行toast中的install函数
Vue.use(toast)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
