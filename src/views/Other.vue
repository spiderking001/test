<template>
  <div class="three">
    <h2>Other界面</h2>
    <el-row :gutter="20">
      <el-col :span="6">1</el-col>
      <el-col :span="6">2</el-col>
      <el-col :span="6">3</el-col>
      <el-col :span="6">4</el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  computed:{

  }
}

</script>

<style scoped>
.three{
  @apply bg-blue-500 h-screen
}
</style>