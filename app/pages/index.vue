<script setup lang="ts">
const {
  data: products,
  error,
  status,
} = useFetch<{ products: dataProdottiTypes }>("/api/prodottiITA", {
  lazy: true,
});
</script>

<template>
  <h1 class="text-amber-600 text-center mb-10 font-extrabold">
    PAGINA PRODOTTI
  </h1>

  <Loader v-if="status === 'pending'">Caricamento . . .</Loader>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <section
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center justify-items-center items-center content-center"
    aria-label="lista prodotti"
  >
    <CartaProdotto
      v-for="product in products"
      :key="product.id"
      :product="product"
      route=""
    />
  </section>
</template>
