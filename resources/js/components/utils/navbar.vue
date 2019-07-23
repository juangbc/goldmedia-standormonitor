/* eslint-disable */

<template>
    <div>
        <ul role="menubar" class="el-menu-demo el-menu--horizontal el-menu menu container-flex">
            <div class="element-flex">
                <div class="container-logo">
                <div class="logo-navbar navbar float-left" tabindex="0">
                <router-link :to="{ name: 'home'}">
                    <img class="full-width" :src="$pngPath"/>
                </router-link>
            </div>
                </div>
                <div class="beta-container">
            <span>
                BETA
            </span>
                </div>
            </div>
<div class="element-flex container-flex container-flex2">
    <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu flex-item2">
                <div @click="openSettings" class="el-submenu__title">
                    <span>
                    <i class="white fa fa-fw fa-cog black"></i>
                    <span class="white"> Default settings</span>
                    </span>
                </div>
            </li>
            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu flex-item2">
                <el-dropdown @command="handleRoute">
                    <div class="el-submenu__title">
                    <span>
                      <i class="fa fa-fw fa-user"></i>
                      <span class="white">{{userMail}}</span>
                      <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
                    </span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="changePassword"><i class="fa fa-key"></i> Change password
                        </el-dropdown-item>
                        <el-dropdown-item command="logout"><i class="fa fa-sign-out-alt"></i> Logout</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
</div>
        </ul>

        <div>
            <el-menu class="el-menu-demo header-menu" mode="horizontal">
                <div class="menu-div">

                    <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                        tabindex="0">
                        <router-link class="font-16 dark-blue" :to="{ name: 'about'}">
                            About
                        </router-link>
                    </li>

                    <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                        tabindex="0">
                        <router-link class="font-16 dark-blue" :to="{ name: 'cases'}">
                            Cases
                        </router-link>
                    </li>

                </div>
            </el-menu>

        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                userMail: '',
                tabActive: 0,
                selectionMonth: null,
                defaultSettings: {
                    expanded: false,
                    dates: [null, null],
                    calc: null,
                    admin: null,
                    market: null,
                    mobile: false
                },
                adminOptions: [
                    {'caption': 'no', 'key': 0},
                    {'caption': 'yes', 'key': 1}
                ]
            }
        },
        props: {
            mobile: {
                type: Boolean,
                default: () => false
            },
            data: {
                type: Boolean,
                default: () => false
            }
        },
        methods: {
            handleClick(tab) {
                this.tabActive = tab.index * 1
            },
            logout() {
                axios
                    .get(this.$apiBase + 'logout')
                    .then(response => {
                        this.$router.push({'name': 'loginPage'});
                    })
            },
            openSettings() {
                this.$router.push({'name': 'settings'})
            },
            handleRoute(route) {
                if (route === 'logout') {
                    this.logout()
                } else {
                    this.$router.push({'name': route})
                }
            },
            close() {
                this.defaultSettings.expanded = false
                this.$notify({
                    title: 'Success',
                    message: 'Successfully saved default settings',
                    type: 'success'
                })

            },
            saveChanges() {

            }
        },
        mounted() {
            this.userMail = this.$session.get('email');
            this.userType = this.$session.get('user_type');
            if (this.$session.exists() === false) {
                this.logout();
            }
        },
        watch: {}
    }
</script>

<style scoped>

    .element-flex {
        width: 50%;
    }

    .container-flex {
        display: flex;
    }

    .logo-navbar {
        width: 100%;
        max-width: 200px;
        padding: 20px 10px 8px 20px;
    }

    ul.el-menu-demo.el-menu--horizontal.el-menu {
        border-bottom: 0 !important;
    }

    .el-menu {
        background-color: #ab8852;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__title:hover, .el-submenu__title:focus {
        background-color: #eac166 !important;
        color: #6b6b6b !important;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__title {
        color: #f2f2f2 !important;
    }

    .el-submenu__title {
        padding: 0;
    }

    .beta-container span {
        font-size: 10px !important;
        margin-top: 10px !important;
    }

    @media (max-width: 800px) {

        .white {
            font-size: 0.7em;
        }

        .logo-navbar {
            padding-left: 0.3em;
            padding-top: 1.2em;
        }


        .font-16 {
            font-size: 13px;
        }

        .navbar-subtitle {
            margin-left: 10px;
            padding: unset !important;
        }

        .menu-div {
            margin-left: 15%;
            height: 30px;
        }
    }

    .container-flex2 {
        justify-content: flex-end;
    }

    .flex-item2 {
        width: 150px;
    }

    .white {
        color: #ffffff;
    }

    .el-submenu__title * {
        vertical-align: unset;
    }

    .container-logo {
        width: 50%;
    }

    .el-submenu__icon-arrow {
        position: unset;
        top: unset;
        right: unset;
        margin-top: -7px;
        transition: -webkit-transform .3s;
        transition: transform .3s, -webkit-transform .3s;
        font-size: 12px;
    }
    .menu-div {
        height: 50px;
        float: left;
        margin-left: 1%;
    }

    .menu {
        background-color: #ab8852;
        color: #fff;
        height: 55px;
    }

    .dark-blue {
        color: #4c4c4c;
    }

    .header-menu {
        padding: 0;
        margin: 0 0 1px -1em;
        font-family: Frutiger LT W04_65 Bold, Helvetica, Arial, sans-serif;
        color: #455a64;
        font-size: 1.3rem;
        background: #fff !important;
    }

    .navbar-subtitle {
        float: right;
        font-weight: 600;
        padding: .7em 1em;
    }

    .logo-navbar {
        padding: 20px 10px 8px 20px;
        color: #fff;
        max-width: 200px;
    }

    ul.el-menu-demo.el-menu--horizontal.el-menu {
        border-bottom: 0 !important;
    }

    .el-menu {
        background-color: #ab8852;
    }

    .beta-container span {
        font-size: 10px !important;
        margin-top: 10px !important;
    }

    h2 {
        width: 100%;
        position: absolute;
        top: -18px;
    }

    h2 span {
        color: #455a64;
        letter-spacing: -1px;
        background: rgba(255, 255, 255, .8);
        font: bold 15px/30px Helvetica, Sans-Serif;
        padding: 10px;
    }

</style>
