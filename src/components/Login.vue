<template>
  <div class="login">
    <div class="login-header">
      <h1>后台管理系统</h1>
    </div>
    <div class="login-content">
      <div :class="{'error':error}">
        <h2>登录</h2>
        <el-form ref="loginForm" :model="loginForm" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>