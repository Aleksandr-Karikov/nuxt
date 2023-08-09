<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
console.log(appConfig.title);
</script>
