<script setup lang="ts">
import { gsap } from "gsap";

defineProps<{ product: dataProdottiTypes; route: "en" | "" | "es" }>();

//Animazione GSAP
onMounted(() => {
  gsap.to(".cartaProdotto", {
    y: 50,
    stagger: 0.1,
  });
});
const onMouseEnter = (e: MouseEvent) => {
  gsap.to(e.currentTarget, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
  });
};
const onMouseLeave = (e: MouseEvent) => {
  gsap.to(e.currentTarget, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
};
</script>

<template>
  <NuxtLink
    class="cartaProdotto flex flex-col items-center gap-4"
    :to="`${route}/${product.slug}`"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
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
