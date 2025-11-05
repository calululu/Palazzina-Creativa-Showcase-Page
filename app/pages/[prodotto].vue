<script setup lang="ts">
import type { dataProdottoTypes } from "~~/shared/types/types";
import useAnimProdotto from "~/utils/anim/useAnimProdotto";

const route = useRoute();
const {
  data: product,
  status,
  error,
} = useFetch<dataProdottoTypes>(`/api/prodottiITA/${route.params.prodotto}`);

//SEO
useSeoMeta({
  description: `Pagina prodotto ${product?.value?.name}`,
});

//Animazione GSAP
onUpdated(() => {
  useAnimProdotto();
});
</script>

<template>
  <section aria-label="prodotto" class="prodotto">
    <Loader v-if="status === 'pending'">Caricamento . . .</Loader>
    <div v-else-if="error">Errore nel caricamento del prodotto</div>
    <div v-else>
      <h1 class="prodotto__titolo">
        {{ product?.name }}
      </h1>
      <p class="prodotto__descrizione">
        {{ product?.longDescription }}
      </p>

      <div class="prodotto__info">
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

      <div class="prodotto__immagini">
        <img
          v-for="gallery in product?.gallery"
          :src="gallery"
          :alt="product?.name"
          class="object-cover"
          loading="lazy"
        />
      </div>

      <ProdottoBottone to="/">Torna ai prodotti</ProdottoBottone>
    </div>
  </section>
</template>
