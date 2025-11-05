<script setup lang="ts">
defineProps(["disponibilità", "titolo"]);
</script>

<template>
  <div class="flex sm:gap-8 sm:flex-row flex-col">
    <h3 class="font-semibold">{{ titolo }}:</h3>
    <div>
      <p>{{ disponibilità }}</p>
    </div>
  </div>
</template>
