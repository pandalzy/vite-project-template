<template>
  <div>
    Home
    <button @click="login">login</button>
  </div>
</template>

<script setup lang="ts">
import { loginApi } from "../../api/login";
async function login() {
  const payload = {
    username: "admin",
    password: "123456"
  }
  const res = await loginApi(payload);
  console.log(res);
}
</script>

<style scoped>
</style>