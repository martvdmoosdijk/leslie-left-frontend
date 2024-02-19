import {
  type Signal,
  component$,
  useSignal,
  useStylesScoped$,
  useComputed$,
} from "@builder.io/qwik";

import styles from "./scrolling-gallery.scss?inline";
// import ImageComeOneEpCover from "../../images/come-on-ep-cover.png?jsx";
import { useScroll } from "~/hooks/useScroll";
import { useTransform, useTransformAppend } from "~/hooks/useTransform";
import comeOnEpCover from "../image/come-on-ep-cover";
import stockImg from "../image/stock-img";

type Image = {
  component: any;
  position: [string, string];
  opacity: Signal<number>;
  scale: Signal<number>;
};

export const ScrollingGallery = component$(() => {
  useStylesScoped$(styles);

  const rootElement = useSignal<HTMLDivElement>();
  const { scrollYProgress, ready } = useScroll(rootElement);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 6.1]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5.3]);
  // const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
  // const scale9 = useTransform(scrollYProgress, [0, 1], [1, 3.9]);

  const opacitySSR = useSignal(0);
  const opacity100 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const opacity50 = useTransform(scrollYProgress, [0, 1], [0.25, 0]);
  // const moveLeft = useTransformAppend(scrollYProgress, [0, 1], [0, -100], "%");

  const images = useComputed$<Image[]>(() => [
    {
      component: comeOnEpCover,
      position: ["0", "0"],
      opacity: ready.value ? opacity100 : opacitySSR,
      scale: scale1,
    },
    {
      component: stockImg,
      position: ["-20vw", "-10vh"],
      opacity: ready.value ? opacity100 : opacitySSR,
      scale: scale3,
    },
    // {
    //   // component: ImageComeOneEpCover,
    //   position: ["0vw", "-20vh"],
    //   opacity: opacity50,
    //   scale: scale5,
    // },
    // {
    //   // component: ImageComeOneEpCover,
    //   position: ["-10vw", "20vh"],
    //   opacity: opacity100,
    //   scale: scale3,
    // },
    // {
    //   // component: ImageComeOneEpCover,
    //   position: ["30vw", "-5vh"],
    //   opacity: opacity100,
    //   scale: scale3,
    // },
    // {
    //   // component: ImageComeOneEpCover,
    //   position: ["20vw", "30vh"],
    //   opacity: opacity100,
    //   scale: scale5,
    // },
  ]);

  return (
    <div class="container" ref={rootElement}>
      <div class="gallery">
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
                opacity: img.opacity.value,
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
