<template>
  <div class="home">
    <h1>Home</h1>
    <div>count: {{ counter.count }}</div>
    <div>doubleCount: {{ counter.doubleCount }}</div>
    <button @click="counter.increment()">+1</button>
  </div>
</template>
<script lang="ts">
export default { name: "Home" }
</script>
<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counter';
const counter = useCounterStore();
counter.count++;
counter.increment();
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
}
</style>