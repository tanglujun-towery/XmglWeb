<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h2 class="title" style="padding-left:22px;" >项目管理系统</h2>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from "js-cookie"
import ThemePicker from "@/components/ThemePicker"
export default {
  name: 'Login',
  components:{
    ThemePicker
  },
  data() {
    return {
      loading: false,
      loginForm: {
        account: 'admin',
        password: 'Jiagong_51062.'
      },
      fieldRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login() {
      this.loading = true;
      let userInfo = {account:this.loginForm.account, password:this.loginForm.password};
      this.$api.login.login(userInfo).then((res) => {
          if(res.msg != null) {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          } else {
            Cookies.set('token', res.data.token); // 放置token到Cookie
            Cookies.set('authorization', res.data.authorization); // 放置authorization到Cookie
            Cookies.set('appId', res.data.appId); // 放置appId到Cookie
            sessionStorage.setItem('user', userInfo.account); // 保存用户到本地会话
            this.$store.commit('menuRouteLoaded', false); // 要求重新加载导航菜单
            this.$router.push('/');  // 登录成功，跳转到主页
          }
          this.loading = false;
        }).catch((res) => {
          this.$message({
          message: res.message,
          type: 'error'
          })
        });
    },
    refreshCaptcha: function(){
      this.loginForm.src = this.global.baseUrl + "/captcha.jpg?t=" + new Date().getTime();
    },
    reset() {
      this.$refs.loginForm.resetFields()
    },
    // 切换主题
    onThemeChange: function(themeColor) {
      this.$store.commit('setThemeColor', themeColor)
    }
  },
  mounted() {
    this.refreshCaptcha()
  },
  computed:{
    ...mapState({
      themeColor: state=>state.app.themeColor
    })
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  .el-button--primary {
    color: #FFF;
    background-color: #0D6DAD;
    border-color: #0D6DAD;
  }
  .el-button--primary:focus, .el-button--primary:hover {
    background: #3d8abd;
    border-color: #3d8abd;
    color: #FFF;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #DCDFE6;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
</style>
