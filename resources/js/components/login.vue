<template>
  <div>
    <el-row style="margin-top: 100px">
      <el-col :span="8"></el-col>
      <el-col :span="8" :xs="24">

        <el-card>
          <div class="login-container">
            <div>
              <div class="logo-container center-div">
                <div class="bg-div-logo bg-primary"></div>
              </div>
            </div>
            <el-form label-position="top" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px">
              <el-form-item class="top10" label="Username" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input type="password" @keyup.native.enter="submitForm('ruleForm2')"
                          v-model="ruleForm2.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="full-width top10" type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
              </el-form-item>

              <router-link class="font-13" :to="{ name: 'passwordRecovery'}">
                Forgot password
              </router-link>

            </el-form>

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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input email'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'))
      } else {
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (this.loggedIn === false) {
        callback(new Error('Wrong password/email combination'))
      } else {
        callback()
      }
    }
    return {
      // pngPath: this.$pngPath,
      loggedIn: false,
      userData : {},
userMail : 'yyyyy',
      ruleForm2: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          {validator: validatePass, trigger: 'blur'}

        ],
        password: [
          {validator: validatePass2, trigger: 'click'},
          {validator: validatePass3, trigger: 'click'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
      axios.get(this.$apiBase + 'login', {
        params: {
          email: this.ruleForm2.username,
          password: this.ruleForm2.password
        }
      }, config)
        .then(response => {
          //console.log(response.data.user_data[0]);
          //this.userData.push(response.data.user_data[0]);
           this.userData = response.data.user_data[0];
          this.loginResp = response.data.success;
          this.$session.start()
          console.log(this.userData.EML)
          this.$session.set('email', this.userData.EML)
          //console.log(this.userData);
          if (this.loginResp === true) {
            this.$router.push({'name': 'home'})
            this.loggedIn = true
            /*
            axios.get(this.$apiBase + 'load-user', {
              params: {
                email: "goldmedia",
              }
            }, config)
                    .then(response => {
                      //console.log(response);
                    })*/
          } else {
            this.$refs[formName].validate((valid) => {
              if (!valid) {
                this.ruleForm2.password = ''
              }
            })
          }
        })

    }
  }
}
</script>

<style scoped>

  .logo-container {
    width: 150px;
    position: relative;
  }

  .z-index-logo {
    z-index: 2;
    position: relative;
  }

  .bg-div-logo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 10px;
    z-index: 1;
  }

</style>
