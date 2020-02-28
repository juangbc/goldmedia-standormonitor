<template>
    <div class="main-page">
        <div class="main-page-cover"></div>
        <div class="main-page-content">
            <el-row class="no-margin-top menu-bg">
                <el-col :span="gridSizeBorder"></el-col>
                <el-col :span="gridSize" :xs="24">
                    <div class="menu flexbox-nav left10">
                        <div class="element-flex">
                            <div class="logo-box">
                                <div class="logo-navbar float-left" tabindex="0">
                                    <div>
                                        <img class="full-width" :src="$pngPath"/>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <div class="login">
                <div class="login-card">
                    <el-row>
                        <el-col :span="8"></el-col>
                        <el-col :span="8">
                            <el-card>
                                <div class="login-container">
                                    <div>
                                        <h3 class="top0 bot0 subtitle-color">Login</h3>
                                    </div>
                                    <el-form label-position="top" :model="ruleForm2" :rules="rules2" ref="ruleForm2"
                                             label-width="120px">
                                        <el-form-item class="top10" label="Username" prop="username">
                                            <el-input type="text" v-model="ruleForm2.username"
                                                      autocomplete="off"></el-input>
                                        </el-form-item>
                                        <el-form-item label="Password" prop="password">
                                            <el-input type="password" @keyup.native.enter="submitForm('ruleForm2')"
                                                      v-model="ruleForm2.password"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button class="full-width top10" type="primary"
                                                       @click="submitForm('ruleForm2')">Submit
                                            </el-button>
                                        </el-form-item>

                                        <router-link class="font-13" :to="{ name: 'passwordRecovery'}">
                                            Forgot password
                                        </router-link>

                                    </el-form>

                                </div>
                            </el-card>

                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="footer-login">
            <router-link :to="{ name: 'imprint'}">
                Impressum
            </router-link>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'

    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input email'))
                } else {
                    callback()
                }
            }
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input password'))
                } else {
                    callback()
                }
            }
            var validatePass3 = (rule, value, callback) => {
                if (this.loggedIn === false) {
                    callback(new Error('Wrong password/email combination'))
                } else {
                    callback()
                }
            }
            return {
                gridSize: 18,
                gridSizeBorder: 3,
                userData: {},
                userMail: '',
                ruleForm2: {
                    username: '',
                    password: ''
                },
                rules2: {
                    username: [
                        {validator: validatePass, trigger: 'blur'}

                    ],
                    password: [
                        {validator: validatePass2, trigger: 'click'},
                        {validator: validatePass3, trigger: 'click'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                let config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                }
                axios.get(this.$apiBase + 'login', {
                    params: {
                        email: this.ruleForm2.username,
                        password: this.ruleForm2.password
                    }
                }, config)
                    .then(response => {
                        this.userData = response.data.user_data[0];
                        this.loginResp = response.data.success;
                        this.$session.start()
                        this.$session.set('email', this.userData.EML)
                        this.$session.set('user_type', this.userData.TYP)
                        this.$session.set('api_key', this.userData.api_key)


                        if (this.loginResp === true) {
                            this.$router.push({'name': 'overview'})
                            this.loggedIn = true

                        } else {
                            this.$refs[formName].validate((valid) => {
                                if (!valid) {
                                    this.ruleForm2.password = ''
                                }
                            })
                        }
                    })

            }
        }
    }
</script>

