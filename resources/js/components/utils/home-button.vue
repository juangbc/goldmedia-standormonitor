<template>
  <div shadow="never" class="home-menu-item top20">
    <router-link :to="{ name: link}">
      <div class="flex-container">
        <div>
          <span class="ico-home"><i class="fa" :class="[ico]" aria-hidden="true"></i></span>
        </div>
        <div class="item-text">
          <div class="ico-home-text">{{heading}}</div>
          <div class="textdiv">
            {{text}}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    mode: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      link: '',
      ico: '',
      heading: '',
      text: ''
    }
  },
  mounted () {
    switch (this.mode) {
      case 'standortmonitor':
        this.link = 'standortmonitor'
        this.ico = 'fa-eye'
        this.heading = 'Standortmonitor'
        this.text = 'Detailed info of occupation in different länder'
        break
      case 'market':
        this.link = 'marketShare'
        this.ico = 'fa-chart-pie'
        this.heading = 'Tableau 1'
        this.text = 'Market Shares and related statistics'
        break
      case 'platform':
        this.link = 'users'
        this.ico = 'fa-tv'
        this.heading = 'Tableau 2'
        this.text = 'Comparison of VoD platforms in Germany'
        break
      case 'titles':
        this.link = 'titleAnalytics'
        this.ico = 'fa-file-video'
        this.heading = 'Tableau 3'
        this.text = 'Analysis for single or multiple titles'
        break
    }
  }
}
</script>

<style scoped>

  .flex-container{
    display: flex;
  }

  .ico-home {
    width: 100%;
    display: block;
    color: #5C7A96;
    font-size: 70px;
  }

  .ico-home-text {
    padding-top: 5px;
    font-weight: bold;
    font-size: 30px;
    text-align: left;
    color: #5F6773;
  }

  .textdiv {
    margin-top: 5px;
    font-weight: 400;
    font-size: 18px;
    color: #7A7E8B !important;
  }

  .home-menu-item {
    padding: 10px 20px 17px 20px;
    border: 1px solid #979797;
    background: rgba(255, 255, 255, 0.46);
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .item-text {
    margin-left: 15px;
  }

  @media only screen and (max-width: 800px) {
    .ico-home {
      font-size: 80px;
    }

    .ico-home-text {
      font-size: 25px;
    }

    .textdiv {
      font-size: 15px;
    }
  }
</style>
