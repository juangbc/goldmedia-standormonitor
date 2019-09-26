import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '../components/login'
import passwordReset from '../components/password-reset'
import changePassword from '../components/change-password'
import passwordRecovery from '../components/password-recovery'
import main from '../components/main'
import userManagement from '../components/user-management'
import disclaimer from '../components/pages/disclaimer'
import faq from '../components/pages/faq'

import p2_1 from '../components/pages/content/2_1'
import p2_2 from '../components/pages/content/2_2'
import p2_3 from '../components/pages/content/2_3'
import p2_4 from '../components/pages/content/2_4'
import p2_5 from '../components/pages/content/2_5'
import p2_6 from '../components/pages/content/2_6'

import p3_1 from '../components/pages/content/3_1'
import p3_2 from '../components/pages/content/3_2'
import p3_3 from '../components/pages/content/3_3'

import p4_1 from '../components/pages/content/4_1'
import p4_2 from '../components/pages/content/4_2'
import p4_3 from '../components/pages/content/4_3'

import p5_1 from '../components/pages/content/5_1'
import p5_2 from '../components/pages/content/5_2'
import p5_3 from '../components/pages/content/5_3'

import p6_1 from '../components/pages/content/6_1'
import p6_2 from '../components/pages/content/6_2'
import p6_3 from '../components/pages/content/6_3'
import p6_4 from '../components/pages/content/6_4'
import p6_5 from '../components/pages/content/6_5'

import p7_1 from '../components/pages/content/7_1'
import p7_2 from '../components/pages/content/7_2'
import p7_3 from '../components/pages/content/7_3'

import kontakt from '../components/pages/kontakt'
import methodik from '../components/pages/methodik'

import impressum from '../components/pages/impressum'
import methoden from '../components/pages/methoden'

import overview from '../components/pages/overview'
import navbar from '../components/utils/navbar'
import datenschutz from '../components/pages/datenschutz'

Vue.use(Router)

export default new Router(
    {
        routes: [
            {
                path: '/',
                redirect: {name: 'loginPage'}
            },
            {
                path: '/login',
                name: 'loginPage',
                component: loginPage
            },
            {
                path: '/',
                name: 'navbar',
                component: navbar
            },
            {
                path: '/password-reset',
                name: 'passwordReset',
                component: passwordReset
            },
            {
                path: '/password-recovery',
                name: 'passwordRecovery',
                component: passwordRecovery
            },

            {
                path: '/methodik',
                name: 'methodik',
                component: methodik
            },
            {
                path: '/',
                name: 'main',
                component: main,
                children: [
                    {
                        path: '/datenschutz',
                        name: 'datenschutz',
                        component: datenschutz,
                        meta: {auth: true}
                    },
                    {
                        path: '/kontakt',
                        name: 'kontakt',
                        component: kontakt
                    },
                    {
                        path: '/',
                        name: 'user',
                        component: {template: '<router-view/>'},
                        meta: {auth: true},
                        children: [
                            {
                                path: '/change-password',
                                name: 'changePassword',
                                component: changePassword,
                                meta: {auth: true}
                            },
                            {
                                path: '/user-management',
                                name: 'userManagement',
                                component: userManagement,
                                meta: {auth: true}
                            }
                        ]
                    },
                    {
                        path: '/platform/pages/faq',
                        name: 'faq',
                        component: faq
                    },
                    {
                        path: '/overview',
                        name: 'overview',
                        component: overview
                    },
                    {
                        path: '/standorte',
                        name: 'standorte',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/standorte/1',
                                name: '2_1',
                                component: p2_1
                            },
                            {
                                path: '/standorte/2',
                                name: '2_2',
                                component: p2_2
                            },
                            {
                                path: '/standorte/3',
                                name: '2_3',
                                component: p2_3
                            },
                            {
                                path: '/standorte/4',
                                name: '2_4',
                                component: p2_4
                            },
                            {
                                path: '/standorte/5',
                                name: '2_5',
                                component: p2_5
                            },
                            {
                                path: '/standorte/6',
                                name: '2_6',
                                component: p2_6
                            },
                        ]
                    },
                    {
                        path: '/zeitreihen',
                        name: 'zeitreihen',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/zeitreihen/1',
                                name: '3_1',
                                component: p3_1
                            },
                            {
                                path: '/zeitreihen/2',
                                name: '3_2',
                                component: p3_2
                            },
                            {
                                path: '/zeitreihen/3',
                                name: '3_3',
                                component: p3_3
                            },
                        ]
                    },
                    {
                        path: '/bundesvergleich',
                        name: 'bundesvergleich',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/bundesvergleich/1',
                                name: '4_1',
                                component: p4_1
                            },
                            {
                                path: '/bundesvergleich/2',
                                name: '4_2',
                                component: p4_2
                            },
                            {
                                path: '/bundesvergleich/3',
                                name: '4_3',
                                component: p4_3
                            },
                        ]
                    },
                    {
                        path: '/4laender',
                        name: '4laender',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/4laender/1',
                                name: '5_1',
                                component: p5_1
                            },
                            {
                                path: '/4laender/2',
                                name: '5_2',
                                component: p5_2
                            },
                            {
                                path: '/4laender/3',
                                name: '5_3',
                                component: p5_3
                            },
                        ]
                    },
                    {
                        path: '/index-analysen',
                        name: 'indexanalysen',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/index-analysen/1',
                                name: '6_1',
                                component: p6_1
                            },
                            {
                                path: '/index-analysen/2',
                                name: '6_2',
                                component: p6_2
                            },
                            {
                                path: '/index-analysen/3',
                                name: '6_3',
                                component: p6_3
                            },
                            {
                                path: '/index-analysen/4',
                                name: '6_4',
                                component: p6_4
                            },
                            {
                                path: '/index-analysen/5',
                                name: '6_5',
                                component: p6_5
                            },
                        ]
                    },
                    {
                        path: '/spezial-analysen',
                        name: 'spezialanalysen',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/spezial-analysen/1',
                                name: '7_1',
                                component: p7_1
                            },
                            {
                                path: '/spezial-analysen/2',
                                name: '7_2',
                                component: p7_2
                            },
                            {
                                path: '/spezial-analysen/3',
                                name: '7_3',
                                component: p7_3
                            },
                        ]
                    },
                    {
                        path: '/methoden',
                        name: 'methoden',
                        component: methoden
                    },
                    {
                        path: '/impressum',
                        name: 'impressum',
                        component: impressum
                    },
                    {
                        path: '/platform/pages/disclaimer',
                        name: 'disclaimer',
                        component: disclaimer
                    },
                ]
            }
        ],
        scrollBehavior(to, from, savedPosition) {
            return {x: 0, y: 0}
        }
    })
