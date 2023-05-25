<template>
  <div>
    <h1>Login</h1>
    <button @click="login">login</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStoreWithOut } from "@/store/modules/user";
import { useRouter } from "vue-router";

const router = useRouter();
async function login() {
  const payload = {
    username: "admin",
    password: "123456"
  }
  const userStore = useUserStoreWithOut();
  userStore.login(payload);
  router.push('/home');
}
</script>

<style scoped></style>