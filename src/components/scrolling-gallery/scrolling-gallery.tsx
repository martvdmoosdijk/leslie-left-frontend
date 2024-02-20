import {
  type Signal,
  component$,
  useSignal,
  useStylesScoped$,
  useComputed$,
  useTask$,
} from "@builder.io/qwik";

import { useScroll } from "~/hooks/useScroll";
import { useTransform } from "~/hooks/useTransform";
import comeOnEpCover from "../image/come-on-ep-cover";
import stockImg from "../image/stock-img";
import styles from "./scrolling-gallery.scss?inline";

type Image = {
  component: any;
  position: [string, string];
  scale: Signal<number>;
};

export const ScrollingGallery = component$(() => {
  useStylesScoped$(styles);

  const containerElement = useSignal<HTMLDivElement>();
  const galleryElement = useSignal<HTMLDivElement>();
  const { scrollYProgress, ready } = useScroll(containerElement, {
    start: "top",
    end: "bottom",
  });
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 6.1]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5.3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 3.9]);

  const images = useComputed$<Image[]>(() => [
    {
      component: comeOnEpCover,
      position: ["0", "0"],
      scale: scale1,
    },
    {
      component: stockImg,
      position: ["-20vw", "-10vh"],
      scale: scale3,
    },
    {
      component: comeOnEpCover,
      position: ["0vw", "-20vh"],
      scale: scale5,
    },
    {
      component: comeOnEpCover,
      position: ["-10vw", "20vh"],
      scale: scale3,
    },
    {
      component: comeOnEpCover,
      position: ["30vw", "-5vh"],
      scale: scale9,
    },
    {
      component: comeOnEpCover,
      position: ["20vw", "30vh"],
      scale: scale5,
    },
  ]);

  return (
    <div class="container" ref={containerElement}>
      <div class="gallery" ref={galleryElement}>
        {images.value.map((img, idx) => (
          <div
            class="image-wrapper"
            key={idx}
            style={{
              transform: `translate(-50%, -50%) scale(${img.scale.value})`,
            }}
          >
            <div
              class="image"
              style={{
                transform: `translate(${img.position[0]}, ${img.position[1]})`,
              }}
            >
              <img.component />
              {/* <span>Test</span> */}
              {/* <LocalImage name="come-on-ep-cover" /> */}
              {/* <LocalImage name="stock-img" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
