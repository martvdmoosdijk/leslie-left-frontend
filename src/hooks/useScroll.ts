// https://www.fabiobiondi.dev/blog/2023-08/qwik-debounce-custom-hook/

import { type Signal, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

export function useScroll(target: Signal<HTMLDivElement | undefined>) {
  const scrollYProgress = useSignal(0);

  const onScroll = $(() => {
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

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    if (!target.value) return;

    onScroll()

    const observerHandle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('<START> Top of the target hitted bottom of the viewport ')
          window.addEventListener("scroll", onScroll);
          onScroll();
        } else {
          console.log('<END> Bottom of the target left bottom of the viewport')
          window.removeEventListener("scroll", onScroll);
        }
      },
      { rootMargin: '-100% 0px  0px 0px' }
    );
    observerHandle.observe(target.value);

    cleanup(() => {
      window.removeEventListener("scroll", onScroll);
      observerHandle.disconnect()
    });
  })


  return { scrollYProgress }
}