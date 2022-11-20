<template>
  <h2>
    Home页面
    <ul>
      <li v-for="(value,key,index) of info" :key="index">{{ key }}{{ value }}:{{ index }}</li>
    </ul>
    <button class="bg-blue-500 ml-5 rounded" @click="addNum">+1</button>
    <h2>{{ $store.state.num }}</h2>
    <el-drawer
        v-model="drawer"
        title="I am the title"

        :before-close="handleClose"
    >
      <span>Hi, there!</span>
    </el-drawer>

    <el-button style="margin-left: 16px" @click="drawer = true" class="bg-amber-500">
      open
    </el-button>
  </h2>


  <child @change="clickBtn"/>
</template>

<script setup>
import {ref} from 'vue'
import Child from "@/components/Child.vue";
const drawer = ref(false)
import {useStore} from "vuex";

const store = useStore();
const info = {
  name: '小明',
  age: 18
}
const addNum = () => {
  store.dispatch('decrement')
  store.dispatch('increment')
}
const handleClose = (done) => {
  drawer.value = false
  done()

}


const clickBtn = (val) => {
  console.log(val)
}


</script>

<style scoped>
.btn{
  @apply bg-gradient-to-br from-blue-400 to-blue-600;
}

</style>