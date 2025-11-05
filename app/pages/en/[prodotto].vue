<script setup lang="ts">
import type { dataProdottoTypes } from "~~/shared/types/types";

const route = useRoute();
const {
  data: product,
  pending,
  error,
} = useFetch<dataProdottoTypes>(`/api/prodottiEN/${route.params.prodotto}`);
console.log(product);
</script>

<template>
  <section aria-label="prodotto" class="min-h-screen mx-4">
    <div v-if="pending">Caricamento prodotto...</div>
    <div v-else-if="error">Errore nel caricamento del prodotto</div>
    <div v-else>
      <h1 class="text-2xl font-bold mb-4 text-center">{{ product?.name }}</h1>
      <p class="text-center">{{ product?.longDescription }}</p>

      <div class="flex flex-col items-start my-8 mx-auto w-1/2 border p-4">
        <ProdottoRating :rating="product?.rating" titolo="Rating" />
        <ProdottoRecensioni
          :recensioni="product?.reviews"
          titolo="Recensioni"
        />

        <ProdottoDisponibilità
          :disponibilità="product?.availability"
          titolo="Disponibilità"
        />

        <ProdottoDimensioni
          :dimensioni="product?.dimensions"
          titolo="Dimensioni"
        />
        <ProdottoColori :colori="product?.colors" titolo="Colori" />
      </div>

      <div class="flex gap-4 items-center justify-center flex-wrap">
        <img
          v-for="gallery in product?.gallery"
          :src="gallery"
          :alt="product?.name"
          class="object-cover max-w-96 max-h-96"
          loading="lazy"
        />
      </div>

      <NuxtLink to="/" class="text-blue-600 mt-8">
        ← Torna ai prodotti
      </NuxtLink>
    </div>
  </section>
</template>
