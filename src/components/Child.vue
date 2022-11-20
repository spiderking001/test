<template>
  <div>
    我是从父组件传递过来的数据：{{ props.str }}
  </div>
  <div>
    我是子组件
    <el-button class="bg-blue-300" @click="handleClick">子组件的按钮</el-button>
  </div>
   <div>在master上修改文件</div>
</template>

<script setup>

const props = defineProps({
  str: {
    type: String,
    default: ''
  }
})
const emit=defineEmits(['change'])
const handleClick = () => {
  let info = {
    name: '小明',
    age: 18
  }
  emit('change',info)
}

</script>

<style scoped>

</style>