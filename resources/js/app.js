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
import { store } from './store'

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

Vue.prototype.$apiBase1 = 'http://localhost/gmapi/public/images/'
Vue.prototype.$apiBase = 'http://localhost/gmapi/public/api/'
Vue.prototype.$pngPath = Vue.prototype.$apiBase1+"GM-Logo-weiß - Kopie.png"
Vue.prototype.$pngLandingPage = Vue.prototype.$apiBase1+"pngLandingPage2.png"
Vue.prototype.$pngFilmproduktion = Vue.prototype.$apiBase1+"filmproduktion.jpg"
Vue.prototype.$pngStandortstudieBayern = Vue.prototype.$apiBase1+"Standortstudie_Bayern.jpg"
Vue.prototype.$pngStandortstudieNRW = Vue.prototype.$apiBase1+"Standortstudie_NRW.jpg"
Vue.prototype.$pngStandortstudieBewegtbild = Vue.prototype.$apiBase1+"Bewegtbild_Studie.jpg"
Vue.prototype.$pngStandortstudieWila = Vue.prototype.$apiBase1+"Wirtschaftliche_Lage_Rundfunk.jpg"
Vue.prototype.$pngStandortWirtschaftlicheBedeutungFilm = Vue.prototype.$apiBase1+"Wirtschaftliche_Bedeutung_Filmindustrie.jpg"
Vue.prototype.$pngLandingPageBackground = Vue.prototype.$apiBase1+"landingPageBackgroundImage.png"

Vue.prototype.$bundesland = [
    {"caption": "Alle", "short": "Not filtered", "key": 0},
    {"caption": "Baden-Württemberg", "short": "BW", "key": 1},
    {"caption": "Bayern", "short": "BY", "key": 2},
    {"caption": "Berlin", "short": "BE", "key": 3},
    {"caption": "Brandenburg", "short": "BB", "key": 4},
    {"caption": "Bremen", "short": "HB", "key": 5},
    {"caption": "Hamburg", "short": "HH", "key": 6},
    {"caption": "Hessen", "short": "HE", "key": 7},
    {"caption": "Mecklenburg-Vorpommern", "short": "MV", "key": 8},
    {"caption": "Niedersachsen", "short": "NI", "key": 9},
    {"caption": "Nordrhein-Westfalen", "short": "NW", "key": 10},
    {"caption": "Rheinland-Pfalz", "short": "RP", "key": 11},
    {"caption": "Saarland", "short": "SL", "key": 12},
    {"caption": "Sachsen", "short": "SN", "key": 13},
    {"caption": "Sachsen-Anhalt", "short": "ST", "key": 14},
    {"caption": "Schleswig-Holstein", "short": "SH", "key": 15},
    {"caption": "Thüringen", "short": "TH", "key": 16}
]

Vue.prototype.$markt = [
    {"caption": "Alle", "short": "Not filtered", "key": 0},
    {"caption": "Buchmarkt", "short": "BW", "key": 1},
    {"caption": "Clubwirtschaft", "short": "BY", "key": 2},
    {"caption": "Designwirtschaft", "short": "BE", "key": 3},
    {"caption": "Film", "short": "BB", "key": 4},
    {"caption": "Musikwirtschaft", "short": "HB", "key": 5},
    {"caption": "Pressemarkt", "short": "HH", "key": 6},
    {"caption": "Rundfunk", "short": "HE", "key": 7},
    {"caption": "Software/Games", "short": "MV", "key": 8},
    {"caption": "Telekommunikation", "short": "NI", "key": 9},
    {"caption": "Unterhaltungselektronik", "short": "NW", "key": 10},
    {"caption": "Werbemarkt", "short": "RP", "key": 11}
]

Vue.prototype.$year = [
    {"caption": "2013", "key": 1},
    {"caption": "2014", "key": 2},
    {"caption": "2015", "key": 3},
    {"caption": "2016", "key": 4},
    {"caption": "2017", "key": 5},
]

const app = new Vue({
    el: '#app',
    store,
    router: router,
    components: {vueApp: vueApp},
    template: '<vueApp/>'
});

