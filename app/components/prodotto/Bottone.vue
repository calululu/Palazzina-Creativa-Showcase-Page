<script setup lang="ts">
defineProps(["to"]);
</script>

<template>
  <button @click="navigateTo(to)" class="text-blue-600 mt-16 hover:underline">
    ← <slot />
  </button>
</template>
