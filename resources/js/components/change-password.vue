<template>
  <div>
    <div class="top20" v-show="!passwordChanged" style="width: 60%">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Old password" prop="password">
          <el-input type="password" autocomplete="off" v-model="ruleForm2.password">
          </el-input>
        </el-form-item>
        <div>
          <el-form-item label="New password" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="isDisabled" type="primary" @click="changePassword">Change password</el-button>
          </el-form-item>
        </div>
      </el-form>
      <div>
        <el-alert
          title="Old password incorrect"
          type="error"
          v-show="oldPasswordIncorrect">
        </el-alert>
      </div>
    </div>
    <div v-show="passwordChanged">
      <span>Password was successfully changed</span>
    </div>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  data () {
    var validatePass1 = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        this.isDisabled = true
        callback(new Error('Two inputs don\'t match!'))
      } else {
        this.isDisabled = false
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
      oldPasswordIncorrect: false,
      isDisabled: true,
      passwordChanged: false,

      ruleForm2: {
        password: '',
        pass: '',
        checkPass: ''
      },
      rules2: {
        password: [
          {validator: validatePass3, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass3, trigger: 'blur'},
          {validator: validatePass2, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass3, trigger: 'blur'},
          {validator: validatePass2, trigger: 'blur'},
          {validator: validatePass1, trigger: 'change'},
          {validator: validatePass1, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    changePassword () {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      if (this.ruleForm2.pass === this.ruleForm2.checkPass) {
        axios.get(this.$apiBase + 'change-password', {
          params: {
            email: this.$session.get('email'),
            oldPassword: this.ruleForm2.password,
            password: this.ruleForm2.pass
          }
          }, config)
          .then(response => {
            console.log(response)
            if (response.data.message === 'success') {
              this.resetForm('ruleForm2')
              this.passwordChanged = true
            } else {
              this.resetForm('ruleForm2')
              this.oldPasswordIncorrect = true
            }
          })
      }
      this.isDisabled = true
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
