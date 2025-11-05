import useProdotti from "~/utils/useProdotti";

export default defineEventHandler(async () => {
  return await useProdotti("it");
});