<style scoped>

    .footer-login{
        position: relative;
        padding-top: 30px;
        padding-bottom: 30px;
        z-index: 3;
        text-align: center;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.5);
    }

    .element-flex {
        width: 33%;
    }

    .align-right{
        text-align: right;
    }

    .container-mid {
        justify-content: center;
        text-align: center;
        font-size: 14px;
    }


    .flexbox-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .flexbox-nav2 {
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .nav2-item:not(:first-child) {
        margin-left: 20px;
    }

    .logo-navbar {
        color: #fff;
        max-width: 200px;
        margin-top: 5px;
    }

    .logo-box {
        height: 27px;
    }

    .logo-sup {
        margin-left: 2px;
        font-size: 10px;
    }

    .card:first-child{
        margin-top: 60px;
    }

    .card:last-child{
        margin-bottom: 150px;
    }

    .card:not(:first-child){
        margin-top: 30px;
    }

    .menu-div {
        height: 60px;
    }

    .dark-blue {
        color: #4c4c4c;
    }

    .subtitle-image-title {
        margin-top: 2.4em;
    }

    .header-menu {
        background-color: white;
    }

    .main-title {
        float: left;
        width: 100%;
        font-weight: bold;
        margin-bottom: 5px;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
        color: #000000;
        font-size: 48px;
    }

    .login-button {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        opacity: 0.94;
    }

    .login-button:hover,.login-button:active,.login-button:focus{
        background-color: white;
        opacity: 0.8;
        color: #3e301f;
        border: 1px solid #3e301f;
    }

    .subtitle-main {
        font-size: 18px;
        color: #333333;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;

    }

    .login-card {
        height: 100%;
        margin-top: 100px;
    }

    .login {
        height: 800px;
    }

    .main-page {
        background: url("https://standortmonitor.net/login/public/images/landingPageBackgroundImage.png") repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 1;
    }

    .main-page-cover{
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-30deg, #d7e8ff 0%, #ffffff 100%);
        opacity: 0.7;
        z-index: 2;
    }

    .main-page-content{
        z-index: 3;
        position: relative;
    }

    .top-image {
        max-width: 1000px;
        width: 100%;
    }

    @media (max-width: 1300px) {

        .subtitle {
            margin-bottom: unset;
            color: #455a64;
            font-size: 2em;
        }

        .landing-page-textbox {
            margin-left: unset !important;
            font-size: 1em;
        }
    }

    @media (max-width: 1700px) {
        .subtitle {
            margin-bottom: unset;
            color: #455a64;
            font-size: 2em;
        }
    }

    .beta-container span {
        font-size: 10px !important;
        margin-top: 10px !important;
    }

    @media (max-width: 750px) {

        .font-16 {
            font-size: 13px;
        }

        .landing-page-column {
            width: 100%;
        }

        .subtitle {
            font-size: 1em !important;
        }

        .subtitle-main {
            font-size: 0.8em !important;
        }

        .landing-page-textbox {
            font-size: 0.8em !important;
        }

        .navbar-subtitle {
            margin-left: 10px;
            padding: unset !important;
        }
    }

    .navbar-subtitle {
        float: right;
        font-weight: 600;
        padding: .7em 1em;
    }

    .landing-page-column {
        padding: 8px;
    }

    .landing-page-textbox {
        font-size: 1.2em;;
        line-height: 1.6;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
        color: #4c4c4c;
        margin-left: -10%;
        padding-right: 15px;
        padding-top: 5px;
        padding-bottom: 15px;
    }

    .subtitle {
        margin-bottom: 5px;
        font-weight: bold;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
        color: #333333;
        font-size: 36px;
        padding-top: 5px;
        padding-left: 15px;
    }

    .subtitle-color{
        color: #455a64;
    }

    .padding-left-box{
        padding-left: 7px;
        padding-right: 7px;
    }

    .landing-page-image {
        width: 100%;
    }

    .gm-blau {
        color: #5C7A96;
    }

    ul.el-menu-demo.el-menu--horizontal.el-menu {
        border-bottom: 0 !important;
    }

    .menu-bg {
        background-color: #ab8852;
    }

    .menu {
        background-color: #ab8852;
        color: #fff;
        height: 39px;
    }

    .z-index-logo {
        z-index: 2;
        position: relative;
    }

    .image {
        position: relative;
        width: 100%;
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

    .image-title {
        padding: 3px;
    }

    .el-row {
        margin-top: 5px;
    }

</style>
