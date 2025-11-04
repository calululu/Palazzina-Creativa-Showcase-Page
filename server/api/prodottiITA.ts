import type { dataProdottiTypes } from "~~/shared/types/types";

export default defineEventHandler(async () => {
  const data = await $fetch(
    "https://tech-test.palazzinacreativa.it/api/products",
    {
      headers: { "Accept-Language": "it" },
    }
  );
  return data as dataProdottiTypes;
});
