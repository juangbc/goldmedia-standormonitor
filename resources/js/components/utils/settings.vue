<template>
  <div>
  <div>Profile settings</div>

  <div class="top10">
    <h4 class="bot10">Available tableaus</h4>
    <el-select v-model="defaultSettings.calc" placeholder="Select">
      <el-option
        v-for="item in calcOptions"
        :key="item.key"
        :label="item.caption"
        :value="item.key">
      </el-option>
    </el-select>
  </div>

  <div class="top10" >
    <h4 class="bot10">Admin mode</h4>
    <el-select v-model="defaultSettings.admin" placeholder="Select">
      <el-option
        v-for="item in adminOptions"
        :key="item.key"
        :label="item.caption"
        :value="item.key">
      </el-option>
    </el-select>
  </div>

    <div class="top10" >
      <h4 class="bot10">Languages</h4>

    </div>

  <div class="top20">
    <el-button @click="saveChanges" type="primary"><i class="fa fa-save"></i> Save settings</el-button>
  </div>

    <div class="top20">
      <el-button @click="close" type="primary"><i class="fa fa-save"></i> Same</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {

  },
  computed: {
    defaultSettingsSession: function () {
      //return this.$parent.$parent.defaultSettings
    },
    sessionData: function () {
      //return this.$parent.$parent.sessionData
    },
    pickerOptions2: function () {
      let that = this
      return {
        shortcuts: [{
          text: 'Last week',
          onClick (picker) {
            picker.$emit('pick', [that.$moment(new Date()).add(-7, 'days'), that.$moment(new Date())])
          }
        }, {
          text: 'Last 30 days',
          onClick (picker) {
            picker.$emit('pick', [that.$moment(new Date()).add(-30, 'days'), that.$moment(new Date())])
          }
        }, {
          text: 'Last 3 months',
          onClick (picker) {
            picker.$emit('pick', [that.$moment(new Date()).add(-3, 'months'), that.$moment(new Date())])
          }
        }, {
          text: 'Last Year',
          onClick (picker) {
            picker.$emit('pick', [that.$moment(new Date(that.$moment(new Date()).format('YYYY') - 1, 0, 1)), that.$moment(new Date(that.$moment(new Date()).format('YYYY') - 1, 0, 1)).add(1, 'years')])
          }
        },
        {
          text: 'This Year',
          onClick (picker) {
            picker.$emit('pick', [that.$moment(new Date(that.$moment(new Date()).format('YYYY'), 0, 1)), that.$moment(new Date())])
          }
        },
        {
          text: 'Whole Dataset',
          onClick (picker) {
            picker.$emit('pick', [that.$moment(new Date(2017, 0, 1)), that.$moment(new Date())])
          }
        }
        ]
      }
    }
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
      calcOptions: [
        {'caption': 'Age classes 18+', 'key': 0},
        {'caption': 'Age classes 14+', 'key': 1}
      ],
      adminOptions: [
        {'caption': 'no', 'key': 0},
        {'caption': 'yes', 'key': 1}
      ],
      languageOptions: [{
        value: 0,
        label: 'English'
      }, {
        value: 1,
        label: 'Deutsch'
      }]
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
      //console.log(this.emailUser);
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      axios.get(this.$apiBase + 'load-user', config)
              .then(response => {
                //this.userData = response.data;
                console.log(response);
                //this.sessionData = response.data
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
    close () {
      //sthis.defaultSettings.expanded = false
      this.$notify({
        title: 'Success',
        message: 'Successfully saved default settings',
        type: 'success'
      })
      //console.log(this.$parent.$parent.$parent.userData.EML);
      // refresh session data in parent
      //this.$parent.$parent.getSession()
    },
    saveChanges () {
      console.log(this.$session.getAll());
    }
  },
  mounted () {

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
