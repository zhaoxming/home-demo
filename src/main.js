import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'

import ElementUI from 'element-ui'
import enLocale from './language/en-us.json'
import zhLocale from './language/zh-cn.json'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.prototype.$ajax = axios

window.SERVER_ROOT_URL = 'https://api.innwowo.com';


const messages = {
  en: enLocale,
  zh: zhLocale
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: store,
  router,
  i18n,
  render: h => h(App)
});
