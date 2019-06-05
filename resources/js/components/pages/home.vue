<template>
  <div class="home-background">
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
        <el-row :gutter="60" class="row-home">
          <el-col :xs="24" :sm="24" :md="12">
            <button-home mode="standortanalyse" ref="market"></button-home>
          </el-col>

          <el-col :xs="24" :sm="24" :md="12">
            <button-home mode="zeitreihenanalyse"></button-home>
          </el-col>

        </el-row>

      </div>
    </div>
  </div>
</template>

<script>
// import ICountUp from 'vue-countup-v2'
// import axios from 'axios'
import axios from 'axios';
import homeButton from 'C:/xampp/htdocs/gmapi/resources/js/components/utils/home-button'

export default {
  components: {
    // ICountUp,
    'button-home': homeButton
  },
  data () {
    return {
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
    trustedAuthentication() {
      axios
              .get('http://localhost/gmapi/public/test.php')
              .then(response => {
                console.log(response)
              })
    },
  },
  mounted () {
    this.trustedAuthentication();
  }
}
</script>

<style scoped>
  .welcome {
    font-weight: 500;
    /*margin-top: 70px;*/
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

  .logo-home {
    width: 450px;
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

</style>
