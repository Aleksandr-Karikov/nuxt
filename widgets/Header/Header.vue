<script setup lang="ts">
import { navBarRoutes } from "./Header.constants";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="route in navBarRoutes">
          <NuxtLink :to="route.route">{{ route.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
