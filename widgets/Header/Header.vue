<script setup lang="ts">
import { navBarRoutes } from "./Header.constants";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="route in navBarRoutes" :key="route.route">
          <NuxtLink :to="route.route">{{ $t(route.title) }}</NuxtLink>
        </li>
      </ul>
      <LangSwitcher />
    </nav>
  </header>
</template>
