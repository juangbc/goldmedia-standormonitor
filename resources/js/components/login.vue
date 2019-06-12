<template>
  <div>

      <el-menu class="menu" style="color: white">
          <div class="float-left logo-navbar navbar float-left" tabindex="0">
              <img class="full-width" :src="$pngPath"/>
          </div>
        <div>
          <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu" tabindex="0"
              style="float: right" v-if="!loginClicked">
            <el-button type="text" style="float: right; font-style: inherit; padding: 20px; color: white" @click="loginClick">
            <span style="font-size: 16px">Login</span>
          </el-button>
          </li>
          <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu" tabindex="0"
              style="float: right" v-if="loginClicked">
            <el-button type="text" style="float: right; font-style: inherit; padding: 20px; color: white" @click="returnLanding">
              <span style="font-size: 16px">Return</span>
            </el-button>
          </li>
          </div>
      </el-menu>
    <div>
      <el-menu style="background-color: whitesmoke; color: #1b4b72" class="el-menu-demo" mode="horizontal">
          <div>

            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle" tabindex="0"
                v-if="!loginClicked">
              <router-link class="font-13" :to="{ name: 'about'}">
                ABOUT
              </router-link>
            </li>

            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle" tabindex="0"
                v-if="!loginClicked">
              <router-link class="font-13" :to="{ name: 'methodik'}">
                METHODIK
              </router-link>
            </li>

            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle" tabindex="0"
                v-if="!loginClicked">
              <router-link class="font-13" :to="{ name: 'cases'}">
                CASES
              </router-link>
            </li>

            <li role="menuitem" aria-haspopup="true" class="mobile-submenus el-submenu navbar-subtitle" tabindex="0" v-if="!loginClicked">
              <router-link class="font-13" :to="{ name: 'contact'}">
                KONTAKT
              </router-link>
            </li>
          </div>
      </el-menu>

    </div>


    <div v-if="!loginClicked">

