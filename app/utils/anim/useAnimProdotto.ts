import { gsap } from "gsap";

//Animazione pagina prodotto
export default function () {
  const tl = gsap.timeline({});

  gsap.set(
    [
      ".prodotto__titolo",
      ".prodotto__descrizione",
      ".prodotto__info",
      ".prodotto__immagini",
    ],
    {
      x: -3000,
      opacity: 0,
      ease: "expo.out",
    }
  );

  tl.to(".prodotto__titolo", {
    x: 0,
    opacity: 1,
    duration: 0.1,
  })
    .to(".prodotto__descrizione", {
      x: 0,
      opacity: 1,
      duration: 0.2,
    })
    .to(".prodotto__info", {
      x: 0,
      opacity: 1,
      duration: 0.3,
    })
    .to(".prodotto__immagini", {
      x: 0,
      opacity: 1,
      duration: 0.3,
    });
}
