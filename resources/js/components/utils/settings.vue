<template>
  <div>
  <div>Profile settings</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
