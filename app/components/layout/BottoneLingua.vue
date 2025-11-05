<script setup>
const selectedLanguage = ref("/");
const router = useRouter();

const handleLanguageChange = () => {
  router.push(selectedLanguage.value); //router.push permette di navigare sulla route che si vuole
};
</script>

<template>
  <select
    name="lingua"
    id="lingua"
    v-model="selectedLanguage"
    @change="handleLanguageChange"
  >
    <option value="/">Italiano</option>
    <option value="/en">English</option>
    <option value="/es">Español</option>
  </select>
</template>
