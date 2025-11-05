<script setup lang="ts">
defineProps(["dimensioni", "titolo"]);
</script>

<template>
  <div class="flex sm:gap-8 sm:flex-row flex-col">
    <h3 class="font-semibold">{{ titolo }}:</h3>
    <div class="flex gap-4 italic">
      <p>{{ dimensioni.width }}</p>
      <p>{{ dimensioni.height }}</p>
      <p>{{ dimensioni.depth }}</p>
    </div>
  </div>
</template>
