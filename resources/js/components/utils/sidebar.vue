<template>
  <div>
    <div class="sidebar">
      <el-aside width="240px">
        <el-menu :router="true" :default-active="activeLink" :unique-opened="true"
                 background-color="#393d49"
                 text-color="#e0e0e0"
                 active-text-color="#eac166">

          <el-menu-item index="home" :route="{'name':'home'}">
            <i class="fa fa-home fa-fw"></i><span class="sidebar-title">Home</span>
          </el-menu-item>

          <el-menu-item index="overview" :route="{'name':'overview'}">
            <i class="fa fa-chart-pie fa-fw"></i><span class="sidebar-title">Übersicht</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title"><i class="fa fa-eye fa-fw "></i><span class="sidebar-title">Standort</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'standortanalyse-basisdaten'}">Basisdaten</el-menu-item>
              <el-menu-item index="2" :route="{'name':'standortanalyse-beschaeftigte'}">Beschäftigte</el-menu-item>
              <el-menu-item index="3" :route="{'name':'standortanalyse-umsaetze'}">Umsätze</el-menu-item>
              <el-menu-item index="4" :route="{'name':'standortanalyse-unternehmen'}">Unternehmen</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title"><i class="fa far fa-calendar-times fa-fw"></i><span class="sidebar-title">Zeitreihen</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'zeitreihenanalyse-beschaeftigte'}">Beschäftigte</el-menu-item>
              <el-menu-item index="2" :route="{'name':'zeitreihenanalyse-umsaetze'}">Umsätze</el-menu-item>
              <el-menu-item index="3" :route="{'name':'zeitreihenanalyse-unternehmen'}">Unternehmen</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title"><i class="fas fa-chart-area"></i><span class="sidebar-title">Vergleiche</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'vergleichsanalyse-bundesvergleich'}">Bundesvergleich</el-menu-item>
              <el-menu-item index="2" :route="{'name':'vergleichsanalyse-laendervergleich'}">Ländervergleich</el-menu-item>
              <el-menu-item index="3" :route="{'name':'vergleichsanalyse-staerken'}">Stärken und Schwächen</el-menu-item>
              <el-menu-item index="4" :route="{'name':'vergleichsanalyse-zeitreihenvergleich'}">Zeitreihenvergleich</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="5">
            <template slot="title"><i class="fa fa-tv fa-fw "></i><span class="sidebar-title">Branchen</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'branchenanalyse-medienbranchen'}">Medienbranchen</el-menu-item>
              <el-menu-item index="2" :route="{'name':'branchenanalyse-branchenvergleich'}">Branchenvergleich</el-menu-item>
              <el-menu-item index="3" :route="{'name':'branchenanalyse-rundfunk'}">Rundfunk</el-menu-item>
              <el-menu-item index="4" :route="{'name':'branchenanalyse-games'}">Games</el-menu-item>
              <el-menu-item index="5" :route="{'name':'branchenanalyse-sonderanalyse'}">Sonderanalysen (tba.)</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title"><i class="fa fa-chart-pie fa-fw"></i><span class="sidebar-title">User</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'userManagement'}">User Management</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="methoden" :route="{'name':'methoden'}">
            <i class="fa fa-chart-pie fa-fw"></i><span class="sidebar-title">Methoden</span>
          </el-menu-item>

          <el-menu-item index="shop" :route="{'name':'shop'}">
            <i class="fa fa-chart-pie fa-fw"></i><span class="sidebar-title">Shop</span>
          </el-menu-item>



        </el-menu>

        <div class="sidebar-bot footer-sidebar">
          <div class="top20 font-sidebar">
            <a href="mailto:research@goldmedia.de">Contact</a> |
            <router-link :to="{ name: 'faq'}">FAQ</router-link>
            |
            <router-link :to="{ name: 'disclaimer'}">Disclaimer</router-link>
            |
            <router-link :to="{ name: 'impressum'}">Impressum</router-link>
          </div>
        </div>
      </el-aside>
    </div>
  </div>
</template>

<script>

import _ from 'lodash'

export default {
  data () {
    return {
      activeLink: null
    }
  },
  props: {
    mobile: {
      type: Boolean,
      default: () => false
    }
  },
  watch: {
    $route (to, from) {
      this.activeLink = this.$route.matched[this.$route.matched.length - 1].name
    }
  },
  mounted: function () {
    this.activeLink = this.$route.matched[this.$route.matched.length - 1].name
  },
  computed: {
  }
}
</script>

<style scoped>

  .sidebar-bot {
    text-align: center;
    margin-top: 25px;
    font-size: 12px;
    margin-bottom: 20px;
    color: #8c98b0;
  }

  .font-sidebar{
    opacity: 0.7;
  }

  .sidebar {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .sidebar.mobile {
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    position: absolute;
  }

  .sidebar.mobile > aside {
    width: 100% !important;
  }

  .sidebar > aside {
    background-color: #393d49;
  }

  .sidebar-title {
    margin-left: 10px;
  }

  .footer-sidebar a, .footer-sidebar a:visited, .footer-sidebar a:active {
    color: #8c98b0;
  }

  .footer-sidebar a:hover {
    color: #aabad9;
  }

  .logo-sidebar {
    width: 140px;
    margin: auto;
    margin-top: 10px;
  }

</style>
