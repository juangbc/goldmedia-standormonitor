<template>
  <div>

    <el-card
            title="Default profile settings"
            :visible.sync="defaultSettings.expanded"
            width="400px">
      <div>Hier können Sie Filter für Ihre Profil-Einstellungen speichern.</div>

      <div class="top10">
        <h4 class="bot10">Nach Bundesland filtern</h4>
        <el-select v-model="defaultSettings.bundesland" placeholder="Select">
          <el-option
                  v-for="item in $bundesland"
                  :key="item.key"
                  :label="item.caption"
                  :value="item.key">
          </el-option>
        </el-select>
      </div>
      <div class="top10">
        <h4 class="bot10">Nach Jahr filtern</h4>
        <el-select v-model="defaultSettings.year" placeholder="Select">
          <el-option
                  v-for="item in $year"
                  :key="item.key"
                  :label="item.caption"
                  :value="item.key">
          </el-option>
        </el-select>
      </div>
      <div class="top10">
        <h4 class="bot10">Nach Markt Filtern</h4>
        <el-select v-model="defaultSettings.markt" placeholder="Select">
          <el-option
                  v-for="item in $markt"
                  :key="item.key"
                  :label="item.caption"
                  :value="item.key">
          </el-option>
        </el-select>
      </div>

      <div class="top20">
        <el-button @click="saveChanges" type="primary"><i class="fa fa-save"></i> Save settings</el-button>
      </div>

    </el-card>
  </div>

</template>

<script>
import axios from 'axios'

export default {
data() {
  return {
    defaultSettings: {
      expanded: true,
      dates: [null, null],
      bundesland:  0,
      year : 5,
      markt : 0,
      admin: null,
      market: null,
    }
  }
},
  methods: {
    saveChanges() {
      this.$store.commit('set_bundesland', this.defaultSettings.bundesland)
      this.$store.commit('set_year', this.defaultSettings.year)
      this.$store.commit('set_markt', this.defaultSettings.markt)

    },
  },
  mounted() {
  }
  }
</script>

<style scoped>
  .logo-navbar {
    width: 200px;
    padding: 20px 10px 8px 20px;
  }
  ul.el-menu-demo.el-menu--horizontal.el-menu {
    border-bottom: 0 !important;
  }
  .el-menu {
    background-color: #ab8852;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover, .el-submenu__title:focus {
    background-color: #eac166 !important;
    color: #6b6b6b !important;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    color: #f2f2f2 !important;
  }
  #navbar-mobile-button {
    background-color: #ab8852;
    color: #fff;
    border-color: #fff;
  }
  @media only screen and (max-width: 800px) {
    .mobile-submenus {
      float: left !important;
    }
  }

</style>
