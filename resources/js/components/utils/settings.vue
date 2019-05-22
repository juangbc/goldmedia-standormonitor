<template>
  <div>
  <div>Profile settings</div>

  <div class="top20">
    <el-button @click="saveChanges" type="primary"><i class="fa fa-save"></i> Save settings</el-button>
  </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {

  },
  computed: {

  },
  data () {
    return {
      value: '',
      tabActive: 0,
      selectionMonth: null,
      defaultSettings: {
        expanded: false,
        dates: [null, null],
        calc: null,
        admin: null,
        market: null
      },

    }
  },
  props: {
    mobile: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    getSession () {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      axios.get(this.$apiBase + 'load-user', config)
              .then(response => {
                console.log(response);
              })
    },
    handleClick (tab) {
      this.tabActive = tab.index * 1
    },
    logout () {
      this.$parent.$parent.logout()
    },
    handleRoute (route) {
      if (route === 'logout') {
        this.logout()
      } else {
        this.$router.push({'name': route})
      }
    },
    },
    saveChanges () {
      console.log(this.$session.getAll());
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
