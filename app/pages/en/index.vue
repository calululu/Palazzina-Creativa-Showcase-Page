<script setup lang="ts">
//SEO
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
useSeoMeta({
  title: "Brief for Palazzina Creativa",
  description: "I hope they'll take me in",
});

//DATA
const {
  data: products,
  error,
  status,
} = useFetch<{ products: dataProdottiTypes }>("/api/prodottiEN", {
  lazy: true,
});
</script>

<template>
  <h1 class="text-amber-600 text-center mb-10 text-2xl font-extrabold">
    PRODUCT PAGE
  </h1>

  <div
    v-if="status === 'pending'"
    class="text-amber-600 font-bold text-center"
    aria-live="polite"
  >
    Loading page...
  </div>

  <div v-else-if="error">Error: {{ error.message }}</div>
  <section
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center justify-items-center items-center content-center"
    aria-label="product list"
  >
    <CartaProdotto
      v-for="product in products"
      :key="product.id"
      :product="product"
      route="en"
    />
  </section>
</template>
