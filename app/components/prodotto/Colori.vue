<script setup lang="ts">
defineProps(["colori", "titolo"]);
</script>

<template>
  <div class="flex sm:gap-8 sm:flex-row flex-col">
    <h3 class="font-semibold">{{ titolo }}:</h3>
    <div class="flex flex-col sm:flex-row sm:gap-4">
      <p v-for="colore in colori">
        {{ colore }}
      </p>
    </div>
  </div>
</template>
