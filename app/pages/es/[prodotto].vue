<script setup lang="ts">
import useAnimProdotto from "~/utils/anim/useAnimProdotto";
import type { dataProdottoTypes } from "~~/shared/types/types";

const route = useRoute();
const {
  data: product,
  status,
  error,
} = useFetch<dataProdottoTypes>(`/api/prodottiES/${route.params.prodotto}`);

//SEO
useHead({
  htmlAttrs: {
    lang: "es",
  },
});
useSeoMeta({
  description: `Página producto ${product?.value?.name}`,
});

//Animazione GSAP
onUpdated(() => {
  useAnimProdotto();
});
</script>

<template>
  <section aria-label="prodotto" class="prodotto">
    <Loader v-if="status === 'pending'">Cargando . . .</Loader>
    <div v-else-if="error">Error al cargar el producto</div>
    <div v-else>
      <h1 class="prodotto__titolo">
        {{ product?.name }}
      </h1>
      <p class="prodotto__descrizione">
        {{ product?.longDescription }}
      </p>

      <div class="prodotto__info">
        <ProdottoRating :rating="product?.rating" titolo="Evaluación" />
        <ProdottoRecensioni :recensioni="product?.reviews" titolo="Reseñas" />

        <ProdottoDisponibilità
          :disponibilità="product?.availability"
          titolo="Disponibilidad"
        />

        <ProdottoDimensioni
          :dimensioni="product?.dimensions"
          titolo="Dimensiones"
        />
        <ProdottoColori :colori="product?.colors" titolo="Bandera" />
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

      <ProdottoBottone to="/es">Volver a productos</ProdottoBottone>
    </div>
  </section>
</template>
