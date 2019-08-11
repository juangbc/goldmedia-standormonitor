<template>
    <div class="footer-main">
        <el-menu class="el-menu-demo header-menu" mode="horizontal">
            <div class="menu-div">
                <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                    tabindex="1">
                    <router-link class="font-16 dark-blue" :to="{ name: 'methoden'}">
                        Methoden
                    </router-link>
                </li>

                <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                    tabindex="2">
                    <router-link class="font-16 dark-blue" :to="{ name: 'faq'}">
                        Faq
                    </router-link>
                </li>

                <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                    tabindex="3">
                    <router-link class="font-16 dark-blue" :to="{ name: 'disclaimer'}">
                        Disclaimer
                    </router-link>
                </li>

                <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                    tabindex="4">
                    <router-link class="font-16 dark-blue" :to="{ name: 'impressum'}">
                        Impressum
                    </router-link>
                </li>

                <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle"
                    tabindex="5">
                    <router-link class="font-16 dark-blue" :to="{ name: 'kontakt'}">
                        Kontakt
                    </router-link>
                </li>

            </div>
        </el-menu>

    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>

    .footer-main {
        background-color: #1a1768;
    }
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