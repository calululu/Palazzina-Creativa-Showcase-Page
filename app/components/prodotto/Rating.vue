<script setup lang="ts">
defineProps(["rating", "titolo"]);
</script>

<template>
  <div class="flex sm:gap-8 sm:flex-row flex-col">
    <h3 class="font-semibold">{{ titolo }}:</h3>
    <div>
      <p>{{ rating }}</p>
    </div>
  </div>
</template>
