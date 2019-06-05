import Vue from 'vue'
import navbar from './components/utils/navbar'
import vueApp from './components/app'
import sidebar from './components/utils/sidebar'
import numFormat from 'vue-filter-number-format'
import locale from 'element-ui/lib/locale/lang/en'
import Element from 'element-ui'
import vueHeadful from 'vue-headful'
import StarRating from 'vue-star-rating'
import router from './router'
import '../theme/index.css'
import 'vue-tableau'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('vueApp', require('./components/app.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(Element, { locale })
Vue.component('vue-headful', vueHeadful)
Vue.component('star-rating', StarRating)
Vue.filter('numFormat', numFormat)
Vue.use(require('vue-moment'))
Vue.component('navbar', navbar)
Vue.component('sidebar', sidebar)

Vue.prototype.$apiBase1 = 'http://standortmonitor.net/resources/js/'
Vue.prototype.$apiBase = 'http://standortmonitor.net/public/api/'
Vue.prototype.$pngPath = Vue.prototype.$apiBase1+"GM-Logo-weiß - Kopie.png"
Vue.prototype.$pngLandingPage = Vue.prototype.$apiBase1+"pngLandingPage1.png"
Vue.prototype.$pngFilmproduktion = Vue.prototype.$apiBase1+"filmproduktion.jpg"
Vue.prototype.$pngStandortstudieBayern = Vue.prototype.$apiBase1+"Standortstudie_Bayern.jpg"
Vue.prototype.$pngStandortstudieNRW = Vue.prototype.$apiBase1+"Standortstudie_NRW.jpg"

const app = new Vue({
    el: '#app',
    router: router,
    components: {vueApp: vueApp},
    template: '<vueApp/>'
});

