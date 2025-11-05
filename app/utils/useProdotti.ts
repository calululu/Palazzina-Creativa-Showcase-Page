export default async function (language: "it" | "en" | "es" = "it") {
  const data = await $fetch(
    "https://tech-test.palazzinacreativa.it/api/products",
    {
      headers: { "Accept-Language": language },
    }
  );
  return data as dataProdottiTypes;
}
