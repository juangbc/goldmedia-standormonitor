/* eslint-disable */

<template>
    <div>
        <ul role="menubar" class="el-menu-demo el-menu--horizontal el-menu">
            <div class="logo-navbar navbar float-left" tabindex="0">
                <router-link :to="{ name: 'home'}">
                    <img class="full-width" :src="$pngPath"/>
                </router-link>
            </div>
            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu" tabindex="0"
                style="float: right">
                <div @click="openSettings" class="el-submenu__title" style="border-bottom-color: transparent;">
                    <i class="fa fa-fw fa-cog black"></i><span> Default settings</span>
                </div>
            </li>
            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu" tabindex="0"
                style="float: right">
                <el-dropdown @command="handleRoute">
                    <div class="el-submenu__title" style="border-bottom-color: transparent;">
            <span>
              <i class="fa fa-fw fa-user"></i>
              <span>{{userMail}}</span>
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
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        computed: {
            pickerOptions2: function () {
                let x = 0
                return x
            }
        },
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
            getSession () {
            },
            handleClick(tab) {
                this.tabActive = tab.index * 1
            },
            logout() {
                axios
                    .get(this.$apiBase + 'logout')
                        .then(response => {
                            this.$router.push({'name': 'loginPage'})
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
            this.userMail = this.$session.get('email')
        },
        watch: {
        }
        }
</script>

<style scoped>
    .logo-navbar {
        width: 200px;
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

    #navbar-mobile-button {
        background-color: #ab8852;
        color: #fff;
        border-color: #fff;
    }

    @media only screen and (max-width: 800px) {
        .mobile-submenus {
            float: left !important;
        }
    }
</style>
