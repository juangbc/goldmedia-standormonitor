<template>
    <div>
        <div class="sidebar" :class="{'mobile':mobile}">
            <el-aside width="240px">
                <el-menu class="main-menu" :router="true" :default-active="activeLink" :unique-opened="true"
                         background-color="#393d49"
                         text-color="#e0e0e0"
                         active-text-color="#eac166">

                    <el-menu-item index="overview" :route="{'name':'overview'}">
                        <i class="fa fa-home fa-fw"></i><span class="sidebar-title">Übersicht</span>
                    </el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">
                                <i class="fa fa-map-pin fa-fw" :class="{'menu-active': routeActive('2_')}"></i><span :class="{'menu-active': routeActive('2_')}" class="sidebar-title">Standortanalyse</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2_1" :route="{'name':'2_1'}">Umsatz</el-menu-item>
                            <el-menu-item index="2_2" :route="{'name':'2_2'}">Unternehmen</el-menu-item>
                            <el-menu-item index="2_3" :route="{'name':'2_3'}">Beschäftigte</el-menu-item>
                            <el-menu-item index="2_4" :route="{'name':'2_4'}">Städte / Landkreise</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title"><i class="fa fa-chart-bar fa-fw" :class="{'menu-active': routeActive('3_')}"></i><span
                            :class="{'menu-active': routeActive('3_')}" class="sidebar-title">Zeitreihen</span></template>
                        <el-menu-item-group>
                            <el-menu-item index="3_1" :route="{'name':'3_1'}">Umsatz</el-menu-item>
                            <el-menu-item index="3_2" :route="{'name':'3_2'}">Unternehmen</el-menu-item>
                            <el-menu-item index="3_3" :route="{'name':'3_3'}">Beschäftigte</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title"><i class="fa fa-fw fa-braille" :class="{'menu-active': routeActive('4_')}"></i><span
                            :class="{'menu-active': routeActive('4_')}" class="sidebar-title">Bundesvergleich</span></template>
                        <el-menu-item-group>
                            <el-menu-item index="4_1" :route="{'name':'4_1'}">Umsatz</el-menu-item>
                            <el-menu-item index="4_2" :route="{'name':'4_2'}">Unternehmen</el-menu-item>
                            <el-menu-item index="4_3" :route="{'name':'4_3'}">Beschäftigte</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title"><i class="fa fa-th-large fa-fw " :class="{'menu-active': routeActive('5_')}"></i><span
                            :class="{'menu-active': routeActive('5_')}" class="sidebar-title">4-Länder Vergleich</span></template>
                        <el-menu-item-group>
                            <el-menu-item index="5_1" :route="{'name':'5_1'}">Umsatz</el-menu-item>
                            <el-menu-item index="5_2" :route="{'name':'5_2'}">Unternehmen</el-menu-item>
                            <el-menu-item index="5_3" :route="{'name':'5_3'}">Beschäftigte</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="6">
                        <template slot="title"><i class="fa fa-sort-amount-up fa-fw" :class="{'menu-active': routeActive('6_')}"></i><span
                            :class="{'menu-active': routeActive('6_')}" class="sidebar-title">Index-Analysen</span></template>
                        <el-menu-item-group>
                            <el-menu-item index="6_1" :route="{'name':'6_1'}">Umsatz pro Beschäftigten</el-menu-item>
                            <el-menu-item index="6_2" :route="{'name':'6_2'}">Umsatz pro Unternehmen</el-menu-item>
                            <el-menu-item index="6_3" :route="{'name':'6_3'}">Beschäftigte pro Unternehmen</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="special" v-if="false">
                        <template slot="title"><i class="fa fa-lightbulb fa-fw " :class="{'menu-active': routeActive('7_')}"></i><span
                            :class="{'menu-active': routeActive('7_')}" class="sidebar-title">Spezial-Analysen</span></template>
                        <el-menu-item-group>
                            <el-menu-item index="7_1" :route="{'name':'7_1'}">Teilmarkt-Analyse</el-menu-item>
                            <el-menu-item index="7_2" :route="{'name':'7_2'}">WZ-Klassen-Analyse</el-menu-item>
                            <el-menu-item index="7_3" :route="{'name':'7_3'}">Wettbewerbsanalyse</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="7" v-if="this.$session.get('user_type') === 1">
                        <template slot="title"><i class="fa fa-users fa-fw"></i><span class="sidebar-title">User</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1" :route="{'name':'userManagement'}">User Management</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>

                <div class="sidebar-bot footer-sidebar">
                    <div class="top20 font-sidebar">
                        <div>
                            <router-link :to="{ name: 'methoden'}">Methoden</router-link>
                            |
                            <router-link :to="{ name: 'disclaimer'}">Disclaimer</router-link>
                        </div>
                        <div>
                            <router-link :to="{ name: 'impressum'}">Impressum</router-link>
                            |
                            <router-link :to="{ name: 'kontakt'}">Kontakt</router-link>
                        </div>
                    </div>
                </div>

            </el-aside>
        </div>
    </div>
</template>

<script>

    import _ from 'lodash'

    export default {
        data() {
            return {
                activeLink: null
            }
        },
        props: {
            mobile: {
                type: Boolean,
                default: () => false
            }
        },
        watch: {
            $route(to, from) {
                this.activeLink = this.$route.matched[this.$route.matched.length - 1].name
            }
        },
        mounted: function () {
            this.activeLink = this.$route.matched[this.$route.matched.length - 1].name
        },
        methods: {
            routeActive(routeIdentifier) {
                if(this.$route.name.includes(routeIdentifier)){
                    return true;
                }
                return false;
            },
        },
    }
</script>

<style scoped>

    .menu-active{
        color: rgb(234, 193, 102) !important;
    }

    .sidebar-bot {
        text-align: center;
        margin-top: 25px;
        font-size: 12px;
        margin-bottom: 20px;
        color: #8c98b0;
    }

    .font-sidebar {
        opacity: 0.7;
    }

    .sidebar {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .sidebar.mobile {
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
        position: absolute;
    }

    .sidebar.mobile > aside {
        width: 100% !important;
    }

    .sidebar > aside {
        background-color: #393d49;
    }

    .sidebar-title {
        margin-left: 10px;
    }

    .footer-sidebar a, .footer-sidebar a:visited, .footer-sidebar a:active {
        color: #8c98b0;
    }

    .footer-sidebar a:hover {
        color: #aabad9;
    }

    .logo-sidebar {
        width: 140px;
        margin: auto;
        margin-top: 10px;
    }

</style>
