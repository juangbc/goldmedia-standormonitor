<template>
    <div id="app">
        <vue-headful
                title="Standortmonitor"
                description="Goldmedia Standortmonitor"
        />

        <link rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
              integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
              crossorigin="anonymous">

        <router-view/>

        <div class="tooltip" style="display: none"></div>
    </div>

</template>

<script>
    import VueSession from 'vue-session'
    import Vue from 'vue'

    Vue.use(VueSession)

    export default {
        userMail: '',
        name: 'app',
        data () {
            return {
                userData :{},
                window: {
                    width: 0,
                    height: 0
                },
            }
        },
    }

</script>

<style>

    body {
        height: 100%;
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    html {
        height: 100%;
    }

    .el-table thead {
        color: #909399 !important;
    }

    .el-col {
        min-height: 1px;
    }

    .nowrap {
        white-space: nowrap;
    }

    .center-div {
        margin: 0 auto;
    }

    .full-width {
        width: 100%;
    }

    .full-width-2 {
        width: 101%;
    }

    .logo-font {
        font-size: 25px;
        color: white;
    }

    .main {
        border-left: solid 1px #e6e6e6;
        background-color: white;
    }

    .el-menu {
        border-right: none !important;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .btn-download {
        padding: 4px 5px 4px 5px !important;
        font-size: 11px !important;
        font-weight: 400 !important;
    }

    .font-light-grey {
        color: #7c7f84;
    }

    .el-card__body {
        padding: 10px !important;
    }

    .el-aside {
        color: white;
    }

    .pointer {
        cursor: pointer;
    }

    .bot10 {
        margin-bottom: 10px;
    }

    .bot5 {
        margin-bottom: 5px;
    }

    .top10 {
        margin-top: 10px;
    }

    .top15 {
        margin-top: 15px;
    }

    .top20 {
        margin-top: 20px;
    }

    .top5 {
        margin-top: 5px;
    }

    .right5 {
        margin-right: 5px;
    }

    .left5 {
        margin-left: 5px !important;
    }

    .float-left {
        float: left;
    }

    .float-right {
        float: right;
    }

    .clearfix {
        display: block;
        content: "";
        clear: both;
    }

    .el-menu--horizontal .el-submenu > .el-menu {
        left: initial !important;
        right: 0 !important;
    }

    .no-margin-top {
        margin-top: 0;
    }

    .no-margin-bot {
        margin-bottom: 0;
    }

    .card-header-aligned > div.el-card__header {
        padding: 10px;
    }

    .font-11 {
        font-size: 11px;
    }

    .font-12 {
        font-size: 12px;
    }

    .font-13 {
        font-size: 13px;
    }


    .font-16 {
        font-size: 16px;
    }

    .font-20 {
        font-size: 20px;
    }


    li:not(:first-child) > .el-menu-item-group__title {
        padding-top: 15px;
    }

    .image-small-row {
        max-width: 80px;
    }

    .el-table-custom {
        overflow: scroll !important;
    }

    .el-table .cell {
        word-break: break-word !important;
    }

    #app {
        height: 100%;
    }

    .el-collapse-item__arrow {
        margin: unset;
    }

</style>
