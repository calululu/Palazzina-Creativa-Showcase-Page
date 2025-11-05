import useProdotto from "~/utils/useProdotto";

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug;

  return await useProdotto(slug, "en");
});
