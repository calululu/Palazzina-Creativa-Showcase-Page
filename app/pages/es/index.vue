<script setup lang="ts">
//SEO
useHead({
  htmlAttrs: {
    lang: "es",
  },
});
useSeoMeta({
  title: "Brief para Palazzina Creativa",
  description: "¡Ojalá me atrapen!",
});

//Data
const {
  data: products,
  error,
  status,
} = useFetch<{ products: dataProdottiTypes }>("/api/prodottiES", {
  lazy: true,
});
</script>

<template>
  <h1 class="text-amber-600 text-center mb-10 text-2xl font-extrabold">
    Página de productos
  </h1>

  <div
    v-if="status === 'pending'"
    class="text-amber-600 font-bold text-center"
    aria-live="polite"
  >
    Cargando . . .
  </div>

  <div v-else-if="error">Error: {{ error.message }}</div>
  <section
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center justify-items-center items-center content-center"
    aria-label="lista de productos"
  >
    <CartaProdotto
      v-for="product in products"
      :key="product.id"
      :product="product"
      route="es"
    />
  </section>
</template>
