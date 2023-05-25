<template>
  <div>
    <Header> </Header>
    <br />
    <Page> </Page>
  </div>
</template>
<script lang="ts">
export default {
  name: "Layout"
}
</script>
<script setup lang="ts">
import Header from './header/index.vue';
import Page from './page/index.vue';
</script>
