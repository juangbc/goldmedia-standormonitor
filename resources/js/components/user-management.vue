<template>
  <div>
    <h4 class="header-data">
      Create new user
    </h4>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm" v-show="!showPw">
      <el-form-item prop="email">
        <el-input autocomplete="off" v-model="ruleForm2.email" style="max-width: 400px"
                  placeholder="Enter email for new user">
        </el-input>
        <el-select v-model="userType" placeholder="Select user type" v-if="userTypeCurrent === 1">
          <el-option
            v-for="item in optionsAdmin"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" @click="addUser">Add New User</el-button>
      </el-form-item>
    </el-form>

    <div v-show="showPw">
      <div>This is the temporary password for {{mailCreated}}, please save it:
        <el-row>
          <el-col :span="8">
            <div class="top10 tip-box" style="text-align: center">{{newUserPW}}</div>
          </el-col>
        </el-row>
      </div>
      <div class="top10">
        <el-button slot="append" icon="el-icon-back"
                   @click="goBack"> Go back
        </el-button>
      </div>
    </div>

    <div v-if="showResults" v-show="!showPw && data.length > 0">
      <h4>
        User list
      </h4>
      <el-table
        :data="data" size="small"
        style="width: 70%">
        <el-table-column
          prop="EML"
          label="Email"
          min-width="150px">
        </el-table-column>
        <el-table-column v-if="userTypeCurrent === 1"
                         label="Type"
                         width="150px">
          <template slot-scope="scope">
            <div>
              {{filterType(scope.row.TYP)}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Delete user"
          width="150px">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" type="primary" @click="deleteUser(scope.row.EML)">Delete</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="top10">
        <el-pagination
                v-show="totalResults > 20"
                @current-change="handleCurrentChange"
                layout="prev, pager, next"
                :page-size="20"
                :total="totalResults">
        </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      optionsAdmin: [
        {
          value: 0,
          label: 'Test account'
        },
        {
          value: 1,
          label: 'Admin account'
        },
        {
          value: 2,
          label: 'Normal account'
        },
      ],
      pageNum: 1,
      isAdmin: true,
      totalResults: 0,
      showResults: true,
      showPw: false,
      newUserPW: '',
      userType: 0,
      mailCreated: '',
      userTypeSet: true,
      data: [],
      searched: true,
      ruleForm2: {
        email: '',
        inputValue: ''
      },
      rules2: {
        email: []
      },
      dialogVisible: true,
      emailEditedUser: '',
      createdUserMarkets: []
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.pageNum = val;
    },
    addUser () {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      if (this.ruleForm2.email.length <= 3) {
        this.$message.error('Cannot create user with less than four characters')
      } else if (!this.reg.test(this.ruleForm2.email)) {
        this.$message.error('Please enter a correct email address')
      } else {

        if (this.userType !== 0 || this.userType !== 2) {
          this.userType = 2;
        }
        axios.request(this.$apiBase + 'add-user', {
          method: 'get',
          params: {
            email: this.ruleForm2.email,
            userType: this.userType,
          }
        }, config)
          .then(response => {
            console.log(response);
            if (response.data.success === false) {
              this.resetForm('ruleForm2')
            } else {
              this.mailCreated = this.ruleForm2.email
              this.showPw = true
              this.newUserPW = response.data.password
              this.resetForm('ruleForm2')
              this.getNormalUserList()
            }
          })
      }
    },
    deleteUser (email) {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      console.log(email);
      axios.request(this.$apiBase + 'delete-user', {
        method: 'post',
        params: {
          email: email,
        }
      }, config)
        .then(response => {
          this.getNormalUserList()
        })
    },
    getNormalUserList () {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      let $apiBase = this.$apiBase +'get-user-names';
      axios.get($apiBase, {
        //mode: 'list'
      }, config)
        .then(response => {
          if (response.data.users.length >= 1) {
            this.data = response.data.users;
            this.totalResults = response.data.users.length;
            this.showResults = true
          } else {
            this.showResults = false
          }
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goBack () {
      this.showPw = false
      this.userType = '0'
      this.getNormalUserList()
    },
    filterType (value) {
      for (let a = 0, ax = this.optionsAdmin.length; a < ax; a++) {
        if (this.optionsAdmin[a].value * 1 === value * 1) {
          return this.optionsAdmin[a].label
        }
      }
      return 'n/a'
    }
  },
  filters: {
  },
  computed: {
    userTypeCurrent: function () {
      return 1
      // this.$parent.$parent.$parent.$parent.sessionData.userType * 1
    }
    /* sessionData: function () {
      return this.$parent.$parent.$parent.$parent.sessionData
    } */
  },
  mounted () {
    this.getNormalUserList()
  }
}
</script>

<style scoped>

</style>
