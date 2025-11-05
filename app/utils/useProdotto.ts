import type { dataProdottiTypes } from "~~/shared/types/types";

export default async function (
  slug: string | undefined,
  language: "it" | "en" | "es" = "it"
) {
  try {
    const data = await $fetch(
      `https://tech-test.palazzinacreativa.it/api/products/${slug}`,
      {
        headers: { "Accept-Language": language },
      }
    );

    return data as dataProdottiTypes;
  } catch (error) {
    console.error(error);
  }
}
