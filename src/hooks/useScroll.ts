import { type Signal, useSignal, useVisibleTask$ } from "@builder.io/qwik";

/**
 * Keeps track of the scroll percentage of the target element within the viewport
 */
export function useScroll(target: Signal<HTMLDivElement | undefined>) {
  const ready = useSignal(false);
  const scrollYProgress = useSignal(0);

  useVisibleTask$(({ cleanup }) => {
    if (!target.value) return;

    const onScroll = (() => {
      if (!target.value) return;

      const start = target.value.scrollTop
      const end = target.value.scrollHeight - target.value.scrollTop;
      const cur = window.scrollY;

      if (cur < start) {
        scrollYProgress.value = 0;
      } else if (cur > end) {
        scrollYProgress.value = 1;
      } else {
        scrollYProgress.value = (cur - start) / (end - start);
      }
    });

    const onIntersection = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        console.log('<START> Top of the target hitted bottom of the viewport ')
        window.addEventListener("scroll", onScroll);
        onScroll();
      } else {
        // TODO: Can be nicer to wait for scroll to be idle, then remove the listener. So we don't get a hard cut
        console.log('<END> Bottom of the target left bottom of the viewport')
        window.removeEventListener("scroll", onScroll);
        onScroll();
      }
    }

    const observerHandle = new IntersectionObserver(
      ([entry]) => onIntersection(entry),
      { rootMargin: '-100% 0px  0px 0px' }
    );
    observerHandle.observe(target.value);

    ready.value = true
    onScroll()

    cleanup(() => {
      window.removeEventListener("scroll", onScroll);
      observerHandle.disconnect()
    });
  })


  return {
    scrollYProgress,
    ready,
  }
}