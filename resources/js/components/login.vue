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


      <span>
        <img style="width: 100%" :src="$pngLandingPageBackground"/>
      </span>
      <span>
        <img style="width: 100%;margin-top: -0.1em;" :src="$pngLandingPageBackground"/>
      </span>

<div style="width: 70%;
    padding-left: 15%;
    padding-top: 5%;
margin-top: -130%;">
  <el-row>
    <el-card>
        <div class="gm-blau" style="color: #5C7A96; font-weight: 600;">
          <div class="subtitle-images" style="float: left; width: 100%">
            STANDORTMONITOR
          </div>
          <div style="font-size: 20px; float: left; width: 100%;">
            Medien- und Kreativstandorte in Deutschland.<br>
            Laufend aktualisierte Daten, Fakten, Grafiken interaktiv
          </div>
        </div>
      <div>
        <img class="top-image" :src="$pngLandingPage"/>
      </div>
    </el-card>
  </el-row>

  <el-row>
        <el-card>
          <el-col :sm="24" :xs="24" :md="12" :lg="12">
            <div class="subtitle">Standortmonitoring <br>als interaktive <br> Datenbank</div>
          </el-col>
            <el-col :sm="24" :xs="24" :md="12" :lg="12">
            <div class="landing-page-textbox">
              <span style="font-family: Frutiger LT W04_45 Light,Helvetica,Arial,sans-serif;">
              Der Goldmedia Standortmonitor aggregiert erstmals belastbare Zahlen und Fakten für alle Regionen und alle Teilmärkte der
              gesamten Kreativwirtschaft in Deutschland von der Länderperspektive bis auf die Ebene der Städte und Landkreise.

              Das Kompendium an Daten und Fakten ist als interaktive digitale Datenbank aufbereitet und wird laufend um neue Daten ergänzt. Die gesamtwirtschaftliche
              Bedeutung der Medien- und Kreativindustrien geht weit über die Kernbranche hinaus und hat Effekte auf vor- und nachgelagerte Märkte.
              Sie sind Impulsgeber für Innovationen und Wirtschaftswachstum.
              </span>
            </div>
          </el-col>
        </el-card>
      </el-row>

      <el-row>
        <el-card>

            <div class="subtitle-images">Referenzen und Studien</div>
            <div>
              <el-col class="landing-page-column" :span="8">
                <a href="https://www.goldmedia.com/aktuelles/info/article/mehr-beschaeftigte-mehr-umsatz-medienstandort-bayern-attraktiv-fuer-alle-branchen/" target="_blank">
                  <div class="image">
                    <img class="landing-page-image" :src="$pngStandortstudieBayern" alt/>
                    <h2 class="image-title"><span>Medienstandort Bayern 2019</span></h2>
                  </div>
                </a>
              </el-col>

              <el-col class="landing-page-column" :span="8">
                <a href="https://www.goldmedia.com/produkt/study/produzentenstudie-2018/" target="_blank">
                  <div class="image">
                    <img class="landing-page-image" :src="$pngFilmproduktion" alt/>
                    <h2 class="image-title"><span>Produzentenstudie 2018</span></h2>
                  </div>
                </a>
              </el-col>
              <el-col class="landing-page-column" :span="8">
                <a href="https://www.goldmedia.com/aktuelles/info/article/audio-visuelle-medien-in-nordrhein-westfalen-standortstudie-fuer-das-mediennetzwerkesnrw/" target="_blank">
                  <div class="image">
                    <img class="landing-page-image" :src="$pngStandortstudieNRW" alt/>
                    <h2 class="image-title"><span>AV-Medienstandort NRW 2019</span></h2>
                  </div>
                </a>
              </el-col>
            </div>

        </el-card>
      </el-row>

  <el-row>
    <el-card>

      <div>
        <el-col class="landing-page-column" :span="8">
          <a href="https://wila-rundfunk.de/" target="_blank">
            <div class="image">
              <img class="landing-page-image" :src="$pngStandortstudieWila" alt/>
              <h2 class="image-title"><span>Wirtschaftliche</span></h2>
              <h2 class="image-title" style="margin-top: 2.4em;"><span>Lage des Rundfunks</span></h2>
            </div>
             </a>
        </el-col>
        <el-col class="landing-page-column" :span="8">
          <a href="https://www.goldmedia.com/fileadmin/goldmedia/2015/Studien/2017/Standortstudie_HH/Goldmedia_Standortstudie_FFHSH_2017_dt.pdf" target="_blank">
            <div class="image">
              <img class="landing-page-image" :src="$pngStandortWirtschaftlicheBedeutungFilm" alt/>
              <h2 class="image-title"><span>Wirtschaftliche Bedeutung</span></h2>
              <h2 class="image-title" style="margin-top: 2.4em;"><span>der Filmindustrie in Deutschland</span></h2>
            </div>
          </a>
        </el-col>
        <el-col class="landing-page-column" :span="8">

          <a href="https://www.bmwi.de/Redaktion/DE/Publikationen/Studien/bedeutung-filmindustrie.pdf?__blob=publicationFile&v=18" target="_blank">
            <div class="image">
              <img class="landing-page-image" :src="$pngStandortstudieBewegtbild" alt/>
              <h2 class="image-title"><span>Standortstudie: Bewegtbildbranche</span></h2>
              <h2 class="image-title" style="margin-top: 2.4em;"><span> in Hamburg und Schleswig-Holstein 2017</span></h2>
            </div>
          </a>

        </el-col>
      </div>

    </el-card>
  </el-row>

      <el-row>
        <el-card>
          <el-col :sm="24" :xs="24" :md="12" :lg="12">
            <div class="subtitle">Standortmonitoring</div>
            </el-col>
          <el-col :sm="24" :xs="24" :md="12" :lg="12">
          <div class="landing-page-textbox" style="margin-left: -10%;
    /* padding: 2%; */
    padding-bottom: 2em;
    padding-right: 2em;
    padding-top: 2em">
            Die Kreativwirtschaft ist ein wichtiger Wirtschaftsfaktor und wertet das Image einer Region stark auf.
            Bundesländer und Kommunen sind daher bemüht, die eigene Stellung als Medien- und Kreativhochburg auszubauen
            und mit Anreizen die Ansiedlung von Medienunternehmen und innovativen Kreativindustrien zu befördern.
            Daten und Fakten zu Standortfragen sind das Einmaleins für die Entwicklung von Regionen und Unternehmensentscheidungen.
          </div>
          </el-col>
        </el-card>
      </el-row>

      <el-row style="margin-bottom: 30px;">
        <el-card>
          <el-col :sm="24" :xs="24" :md="12" :lg="12">
            <div class="subtitle">Methodik <br> und Inhalte </div>
          </el-col>
            <el-col :sm="24" :xs="24" :md="12" :lg="12">
            <div class="landing-page-textbox">
              Der Goldmedia Standortmonitor basiert auf aktuellen Daten des Statistischen Bundesamts, der Statistischen Landesämter und der
              Bundesagentur für Arbeit sowie der Künstlersozialkasse und weiterer ausgewählter Primärstudien. Die Daten wurden für Goldmedia
              individuell durch die Ämter zusammengestellt und aggregiert. Der Standmonitor enthält Zeitreihen-Daten ab 2013 bis zum jeweils
              aktuellsten verfügbaren Zeitpunkt der Daten. Alle Daten werden kontinuierlich aktualisiert, so dass alle Informationen stets auf
              dem neuesten Stand sind. Der Goldmedia Standmonitor wird sukzessive erweitert um Daten aus Goldmedia Primärdatenerhebungen sowie
              Sekundärdatenerhebungen und Daten von Branchenverbänden.
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

  .title-landing {
    font-size: 30px;
  }

  .top-image {
    max-width: 700px;
    margin-top: -13%;
    float: right;
  }


  @media (max-width: 1000px) {
    .top-image {
      display: none;
    }
  }

  @media (max-width: 800px) {
    .title-landing {
      font-size: 20px;
    }

    .landing-page-column {
      width: 100%;
    }
    }


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
    font-size: 1.2em;
    padding-bottom: 10px;
    line-height: 1.6;
    font-family: Frutiger LT W04_45 Light,Helvetica,Arial,sans-serif;
    color: #4c4c4c;
    margin-left: -10%;
    /* padding: 2%; */
    padding-bottom: 2em;
    padding-right: 2em;
    padding-top: 2em;
  }

  .subtitle {
    margin-bottom: 5px;
    font-weight: 400;
    font-family: Frutiger LT W04_55 Roman,Helvetica,Arial,sans-serif;
    color: #455a64;
    font-size: 3em;
    /*padding: 1em;
    padding-left: 2em;*/
    font-size: 3em;
    padding: 0.6em;
    padding-left: 3em;
  }

  .subtitle-images {
    margin-bottom: 5px;
    font-weight: 400;
    font-family: Frutiger LT W04_55 Roman,Helvetica,Arial,sans-serif;
    color: #455a64;
    font-size: 3em;
  }
  .landing-page-image {
    width: 100%;
   /* margin-top: 5px;*/
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

  .image {
    position: relative;
    width: 100%; /* for IE 6 */
  }

  h2 {
    width: 100%;
    /*width: fit-content;*/
    position: absolute;
    top: -18px;
  }

  h2 span {
    /*color: white;*/
    color: #455a64;
    /*font: bold 24px/45px Helvetica, Sans-Serif;*/
    letter-spacing: -1px;
    /*background: rgb(0, 0, 0); fallback color */
    background: rgba(255,255,255,.8);
    font: bold 15px/30px Helvetica, Sans-Serif;
    /*background: rgba(0, 0, 0, 0.7);*/
    padding: 10px;
  }


  .image-title {
    padding: 3px;
  }

  .image-title-1 {
    left: 260px;
  }

  .image-title-2 {
    left: 188px;
  }

  .image-title-3 {
    left: 133px;
  }



  .el-row {
    margin-top: 10px;
  /*
  font-family: Frutiger LT W04_45 Light,Helvetica,Arial,sans-serif;


  font-weight: 400;
    font-family: Frutiger LT W04_55 Roman,Helvetica,Arial,sans-serif;
        color: #455a64;
   */

  }

</style>
