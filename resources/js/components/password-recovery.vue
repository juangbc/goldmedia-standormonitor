<template>
  <div>
    <el-row style="margin-top: 100px">
      <el-col :span="8"></el-col>
      <el-col :span="8" :xs="24">
        <el-card>
          <div class="login-container">
            <div>
              <div>
                <h3 class="no-margin-top">Reset Password</h3>
              </div>
              <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="custom-form">
                <el-form-item prop="email">
                  <div>E-mail address:</div>
                  <el-input type="input" v-model="ruleForm2.email" autocomplete="off">
                  </el-input>
                  <div class="top10">
                    <el-button :disabled="loading" @click="forgot">Submit <i v-show="loading" class="fa fa-spinner fa-spin"></i></el-button>
                  </div>
                </el-form-item>
              </el-form>
              <el-alert class="top10"
                        v-show="userDoesNotExist"
                        :title="errorMessage"
                        type="error">
              </el-alert>
            </div>

          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>

</template>
<script>

import axios from 'axios'

export default {

  data () {
    var validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input your email address'))
      } else {
        callback()
      }
    }
    return {
      userDoesNotExist: false,
      ruleForm2: {
        email: ''
      },
      rules2: {
        email: [
          {validator: validatePass1, trigger: 'blur'}
        ]
      },
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    forgot () {
      this.loading = true
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      axios.post(this.$apiBase + 'api/help.php', {
        topic: 'forgot',
        email: this.ruleForm2.email
      }, config)
        .then(response => {
          this.resetForm('ruleForm2')
          if (response.data.isError === true) {
            this.userDoesNotExist = true
            this.errorMessage = response.data.message
          } else {
            this.userDoesNotExist = false
          }
          this.loading = false
        })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

  .custom-form > div{
    margin: 0 !important;
  }

</style>
