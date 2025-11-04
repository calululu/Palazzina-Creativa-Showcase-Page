<script setup lang="ts">
const d: Date = new Date();
let year: number = d.getFullYear();
</script>

<template>
  <footer class="text-center text-sm italic mt-16">
    © {{ year }} Alessandro Caluori
  </footer>
</template>
