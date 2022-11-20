<template>
  <div>
    <h2 class="flex justify-center items-center bg-blue-500 h-[100px] text-3xl text-pink-400">User界面</h2>
  </div>
  <div class="flex justify-center m-4">
    <el-button @click="getList">获取学生信息</el-button>
  </div>

  <div class="ml-6">
    <el-row :gutter="20">
      <el-col :span="10">

        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="姓名" width="180">
            <template #default="scope">
              <el-link :underline="false" type="primary">{{ scope.row.username }}</el-link>
            </template>
          </el-table-column>

          <el-table-column label="密码" width="180">
            <template #default="scope">
              <el-link :underline="false" type="primary">{{ scope.row.password }}</el-link>
            </template>

          </el-table-column>
          <el-table-column label="状态" width="180">
            <template #default="scope">
              <el-popover effect="light" width="auto">
                <template #reference>
                  <el-tag>{{ scope.row.status === 0 ? "激活" : '未激活' }}</el-tag>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <!--            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
              <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  class="bg-red-500">Delete
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="10">
        <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            class="w-[250px] ml-20"
        >
          <el-form-item prop="username">
            <el-input v-model="form.username" autocomplete="off" placeholder="请输入学生姓名">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <search/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" autocomplete="off" placeholder="请输入密码">
              <template #prefix>
                <el-icon>
                  <Lock/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" round class="bg-blue-500">提交信息</el-button>

          </el-form-item>
        </el-form>
      </el-col>

    </el-row>
  </div>

</template>

<script setup>
import {getUser, addUser, deleteUser} from "@/api";
import {ref, reactive} from "vue";

const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}
  ]
}

// 提交用户信息
const onSubmit = async () => {
  const res = await addUser(form)
  console.log(res)
  getList()
}
// const list = ref([])
const tableData = ref([])

const getList = () => {
  getUser().then(res => {
    console.log(res);
    // list.value = res.data
    tableData.value = res.data
  });
};

const handleDelete = async (index, row) => {
  console.log(index, row)
  const res = await deleteUser(row.id)
  console.log(res)
  getList()
}


</script>

<style scoped>

</style>