<div style="width: 70%;
    padding-left: 15%;
    padding-top: 5%;">
  <el-row>
    <el-card>
        <div class="title gm-blau" style="color: #5C7A96; font-weight: 600;">
          <div class="gm-blau" style="font-size: 30px; float: left; width: 100%">
            STANDORTMONITOR
          </div>
          <div style="font-size: 20px; float: left; width: 100%;">
            Medienstandorte in Deutschland. Daten, Fakten, Grafiken interaktiv
          </div>
        </div>
      <div>
          <img class="landing-page-title-image" :src="$pngLandingPage"/>
      </div>
    </el-card>
  </el-row>

  <el-row>
        <el-card>
          <el-col :sm="24" :xs="24" :md="12" :lg="10">
            <div class="gm-blau subtitle" style="font-size: 20px;">Standortmonitoring als interaktive Datenbank</div>
            <div class="landing-page-textbox">
              Der Goldmedia Standortmonitor aggregiert erstmals belastbare Zahlen und Fakten für alle Regionen und alle Teilmärkte der Medienbranche in Deutschland.
              Das Kompendium an Daten und Fakten ist als interaktive digitale Datenbank aufbereitet.

              Die gesamtwirtschaftliche Bedeutung der Medienindustrie geht weit über die Kernbranche hinaus und hat Effekte auf vor- und nachgelagerte Märkte.
              Sie sind Impulsgeber für Innovationen und Wirtschaftswachstum.
            </div>
          </el-col>
        </el-card>
      </el-row>

      <el-row>
        <el-card>

            <div class="gm-blau subtitle" style="font-size: 20px;">Referenzen und Studien</div>
            <div>
              <el-col class="landing-page-column" :span="8">
                <a href="https://www.goldmedia.com/aktuelles/info/article/mehr-beschaeftigte-mehr-umsatz-medienstandort-bayern-attraktiv-fuer-alle-branchen/" target="_blank">
                  Standort Bayern
                </a>
                <img class="landing-page-image" :src="$pngStandortstudieBayern"/>
              </el-col>
              <el-col class="landing-page-column" :span="8">
                <a href="https://www.goldmedia.com/produkt/study/produzentenstudie-2018/" target="_blank">
                  Produzentenstudie 2018
                </a>
                <img class="landing-page-image" :src="$pngFilmproduktion"/>
              </el-col>
              <el-col class="landing-page-column" :span="8">
                <a href="https://www.goldmedia.com/aktuelles/info/article/audio-visuelle-medien-in-nordrhein-westfalen-standortstudie-fuer-das-mediennetzwerkesnrw/" target="_blank">
                  Audio-visuelle Medien in NRW
                </a>
                <img class="landing-page-image" :src="$pngStandortstudieNRW"/>
              </el-col>
            </div>

        </el-card>
      </el-row>

      <el-row>
        <el-card>
          <el-col :sm="24" :xs="24" :md="12" :lg="10">
            <div class="gm-blau subtitle" style="font-size: 20px;">Standortmonitoring</div>
            <div class="landing-page-textbox">
              Die Medienbranche ist ein wichtiger Wirtschaftsfaktor und wertet das Image einer Region stark auf. Die Bundesländer sind daher bemüht,
              die eigene Stellung als Medienhochburg auszubauen und mit Anreizen die Ansiedlung von Medienunternehmen und innovativen Kreativindustrien zu befördern.
              Daten und Fakten zu Standortfragen sind das Einmaleins für die Entwicklung von Regionen und Unternehmensentscheidungen.
            </div>
            </el-col>
        </el-card>
      </el-row>

      <el-row style="margin-bottom: 30px;">
        <el-card>
          <el-col :sm="24" :xs="24" :md="12" :lg="10">
            <div class="gm-blau subtitle" style="font-size: 20px;">Methodik und Inhalte </div>
            <div class="landing-page-textbox">
              Der Goldmedia Standortmonitor basiert auf aktuellen Daten des Statistischen Bundesamts, der Statistischen Landesämter
              und der Bundesagentur für Arbeit. Die Daten wurden auf Goldmedia-Anfrage individuell durch die Ämter zusammengestellt
              und aggregiert.

              Der Standmonitor enthält Zeitreihen-Daten ab 2013 bis zum jeweils aktuellsten verfügbaren Zeitpunkt der Daten und wird kontinuierlich aktualisiert.
              Der Goldmedia Standmonitor wird sukzessive erweitert um Daten aus Goldmedia Primärdatenerhebungen sowie Sekundärdatenerhebungen und Daten von Branchenverbänden.
            </div>
            </el-col>
        </el-card>
      </el-row>

    </div>
    </div>

    <div v-if="loginClicked">
      <el-row style="margin-top: 100px">
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <el-card>
            <div class="login-container">
              <div>
                <div class="logo-container center-div">
                  <div class="bg-div-logo bg-primary"></div>
                </div>
              </div>
              <el-form label-position="top" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px">
                <el-form-item class="top10" label="Username" prop="username">
                  <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                  <el-input type="password" @keyup.native.enter="submitForm('ruleForm2')"
                            v-model="ruleForm2.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="full-width top10" type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
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
</template>
<script>

  import axios from 'axios'

  export default {
    data () {
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
        userData : {},
        userMail : '',
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
      submitForm (formName) {
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

  .navbar-subtitle {
    float: right;
    margin-left: 20px;
    font-weight: bold;
    padding: 5px;
  }

  .landing-page-column {
    padding: 1%;
  }

  .landing-page-title-image {
    max-width: 700px;
  }

  .landing-page-textbox {
    padding-bottom: 10px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 5px;
  }

  .landing-page-image {
    width: 100%;
    margin-top: 5px;
  }
  .gm-blau {
    color: #5C7A96;
  }

  .logo-navbar {
    width: 200px;
    padding: 20px 10px 8px 20px;
    color: #fff;
  }

  ul.el-menu-demo.el-menu--horizontal.el-menu {
    border-bottom: 0 !important;
  }

  .el-menu {
    background-color: #ab8852;
  }

  .menu {
    background-color: #ab8852;
    color: #fff;
    height: 50px;
  }

  .logo-container {
    width: 150px;
    position: relative;
  }

  .z-index-logo {
    z-index: 2;
    position: relative;
  }

  .bg-div-logo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 10px;
    z-index: 1;
  }

  .el-row {
    margin-top: 10px;
  }

</style>
