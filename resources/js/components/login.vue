<template>
    <div class="main-page">
        <div class="main-page-cover"></div>
        <div class="main-page-content">
            <el-row class="no-margin-top menu-bg">
                <el-col :span="gridSizeBorder"></el-col>
                <el-col :span="gridSize" :xs="24">
                    <div class="menu flexbox-nav left10">
                        <div class="logo-box">
                            <div class="logo-navbar float-left" tabindex="0">
                                <div>
                                    <img class="full-width" :src="$pngPath"/>
                                </div>
                            </div>
                            <div class="logo-sup float-left">
                                BETA
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="right5">
                            <el-button size="small" v-if="!loginClicked" class="login-button" @click="loginClick">
                                Login
                            </el-button>
                            <el-button size="small" v-if="loginClicked" class="login-button" @click="returnLanding">
                                Go Back
                            </el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div v-if="!loginClicked" class="header-menu">
                <el-row class="no-margin-top">
                    <el-col :span="gridSizeBorder"></el-col>
                    <el-col :span="gridSize" :xs="24">
                        <div class="flexbox-nav2 left10">
                            <div class="nav2-item">
                                <router-link :to="{ name: 'about'}">
                                    About
                                </router-link>
                            </div>
                            <div class="nav2-item">
                                <a href="#methodik">Methodik</a>
                            </div>
                            <div class="nav2-item">
                                <router-link :to="{ name: 'cases'}">
                                    Cases
                                </router-link>
                            </div>
                            <div class="nav2-item">
                                <a href="#kontakt">Kontakt</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>

            </div>


            <div v-if="!loginClicked">
                <el-row>
                    <el-col :span="gridSizeBorder"></el-col>
                    <el-col :span="gridSize" :xs="24">

                        <el-card class="card">
                            <div class="gm-blau">
                                <div class="main-title">
                                    STANDORTMONITOR
                                </div>
                                <div class="subtitle-main">
                                    MEDIEN- UND KREATIVSTANDORTE IN DEUTSCHLAND.<br>
                                    LAUFEND AKTUALISIERTE DATEN, FAKTEN, GRAFIKEN INTERAKTIV
                                </div>
                            </div>
                            <div>
                                <img class="top-image" :src="$pngLandingPage"/>
                            </div>
                        </el-card>


                        <el-card class="card">
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div class="subtitle">Standortmonitoring <br>als interaktive <br> Datenbank</div>
                            </el-col>
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div class="landing-page-textbox">
              <span>
              Der Goldmedia Standortmonitor aggregiert erstmals belastbare Zahlen und Fakten für alle Regionen und alle Teilmärkte der
              gesamten Kreativwirtschaft in Deutschland von der Länderperspektive bis auf die Ebene der Städte und Landkreise.

              Das Kompendium an Daten und Fakten ist als interaktive digitale Datenbank aufbereitet und wird laufend um neue Daten ergänzt. Die gesamtwirtschaftliche
              Bedeutung der Medien- und Kreativindustrien geht weit über die Kernbranche hinaus und hat Effekte auf vor- und nachgelagerte Märkte.
              Sie sind Impulsgeber für Innovationen und Wirtschaftswachstum.
              </span>
                                </div>
                            </el-col>
                        </el-card>

                        <el-card class="card">

                            <div class="subtitle">Referenzen und Studien</div>
                            <div class="padding-left-box">
                                <el-col class="landing-page-column" :span="8">
                                    <a href="https://www.goldmedia.com/aktuelles/info/article/mehr-beschaeftigte-mehr-umsatz-medienstandort-bayern-attraktiv-fuer-alle-branchen/"
                                       target="_blank">
                                        <div class="image">
                                            <img class="landing-page-image" :src="$pngStandortstudieBayern" alt/>
                                            <h2 class="image-title"><span>Medienstandort Bayern 2019</span></h2>
                                        </div>
                                    </a>
                                </el-col>

                                <el-col class="landing-page-column" :span="8">
                                    <a href="https://www.goldmedia.com/produkt/study/produzentenstudie-2018/"
                                       target="_blank">
                                        <div class="image">
                                            <img class="landing-page-image" :src="$pngFilmproduktion" alt/>
                                            <h2 class="image-title"><span>Produzentenstudie 2018</span></h2>
                                        </div>
                                    </a>
                                </el-col>
                                <el-col class="landing-page-column" :span="8">
                                    <a href="https://www.goldmedia.com/aktuelles/info/article/audio-visuelle-medien-in-nordrhein-westfalen-standortstudie-fuer-das-mediennetzwerkesnrw/"
                                       target="_blank">
                                        <div class="image">
                                            <img class="landing-page-image" :src="$pngStandortstudieNRW" alt/>
                                            <h2 class="image-title"><span>AV-Medienstandort NRW 2019</span></h2>
                                        </div>
                                    </a>
                                </el-col>
                            </div>

                            <div class="padding-left-box">
                                <el-col class="landing-page-column" :span="8">
                                    <a href="https://wila-rundfunk.de/" target="_blank">
                                        <div class="image">
                                            <img class="landing-page-image" :src="$pngStandortstudieWila" alt/>
                                            <h2 class="image-title"><span>Wirtschaftliche</span></h2>
                                            <h2 class="image-title subtitle-image-title"><span>Lage des Rundfunks</span>
                                            </h2>
                                        </div>
                                    </a>
                                </el-col>
                                <el-col class="landing-page-column" :span="8">
                                    <a href="https://www.bmwi.de/Redaktion/DE/Publikationen/Studien/bedeutung-filmindustrie.pdf?__blob=publicationFile&v=18"
                                       target="_blank">
                                        <div class="image">
                                            <img class="landing-page-image" :src="$pngStandortWirtschaftlicheBedeutungFilm"
                                                 alt/>
                                            <h2 class="image-title"><span>Wirtschaftliche Bedeutung</span></h2>
                                            <h2 class="image-title subtitle-image-title">
                                                <span>der Filmindustrie in Deutschland</span></h2>
                                        </div>
                                    </a>
                                </el-col>
                                <el-col class="landing-page-column" :span="8">
                                    <a href="https://www.goldmedia.com/fileadmin/goldmedia/2015/Studien/2017/Standortstudie_HH/Goldmedia_Standortstudie_FFHSH_2017_dt.pdf"
                                       target="_blank">
                                        <div class="image">
                                            <img class="landing-page-image" :src="$pngStandortstudieBewegtbild" alt/>
                                            <h2 class="image-title"><span>Standortstudie: Bewegtbildbranche</span></h2>
                                            <h2 class="image-title subtitle-image-title"><span> in Hamburg und Schleswig-Holstein 2017</span>
                                            </h2>
                                        </div>
                                    </a>

                                </el-col>
                            </div>

                        </el-card>

                        <el-card class="card">
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div class="subtitle">Standortmonitoring</div>
                            </el-col>
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div class="landing-page-textbox">
                                    Die Kreativwirtschaft ist ein wichtiger Wirtschaftsfaktor und wertet das Image einer
                                    Region
                                    stark auf.
                                    Bundesländer und Kommunen sind daher bemüht, die eigene Stellung als Medien- und
                                    Kreativhochburg auszubauen
                                    und mit Anreizen die Ansiedlung von Medienunternehmen und innovativen Kreativindustrien
                                    zu
                                    befördern.
                                    Daten und Fakten zu Standortfragen sind das Einmaleins für die Entwicklung von Regionen
                                    und
                                    Unternehmensentscheidungen.
                                </div>
                            </el-col>
                        </el-card>

                        <el-card class="card">
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div id="methodik" class="subtitle">Methodik <br> und Inhalte</div>
                            </el-col>
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div class="landing-page-textbox">
                                    Der Goldmedia Standortmonitor basiert auf aktuellen Daten des Statistischen Bundesamts,
                                    der
                                    Statistischen
                                    Landesämter und der Bundesagentur für Arbeit sowie der Künstlersozialkasse und weiterer
                                    ausgewählter
                                    Primärstudien. Die Daten werden individuell zusammengestellt und durch Goldmedia
                                    aggregiert.
                                    Der Standmonitor
                                    enthält Zeitreihen-Daten ab 2013 bis zum jeweils aktuellsten verfügbaren Zeitpunkt der
                                    Daten. Alle Daten werden
                                    kontinuierlich aktualisiert, so dass alle Informationen stets auf dem neuesten Stand
                                    sind.
                                    Der Goldmedia Standmonitor
                                    wird sukzessive erweitert um Daten aus Goldmedia Primärdatenerhebungen sowie
                                    Sekundärdatenerhebungen und Daten von Branchenverbänden.
                                </div>
                            </el-col>
                        </el-card>

                        <el-card class="card">
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div id="kontakt" class="subtitle">Kontaktieren <br>Sie uns!</div>
                            </el-col>
                            <el-col :sm="24" :xs="24" :md="12" :lg="12">
                                <div class="landing-page-textbox">
                                    Ihre Ansprechpartner sind <a href="mailto:mathias.birkel@goldmedia.de">Mathias
                                    Birkel</a>
                                    und
                                    <a href="mailto:klaus.goldhammer@goldmedia.de">Prof. Dr. Klaus Goldhammer</a>
                                    oder telefonisch: 030-2462660. Gern präsentieren wir Ihnen die Vorteile und
                                    Möglichkeiten
                                    des Standortmonitors.
                                </div>
                            </el-col>
                        </el-card>

                    </el-col>
                </el-row>
            </div>


            <div v-if="loginClicked" class="login">
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
                loginClicked: false,
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
            loginClick() {
                this.loginClicked = true;
            },
            returnLanding() {
                this.loginClicked = false;
            },
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
console.log(this.$session.getAll());


                        if (this.loginResp === true) {
                            this.$router.push({'name': 'home'})
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
        background: url("http://standortmonitor.net/images/landingPageBackgroundImage.png") repeat center center fixed;
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
        height: 50px;
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
