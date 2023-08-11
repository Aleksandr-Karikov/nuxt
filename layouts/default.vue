<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div :class="`${appConfig.theme}-mode-app`">
    <Header />
    <slot />
  </div>
</template>
