<template>
  <div class="home-background">
    <div class="home-menu">
        <div class="centered-title">
          <div class="center-inner">
            <div class="subtitle">Goldmedia data viewer</div>
            </div>
          </div>
      </div>
      <div class="cards top20">
        <el-row style="height: 1000px">
          <div>
            <el-card>
              <el-col :sm="24" :xs="24" :md="24" :lg="24">
                <iframe width="100%" height="1000px" src="http://localhost/gmapi/public/wordpress/" frameborder="0" allowfullscreen></iframe>
              </el-col>
            </el-card>
          </div>
        </el-row>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {

  },
  data() {
    return {
      loading: false,
      userIsAdmin: false,
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
},
  mounted () {
    }
}
</script>

<style scoped>

  .subtitle {
    margin-top: 10px;
    font-size: 30px;
    text-align: left;
  }

  .home-menu {
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .row-home {
    display: block;
  }

  .home-background {
    background-image: linear-gradient(-180deg, #FFFFFF 0%, #f0f0f0 100%);
  }

  @media (max-width: 1300px) {

    .subtitle {
      margin-bottom: unset;
      color: #455a64;
      font-size: 2em;
      padding-left: 0em !important;
      padding-top: 0em !important;
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

  @media (max-width: 750px) {
    .home-menu {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .subtitle {
      font-size: 1.5em !important;
    }
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

  ul.el-menu-demo.el-menu--horizontal.el-menu {
    border-bottom: 0 !important;
  }

  .el-menu {
    background-color: #ab8852;
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

  .el-row {
    margin-top: 5px;
  }

  .bottom-card {
    margin-bottom: 10px;
  }

</style>
