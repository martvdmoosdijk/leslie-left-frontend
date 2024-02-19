import { useVisibleTask$ } from "@builder.io/qwik";
import Lenis from "@studio-freight/lenis";

/**
 * Initializes the smooth scroll effect.
 */
export function useSmoothScroll() {
  useVisibleTask$(() => {
    const lenis = new Lenis({
      lerp: 0.13,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
}