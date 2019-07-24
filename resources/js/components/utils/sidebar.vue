<template>
  <div>
    <div class="sidebar">
      <el-aside width="240px">
        <el-menu class="main-menu" :router="true" :default-active="activeLink" :unique-opened="true"
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
            <template slot="title"><i class="fa fa-eye fa-fw "></i><span class="sidebar-title">Standortanalyse</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'standortanalyse-beschaeftigte'}">Beschäftigte: Übersicht</el-menu-item>
              <el-menu-item index="2" :route="{'name':'standortanalyse-beschaeftigte-analyse'}">Beschäftigte: Analyse</el-menu-item>
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
              <el-menu-item index="1" :route="{'name':'vergleichsanalyse-bundesvergleich'}">Bundesvergleich: Übersicht</el-menu-item>
              <el-menu-item index="2" :route="{'name':'vergleichsanalyse-analyse'}">Bundesvergleich: Analyse</el-menu-item>
              <el-menu-item index="3" :route="{'name':'vergleichsanalyse-laendervergleich'}">Ländervergleich</el-menu-item>
              <el-menu-item index="4" :route="{'name':'vergleichsanalyse-staerken'}">Stärken und Schwächen</el-menu-item>
              <el-menu-item index="5" :route="{'name':'vergleichsanalyse-zeitreihenvergleich-1'}">Zeitreihenvergleich 1</el-menu-item>
              <el-menu-item index="6" :route="{'name':'vergleichsanalyse-zeitreihenvergleich-2'}">Zeitreihenvergleich 2</el-menu-item>
              <el-menu-item index="7" :route="{'name':'vergleichsanalyse-zeitreihenvergleich-3'}">Zeitreihenvergleich 3</el-menu-item>
              <el-menu-item index="8" :route="{'name':'vergleichsanalyse-zeitreihenvergleich-4'}">Zeitreihenvergleich 4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"><i class="fa fa-tv fa-fw "></i><span class="sidebar-title">Branchen</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'branchenanalyse-medienbranchen'}">Medienbranchen: Übersicht</el-menu-item>
              <el-menu-item index="2" :route="{'name':'branchenanalyse-medienbranchen-analyse'}">Medienbranchen: Analyse</el-menu-item>
              <el-menu-item index="3" :route="{'name':'branchenanalyse-branchenvergleich-1'}">Branchenvergleich 1</el-menu-item>
              <el-menu-item index="4" :route="{'name':'branchenanalyse-branchenvergleich'}">Branchenvergleich 2</el-menu-item>
              <el-menu-item index="5" :route="{'name':'branchenanalyse-branchenvergleich'}">Branchenvergleich 3</el-menu-item>
              <el-menu-item index="6" :route="{'name':'branchenanalyse-branchenvergleich'}">Branchenvergleich 4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="6">
            <template slot="title"><i class="fa fa-tv fa-fw "></i><span class="sidebar-title">Sonderanalysen</span></template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'branchenanalyse-rundfunk'}">WiLa Rundfunk</el-menu-item>
              <el-menu-item index="2" :route="{'name':'branchenanalyse-games'}">Games tba.</el-menu-item>
              <el-menu-item index="3" :route="{'name':'branchenanalyse-vrar'}">VR/AR tba.</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7" v-if="this.$session.get('user_type') === 1">
            <template slot="title"><i class="fa fa-chart-pie fa-fw"></i><span class="sidebar-title">User</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1" :route="{'name':'userManagement'}">User Management</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="methoden" :route="{'name':'methoden'}">
            <i class="fa fa-chart-pie fa-fw"></i><span class="sidebar-title">Methoden</span>
          </el-menu-item>

        </el-menu>

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
