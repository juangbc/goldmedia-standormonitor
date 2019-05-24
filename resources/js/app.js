
import Vue from 'vue'
import navbar from './components/utils/navbar'
import home1 from './components/home1'
import sidebar from './components/utils/sidebar'
import numFormat from 'vue-filter-number-format'
import locale from 'element-ui/lib/locale/lang/en'
import Element from 'element-ui'
import vueHeadful from 'vue-headful'
import StarRating from 'vue-star-rating'
import VueRouter from 'vue-router';
import router from './router'
//import App from './App'
// import '../theme/index.css'
import 'C:/xampp/htdocs/gmapi/resources/theme/index.css'
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

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('App', require('./App.vue').default);

Vue.component('home1', require('./components/home1.vue').default);

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
//Vue.use(require('vue-tableau'))

Vue.prototype.$apiBase1 = 'http://localhost/gmapi/resources/js/'
Vue.prototype.$apiBase = 'http://localhost/gmapi/public/api/'
Vue.prototype.$pngPath = Vue.prototype.$apiBase1+"GM-Logo-weiß - Kopie.png"



/*
const routes = [
    { path: '/', component: Hello },
];
*/

//const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router: router,
    components: {home1: home1},
    template: '<home1/>'
});

/*
new Vue({
    el: '#app',
    router: router,
    components: {App: App},
    template: '<App/>'
})*/
