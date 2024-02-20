import { useVisibleTask$, type Signal, useSignal } from "@builder.io/qwik";

type useScrollOptions = {
  /** Default: bottom  */
  start?: 'top' | 'bottom' | number
  /** Default: bottom  */
  end?: 'top' | 'bottom' | number
}

/**
 * Keeps track of the scroll percentage of the target element within the viewport
 */
export function useScroll(target: Signal<HTMLDivElement | undefined>, options: useScrollOptions = {}) {
  const ready = useSignal(false);
  const scrollY = useSignal(0);
  const scrollYProgress = useSignal(0);

  useVisibleTask$(({ cleanup }) => {
    if (!target.value) return

    const updateScrollMetadata = () => {
      const startOffset = (options.start === undefined || options.start === 'bottom') ?
        window.innerHeight :
        options.start === 'top' ? 0 : options.start

      const endOffset = (options.end === undefined || options.end === 'bottom') ?
        window.innerHeight :
        options.end === 'top' ? 0 : options.end

      const startAt = target.value!.offsetTop - startOffset
      const endAt = target.value!.offsetTop + target.value!.clientHeight - endOffset
      const maxScrollAmount = endAt - startAt

      return { startAt, maxScrollAmount }
    }

    const updateScrollInfo = ({ startAt, maxScrollAmount }: ReturnType<typeof updateScrollMetadata>) => {
      const curPos = window.scrollY
      const scrolled = Math.min(maxScrollAmount, Math.max(0, curPos - startAt))
      const scrolledPercentage = scrolled / maxScrollAmount

      scrollY.value = scrolled
      scrollYProgress.value = scrolledPercentage
    };

    const onScroll = () => {
      updateScrollInfo(scrollMetadata)
    }
    const onResize = () => {
      scrollMetadata = updateScrollMetadata()
      updateScrollInfo(scrollMetadata)
    }

    // TODO Performance improvement - RAF
    // TODO Performance improvement - Single scroll/resize handler
    let scrollMetadata = updateScrollMetadata()
    onResize()
    ready.value = true

    window.addEventListener("scroll", onScroll);
    window.addEventListener('resize', onResize);
    cleanup(() => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener('resize', onResize);
    });

  }, { strategy: 'document-ready' })

  return {
    ready,
    scrollY,
    scrollYProgress,
  }
}