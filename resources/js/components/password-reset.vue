<template>
  <div>
    <el-row style="margin-top: 100px">
      <el-col :span="8"></el-col>
      <el-col :span="8" :xs="24">

        <el-card>
          <div class="login-container">
            <div>
              <h3 class="no-margin-top">Reset Password</h3>
            </div>
            <el-form label-position="top" v-show="!passwordChanged" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"
                     label-width="120px" class="demo-ruleForm">
              <div>
                <el-form-item label="New password" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="recoverPassword">Change password</el-button>
                </el-form-item>
              </div>
            </el-form>
            <div v-show="passwordChanged">
              <span>Password was successfully reset!</span>
              <div class="top10">
                <router-link :to="{ name: 'loginPage'}">
                  <el-button size="mini">Go to login</el-button>
                </router-link>
              </div>
            </div>
            <el-alert class="top10"
                      v-show="hasError"
                      :title="errorMessage"
                      type="error">
            </el-alert>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: 'passwortReset',

  data () {
    var validatePass1 = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        callback(new Error('Two inputs don\'t match!'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value.length <= 4) {
        callback(new Error('The length of the password has to be at least 5'))
      } else {
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'))
      } else {
        callback()
      }
    }
    return {
      pngPath: this.$pngPath,
      loggedIn: false,
      oldPasswordCorrect: false,
      tokenId: '',
      correctToken: false,
      passwordChanged: false,
      hasError: false,
      errorMessage: '',

      ruleForm2: {
        password: '',
        pass: '',
        checkPass: ''
      },
      rules2: {
        pass: [
          {validator: validatePass3, trigger: 'blur'},
          {validator: validatePass2, trigger: 'change'}
        ],
        checkPass: [
          {validator: validatePass3, trigger: 'blur'},
          {validator: validatePass2, trigger: 'change'},
          {validator: validatePass1, trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    recoverPassword () {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      if (this.ruleForm2.pass === this.ruleForm2.checkPass) {
        axios.post(this.$apiBase + 'api/help.php', {
          topic: 'recover',
          tokenId: this.$route.params.tokenId,
          pw: this.ruleForm2.pass
        }, config)
          .then(response => {
            if (response.data.message === 'success') {
              this.resetForm('ruleForm2')
              this.passwordChanged = true
              this.hasError = false
            } else {
              this.hasError = true
              this.errorMessage = 'Error resetting your password, please contact support@goldmedia.de'
            }
          })
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
