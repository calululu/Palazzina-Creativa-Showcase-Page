<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted } from "vue";

defineProps<{ product: dataProdottiTypes; route: "en" | "" | "es" }>();

onMounted(() => {
  gsap.to(".cartaProdotto", {
    y: 50,
    borderRadius: "100%",
    stagger: 0.1,
  });
});
</script>

<template>
  <NuxtLink
    class="cartaProdotto flex flex-col items-center gap-4"
    :to="`${route}/${product.slug}`"
  >
    <h2 class="font-bold">{{ product.name }}</h2>
    <img
      :src="product.image"
      :alt="product.name"
      loading="lazy"
      width="300"
      height="300"
      class="object-cover"
    />
    <p class="italic">${{ product.price }}</p>
  </NuxtLink>
</template>
