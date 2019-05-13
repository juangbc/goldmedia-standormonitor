import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '../components/login'
import passwordReset from '../components/password-reset'
import changePassword from '../components/change-password'
import main from '../components/main'
import userManagement from '../components/user-management'
import disclaimer from '../components/pages/disclaimer'
import faq from '../components/pages/faq'

import zeitreihenanalyseBeschaeftigte from '../components/pages/zeitreihenanalyse-beschaeftigte'
import zeitreihenanalyseUmsaetze from '../components/pages/zeitreihenanalyse-umsaetze'
import zeitreihenanalyseUnternehmen from '../components/pages/zeitreihenanalyse-unternehmen'

import vergleichsanalyseBundesvergleich from '../components/pages/vergleichsanalyse-bundesvergleich'
import vergleichsanalyseLaendervergleich from '../components/pages/vergleichsanalyse-laendervergleich'
import vergleichsanalyseStaerken from '../components/pages/vergleichsanalyse-staerken'
import vergleichsanalyseZeitreihenvergleich from '../components/pages/vergleichsanalyse-zeitreihenvergleich'

import standortanalyseUnternehmen from '../components/pages/standortanalyse-unternehmen'
import standortanalyseUmsaetze from '../components/pages/standortanalyse-umsaetze'
import standortanalyseBeschaeftigte from '../components/pages/standortanalyse-beschaeftigte'
import standortanalyseBasisdaten from '../components/pages/standortanalyse-basisdaten'

import branchenanalyseSonderanalyse from '../components/pages/branchenanalyse-sonderanalyse'
import branchenanalyseRundfunk from '../components/pages/branchenanalyse-rundfunk'
import branchenanalyseMedienbranchen from '../components/pages/branchenanalyse-medienbranchen'
import branchenanalyseGames from '../components/pages/branchenanalyse-games'
import branchenanalyseBranchenvergleich from '../components/pages/branchenanalyse-branchenvergleich'

import settings from '../components/utils/settings'
import navbar from '../components/utils/navbar'
import home from '../components/pages/home'


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
                path: '/platform/pages/faq',
                name: 'faq',
                component: faq
            },
            {
                path: '/platform/pages/disclaimer',
                name: 'disclaimer',
                component: disclaimer
            },
            {
                path: '/',
                name: 'main',
                component: main,
                children: [
                    {
                        path: '/home',
                        name: 'home',
                        component: home
                    },
                    {
                        path: '/settings',
                        name: 'settings',
                        component: settings,
                        meta: {auth: true}
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
                        path: '/branchenanalyse',
                        name: 'branchenanalyse',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/branchenanalyse/branchenvergleich',
                                name: 'branchenanalyse-branchenvergleich',
                                component: branchenanalyseBranchenvergleich
                            },
                            {
                                path: '/branchenanalyse/games',
                                name: 'branchenanalyse-games',
                                component: branchenanalyseGames
                            },
                            {
                                path: '/branchenanalyse/medienbranchen',
                                name: 'branchenanalyse-medienbranchen',
                                component: branchenanalyseMedienbranchen
                            },
                            {
                                path: '/branchenanalyse/rundfunk',
                                name: 'branchenanalyse-rundfunk',
                                component: branchenanalyseRundfunk
                            },
                            {
                                path: '/branchenanalyse/sonderanalyse',
                                name: 'branchenanalyse-sonderanalyse',
                                component: branchenanalyseSonderanalyse
                            },
                        ]
                    },
                    {
                        path: '/standortanalyse',
                        name: 'standortanalyse',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/standortanalyse/basisdaten',
                                name: 'standortanalyse-basisdaten',
                                component: standortanalyseBasisdaten
                            },
                            {
                                path: '/standortanalyse/beschaeftigte',
                                name: 'standortanalyse-beschaeftigte',
                                component: standortanalyseBeschaeftigte
                            },
                            {
                                path: '/standortanalyse/umsaetze',
                                name: 'standortanalyse-umsaetze',
                                component: standortanalyseUmsaetze
                            },
                            {
                                path: '/standortanalyse/unternehmen',
                                name: 'standortanalyse-unternehmen',
                                component: standortanalyseUnternehmen
                            },
                        ]
                    },
                    {
                        path: '/vergleichsanalyse',
                        name: 'vergleichsanalyse',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/vergleichsanalyse/bundesvergleich',
                                name: 'vergleichsanalyse-bundesvergleich',
                                component: vergleichsanalyseBundesvergleich
                            },
                            {
                                path: '/vergleichsanalyse/laendervergleich',
                                name: 'vergleichsanalyse-laendervergleich',
                                component: vergleichsanalyseLaendervergleich
                            },
                            {
                                path: '/vergleichsanalyse/staerken',
                                name: 'vergleichsanalyse-staerken',
                                component: vergleichsanalyseStaerken
                            },
                            {
                                path: '/vergleichsanalyse/zeitreihenvergleich',
                                name: 'vergleichsanalyse-zeitreihenvergleich',
                                component: vergleichsanalyseZeitreihenvergleich
                            },
                        ]
                    },
                    {
                        path: '/zeitreihenanalyse',
                        name: 'zeitreihenanalyse',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/vergleichsanalyse/beschaeftigte',
                                name: 'zeitreihenanalyse-beschaeftigte',
                                component: zeitreihenanalyseBeschaeftigte
                            },
                            {
                                path: '/vergleichsanalyse/umsaetze',
                                name: 'zeitreihenanalyse-umsaetze',
                                component: zeitreihenanalyseUmsaetze
                            },
                            {
                                path: '/vergleichsanalyse/unternehmen',
                                name: 'zeitreihenanalyse-unternehmen',
                                component: zeitreihenanalyseUnternehmen
                            },
                        ]
                    },
                ]
            }
        ],
        scrollBehavior(to, from, savedPosition) {
            return {x: 0, y: 0}
        }
    })
