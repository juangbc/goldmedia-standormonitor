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

import zeitreihenanalyseBeschaeftigte from '../components/pages/zeitreihenanalyse-beschaeftigte'
import zeitreihenanalyseUmsaetze from '../components/pages/zeitreihenanalyse-umsaetze'
import zeitreihenanalyseUnternehmen from '../components/pages/zeitreihenanalyse-unternehmen'

import vergleichsanalyseBundesvergleich from '../components/pages/vergleichsanalyse-bundesvergleich'
import vergleichsanalyseBundesvergleichAnalyse from '../components/pages/vergleichsanalyse-bundesvergleich-analyse'
import vergleichsanalyseLaendervergleich from '../components/pages/vergleichsanalyse-laendervergleich'
import vergleichsanalyseStaerken from '../components/pages/vergleichsanalyse-staerken'
import vergleichsanalyseZeitreihenvergleich1 from '../components/pages/vergleichsanalyse-zeitreihenvergleich-1'
import vergleichsanalyseZeitreihenvergleich2 from '../components/pages/vergleichsanalyse-zeitreihenvergleich-2'
import vergleichsanalyseZeitreihenvergleich3 from '../components/pages/vergleichsanalyse-zeitreihenvergleich-3'
import vergleichsanalyseZeitreihenvergleich4 from '../components/pages/vergleichsanalyse-zeitreihenvergleich-4'

import standortanalyseUnternehmen from '../components/pages/standortanalyse-unternehmen'
import standortanalyseUmsaetze from '../components/pages/standortanalyse-umsaetze'
import standortanalyseBeschaeftigteUebersicht from '../components/pages/standortanalyse-beschaeftigte-uebersicht'
import standortanalyseBeschaeftigteAnalyse from '../components/pages/standortanalyse-beschaeftigte-analyse'

import branchenanalyseSonderanalyse from '../components/pages/branchenanalyse-sonderanalyse'
import branchenanalyseRundfunk from '../components/pages/branchenanalyse-rundfunk'
import branchenanalyseMedienbranchen from '../components/pages/branchenanalyse-medienbranchen'
import branchenanalyseMedienbranchenAnalyse from '../components/pages/branchenanalyse-medienbranchen-analyse'
import branchenanalyseMedienbranchenWZAnalyse from '../components/pages/branchenanalyse-medienbranchen-WZ-analyse'
import branchenanalyseGames from '../components/pages/branchenanalyse-games'
import branchenanalyseBranchenvergleich1 from '../components/pages/branchenanalyse-branchenvergleich-1'
import branchenanalyseBranchenvergleich2 from '../components/pages/branchenanalyse-branchenvergleich-2'
import branchenanalyseBranchenvergleich3 from '../components/pages/branchenanalyse-branchenvergleich-3'
import branchenanalyseBranchenvergleich4 from '../components/pages/branchenanalyse-branchenvergleich-4'
import branchenanalyseVRAR from '../components/pages/branchenanalyse-vrar'

import kontakt from '../components/pages/kontakt'
import methodik from '../components/pages/methodik'

import impressum from '../components/pages/impressum'
import methoden from '../components/pages/methoden'

import overview from '../components/pages/overview'
import navbar from '../components/utils/navbar'
import home from '../components/pages/home'
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
                        path: '/home',
                        name: 'home',
                        component: home
                    },
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
                        path: '/branchenanalyse',
                        name: 'branchenanalyse',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/branchenanalyse/branchenvergleich-1',
                                name: 'branchenanalyse-branchenvergleich-1',
                                component: branchenanalyseBranchenvergleich1
                            },
                            {
                                path: '/branchenanalyse/branchenvergleich-2',
                                name: 'branchenanalyse-branchenvergleich-2',
                                component: branchenanalyseBranchenvergleich2
                            },
                            {
                                path: '/branchenanalyse/branchenvergleich-3',
                                name: 'branchenanalyse-branchenvergleich-3',
                                component: branchenanalyseBranchenvergleich3
                            },
                            {
                                path: '/branchenanalyse/branchenvergleich-4',
                                name: 'branchenanalyse-branchenvergleich-4',
                                component: branchenanalyseBranchenvergleich4
                            },
                            {
                                path: '/branchenanalyse/games',
                                name: 'branchenanalyse-games',
                                component: branchenanalyseGames
                            },

                            {
                                path: '/branchenanalyse/vrar',
                                name: 'branchenanalyse-vrar',
                                component: branchenanalyseVRAR
                            },
                            {
                                path: '/branchenanalyse/medienbranchen',
                                name: 'branchenanalyse-medienbranchen',
                                component: branchenanalyseMedienbranchen
                            },
                            {
                                path: '/branchenanalyse/medienbranchen-analyse',
                                name: 'branchenanalyse-medienbranchen-analyse',
                                component: branchenanalyseMedienbranchenAnalyse
                            },
                            {
                                path: '/branchenanalyse/medienbranchen-WZ-analyse',
                                name: 'branchenanalyse-medienbranchen-WZ-analyse',
                                component: branchenanalyseMedienbranchenWZAnalyse
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
                                path: '/standortanalyse/beschaeftigte-analyse',
                                name: 'standortanalyse-beschaeftigte-analyse',
                                component: standortanalyseBeschaeftigteAnalyse
                            },
                            {
                                path: '/standortanalyse/beschaeftigte',
                                name: 'standortanalyse-beschaeftigte',
                                component: standortanalyseBeschaeftigteUebersicht
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
                                path: '/vergleichsanalyse/bundesvergleich-analyse',
                                name: 'vergleichsanalyse-bundesvergleich-analyse',
                                component: vergleichsanalyseBundesvergleichAnalyse
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
                                path: '/vergleichsanalyse/zeitreihenvergleich-1',
                                name: 'vergleichsanalyse-zeitreihenvergleich-1',
                                component: vergleichsanalyseZeitreihenvergleich1
                            },
                            {
                                path: '/vergleichsanalyse/zeitreihenvergleich-2',
                                name: 'vergleichsanalyse-zeitreihenvergleich-2',
                                component: vergleichsanalyseZeitreihenvergleich2
                            },
                            {
                                path: '/vergleichsanalyse/zeitreihenvergleich-3',
                                name: 'vergleichsanalyse-zeitreihenvergleich-3',
                                component: vergleichsanalyseZeitreihenvergleich3
                            },
                            {
                                path: '/vergleichsanalyse/zeitreihenvergleich-4',
                                name: 'vergleichsanalyse-zeitreihenvergleich-4',
                                component: vergleichsanalyseZeitreihenvergleich4
                            },
                        ]
                    },
                    {
                        path: '/zeitreihenanalyse',
                        name: 'zeitreihenanalyse',
                        component: {template: '<router-view/>'},
                        children: [
                            {
                                path: '/zeitreihenanalyse/beschaeftigte',
                                name: 'zeitreihenanalyse-beschaeftigte',
                                component: zeitreihenanalyseBeschaeftigte
                            },
                            {
                                path: '/zeitreihenanalyse/umsaetze',
                                name: 'zeitreihenanalyse-umsaetze',
                                component: zeitreihenanalyseUmsaetze
                            },
                            {
                                path: '/zeitreihenanalyse/unternehmen',
                                name: 'zeitreihenanalyse-unternehmen',
                                component: zeitreihenanalyseUnternehmen
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
