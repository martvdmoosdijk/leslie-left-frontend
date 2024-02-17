import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./scrolling-gallery.scss?inline";
import ImageComeOneEpCover from "../../images/come-on-ep-cover.png?jsx";
import { useScroll } from "~/hooks/useScroll";
import { useTransform } from "~/hooks/useTransform";
// import { animate } from "motion";

export const ScrollingGallery = component$(() => {
  useStylesScoped$(styles);

  const rootElement = useSignal<HTMLDivElement>();
  const { scrollYProgress } = useScroll(rootElement);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

  return (
    <div class="container" ref={rootElement}>
      <div class="gallery" style={`opacity: ${opacity.value}`}>
        <ImageComeOneEpCover class="gallery__image" />
        <ImageComeOneEpCover class="gallery__image" />
        <ImageComeOneEpCover class="gallery__image" />
        <ImageComeOneEpCover class="gallery__image" />
        <ImageComeOneEpCover class="gallery__image" />
      </div>
    </div>
  );
});
