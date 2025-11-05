<script setup lang="ts">
import useAnimProdotto from "~/utils/anim/useAnimProdotto";
import type { dataProdottoTypes } from "~~/shared/types/types";

const route = useRoute();
const {
  data: product,
  status,
  error,
} = useFetch<dataProdottoTypes>(`/api/prodottiEN/${route.params.prodotto}`);

//SEO
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
useSeoMeta({
  description: `Product page ${product?.value?.name}`,
});

//Animazione GSAP
onUpdated(() => {
  useAnimProdotto();
});
</script>

<template>
  <section aria-label="prodotto" class="prodotto">
    <Loader v-if="status === 'pending'">Loading . . .</Loader>
    <div v-else-if="error">Error Loading the product</div>
    <div v-else>
      <h1 class="prodotto__titolo">
        {{ product?.name }}
      </h1>
      <p class="prodotto__descrizione">
        {{ product?.longDescription }}
      </p>

      <div class="prodotto__info">
        <ProdottoRating :rating="product?.rating" titolo="Rating" />
        <ProdottoRecensioni :recensioni="product?.reviews" titolo="Reviews" />

        <ProdottoDisponibilità
          :disponibilità="product?.availability"
          titolo="Avaiability"
        />

        <ProdottoDimensioni
          :dimensioni="product?.dimensions"
          titolo="Dimensions"
        />
        <ProdottoColori :colori="product?.colors" titolo="Colors" />
      </div>

      <div class="prodotto__immagini">
        <img
          v-for="gallery in product?.gallery"
          :src="gallery"
          :alt="product?.name"
          class="object-cover"
          loading="lazy"
        />
      </div>

      <ProdottoBottone to="/en">Back to products</ProdottoBottone>
    </div>
  </section>
</template>
