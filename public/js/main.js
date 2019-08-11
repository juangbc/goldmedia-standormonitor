// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
/* jshint node: true */

import Vue from 'vue'
import App from './App'
import navbar from './components/utils/navbar'
import sidebar from './components/utils/sidebar'
import router from './router'
import numFormat from 'vue-filter-number-format'
import locale from 'element-ui/lib/locale/lang/en'
import Element from 'element-ui'
import vueHeadful from 'vue-headful'
import StarRating from 'vue-star-rating'
import '../theme/index.css'
import vueLoader from 'vue-loader'
// Vue.prototype.$pngPath = Vue.prototype+'admin/components/vod-logo.png'
// C:\Users\Juan\WebstormProjects\standortmonitor\src\components\vod-logo.png

Vue.use(Element, { locale })
Vue.component('vue-headful', vueHeadful)
Vue.component('vue-loader', vueLoader)
Vue.component('star-rating', StarRating)
Vue.filter('numFormat', numFormat)
Vue.use(require('vue-moment'))

Vue.use(Element)

Vue.filter('limit', function (value, limit) {
  if (limit > 3 && value.length > limit) {
    return value.substring(0, limit - 3) + '...'
  } else {
    return value
  }
})

Vue.config.productionTip = false
/// //////////

Vue.component('navbar', navbar)
Vue.component('sidebar', sidebar)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  i18n,
  components: {App: App},
  template: '<App/>'
})
