<script setup>
defineProps(["product"]);
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <h3 class="font-bold">{{ product.name }}</h3>
    <img :src="product.image" :alt="product.name" />
    <p class="italic">${{ product.price }}</p>
  </div>
</template>
