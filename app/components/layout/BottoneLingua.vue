<script setup>
const selectedLanguage = ref("/");

const handleLanguageChange = () => {
  navigateTo(selectedLanguage.value);
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
