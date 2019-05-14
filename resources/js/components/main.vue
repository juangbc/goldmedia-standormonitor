<template>

  <div class="main-container">
    <navbar :mobile="mobile"></navbar>
    <el-container class="pos-rel" :class="{'mobile': mobile}">
      <sidebar :mobile="mobile" v-show="!mobile || sideBarVisibleMobile"></sidebar>
      <el-main class="main" v-show="!sideBarVisibleMobile" :class="{'main-margin': !mobile}">
        <router-view/>
      </el-main>
    </el-container>
  </div>

</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      sideBarVisibleMobile: false,
      mobile: false,
      mobileLimit: 800
    }
  },
  computed: {
  },
  watch: {
    $route (to, from) {
      this.sideBarVisibleMobile = false
    }
  },
  methods: {
    handleResize () {
      if (document.documentElement.clientWidth < this.mobileLimit) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    }
  },
  mounted: function () {
    if (document.documentElement.clientWidth < this.mobileLimit) {
      this.mobile = true
    }
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
  .header-data{
    margin-top: 0;
  }

  .h3-data-add{
    font-weight: 400;
    font-size: 70%;
    color: #7c7f84;
  }

  .main-container {
    height: 100%;
    background-color: #dcdcdc;
  }

  .sidebar {
    background-color: #393d49;
  }

  .main {
    min-height: 100vh;
    /*padding: unset !important;*/
    margin-top: 0;
    background-color: #f0f0f0;
  }

  html{
    background-color: #f0f0f0;
  }

  .main-margin {
    margin-left: 240px;
  }

  .view {
    padding: 20px;
  }

  .pos-rel > div {
    position: relative;
    bottom: 0;
  }

  section.pos-rel.mobile > div {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 60px;
  }

</style>
