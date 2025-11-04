<script setup>
const {
  data: products,
  error,
  status,
} = await useFetch("/api/prodottiITA", {
  lazy: true,
});
console.log(products.value);
</script>

<template>
  <h1 class="text-amber-600 text-center mb-16">PAGINA PRODOTTI</h1>
  <div class="box">GSAP example</div>
  <div v-if="status === 'pending'" class="text-amber-600 font-bold">
    Caricamento prodotti...
  </div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center justify-items-center items-center content-center"
  >
    <CartaProdotto
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
