/* eslint-disable */

<template>
    <div>
        <ul role="menubar" class="el-menu-demo el-menu--horizontal el-menu menu container-flex">
            <div class="element-flex flexbox-nav">
                <div class="logo-box">
                    <div class="control-box float-left">
                        <el-tooltip effect="dark" content="Toggle sidebar" placement="top-start">
                            <i class="fas fa-bars pointer" @click="sidebarCollapsed.val = !sidebarCollapsed.val"></i>
                        </el-tooltip>
                    </div>
                    <div class="logo-navbar float-left" tabindex="0">
                        <router-link :to="{ name: 'home'}">
                            <img class="full-width" :src="$pngPath"/>
                        </router-link>
                    </div>
                    <div class="logo-sup float-left">
                        BETA
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>
            <div class="element-flex container-flex container-flex2">
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
                            <el-dropdown-item command="logout"><i class="fa fa-sign-out-alt"></i> Logout
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </div>
        </ul>
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
            },
            sidebarCollapsed:{}
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

    .control-box{
        margin-left: 20px;
        margin-top: 4px;
        margin-right: 10px;
    }

    .flexbox-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-navbar {
        width: 100%;
        max-width: 192px;
        margin-top: 5px;
    }

    .logo-box {
        height: 27px;
    }

    .logo-sup {
        margin-left: 2px;
        font-size: 10px;
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
        display: flex;
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
        font-weight: 600;
        padding: .7em 1em;
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
