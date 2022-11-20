<template>
  <div style="position: fixed; bottom: 0; width: 100%">
    <div class="three1">
      <router-link to="/home">首页</router-link>
      <router-link to="/Other">其他</router-link>
      <router-link to="/User">用户</router-link>
    </div>
  </div>

  <router-view />

</template>

<script setup></script>


<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.three {
  @apply text-4xl text-white flex justify-center items-center p-0 m-0;
}

.three1 {
  text-decoration: none;
  @apply flex justify-center justify-around;
}
</style>
