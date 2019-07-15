<template>
  <div onload="checkEdits()" class="home-background">
    <div class="home-menu">
      <div class="welcome">
        <div class="centered-title">
          <div class="center-inner">
            <div class="outer-logo"></div>
            <div class="subtitle">Goldmedia data viewer</div>
            <div class="counter-div-frame">
            </div>
          </div>
        </div>
      </div>
      <div class="cards top20">
        <el-row>
          <el-card>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
              <div class="subtitle">Live Ticker</div>
            </el-col>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
              <div class="landing-page-textbox">
                {{prev}}
              </div>
            </el-col>
          </el-card>
        </el-row>
        <el-row v-if="userIsAdmin">
          <div>
          <el-card>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
              <div class="subtitle">Live Ticker</div>
            </el-col>
            <el-col :sm="24" :xs="24" :md="24" :lg="24">
              <div>
                <textarea v-model="text" :placeholder="prev" class="input-area"></textarea>
              </div>
              <el-button @click="saveEdits">save my edits</el-button>
            </el-col>
          </el-card>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import homeButton from 'C:/xampp/htdocs/gmapi/resources/js/components/utils/home-button'
import axios from 'axios'

export default {
  components: {
    'button-home': homeButton
  },
  data () {
    return {
      userIsAdmin : false,
      prev : "this is an old text",
      text : "",
      loaded: {
        count: false
      },
      totalCount: null,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      maxHeight: 0
    }
  },
  methods: {
    getText() {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let $apiBase = this.$apiBase + 'get-text';
      axios.get($apiBase, {
        //mode: 'list'
      }, config)
              .then(response => {
console.log(response.data[0].text);
this.prev = response.data[0].text;
              })
    },
    saveEdits() {
      axios.get(this.$apiBase + 'update-text', {
        method: 'get',
        params: {
          text: this.text,
          //userType: this.userType,
        }
      })
    }
  },
  mounted () {
    if (this.$session.get('user_type') === 1) {
      this.userIsAdmin = true;
    }
    this.getText();
    }
}
</script>

<style scoped>
  .welcome {
    font-weight: 500;
    margin-bottom: 40px;
    color: #5c7a96;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .subtitle {
    margin-top: 10px;
    font-size: 30px;
    text-align: left;
  }

  .counter-div-frame {
    margin-top: 20px;
    font-size: 25px;
    text-align: left;
    color: #777777;
    font-weight: lighter;
  }

  @media only screen and (max-width: 800px) {
    .home-menu {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  .home-menu {
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .row-home {
    display: block;
  }

  .outer-logo {
    width: 100%;
  }

  .home-background {
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #f0f0f0 100%);
  }

  .menu-div {
    height: 50px;
    float: left;
    margin-left: 20%;
  }

  .dark-blue {
    color: #455a64;
  }

  .subtitle-image-title {
    margin-top: 2.4em;
  }

  .header-menu {
    padding: 0;
    margin: 0 0 1px -1em;
    font-family: Frutiger LT W04_65 Bold, Helvetica, Arial, sans-serif;
    color: #455a64;
    font-size: 2.3rem;
    background: #fff !important;
  }

  .main-title {
    float: left;
    width: 100%;
  }

  .login-button {
    float: right;
    font-style: inherit;
    padding: 20px;
    color: white;
    font-size: 1.2em;
  }

  .subtitle-main {
    float: left;
    width: 100%;
    font-size: 1.3em;
    font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
  }

  .login-card {
    height: 100%;
    margin-top: 100px;
  }

  .main-column {
    width: 70%;
    padding-left: 15%;
    padding-top: 5%;
    margin-top: 2%;
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
      padding-left: 0em !important;
      padding-top: 0em !important;
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
      padding-left: 0em !important;
      padding-top: 1em !important;
    }
  }

  @media (max-width: 1000px) {
    /*.menu-div {
        width: 100%;
    }*/
  }

  @media (max-width: 750px) {

    .font-16 {
      font-size: 13px;
    }

    .landing-page-column {
      width: 100%;
    }

    .subtitle-images {
      font-size: 1.5em !important;
    }

    .subtitle {
      font-size: 1.5em !important;
    }

    .subtitle-main {
      font-size: 0.8em !important;
    }

    .landing-page-textbox {
      font-size: 1em !important;
    }
  }

  .navbar-subtitle {
    float: right;
    margin-left: 20px;
    font-weight: bold;
  }

  .landing-page-column {
    padding: 1%;
  }

  .landing-page-title-image {
    max-width: 700px;
  }

  .landing-page-textbox {
    font-size: 1.2em;;
    line-height: 1.6;
    font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
    color: #4c4c4c;
    margin-left: 5%;
    padding-right: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .subtitle {
    margin-bottom: 5px;
    font-weight: 400;
    font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
    color: #455a64;
    font-size: 2.5em;
    padding-top: 0.6em;
    padding-left: 1em;
  }

  .subtitle-images {
    margin-bottom: 5px;
    font-weight: 400;
    font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif !important;
    color: #455a64;
    font-size: 2.7em;
  }

  .landing-page-image {
    width: 100%;
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
    width: 100%;
  }

  .input-area {
    width: 100%;
    height: 300px;
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

  .bottom-card {
    margin-bottom: 10px;
  }

</style>
