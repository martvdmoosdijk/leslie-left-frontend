import {
  type Signal,
  component$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";

import styles from "./scrolling-gallery.scss?inline";
import ImageComeOneEpCover from "../../images/come-on-ep-cover.png?jsx";
import { useScroll } from "~/hooks/useScroll";
import { useTransform, useTransformAppend } from "~/hooks/useTransform";
import { signalValue } from "../helpers/signal-value";

type Image = {
  component: typeof ImageComeOneEpCover;
  position: [string | Signal<string>, string | Signal<string>];
  opacity: number | Signal<number>;
  scale: number | Signal<number>;
};

export const ScrollingGallery = component$(() => {
  useStylesScoped$(styles);

  const rootElement = useSignal<HTMLDivElement>();
  const { scrollYProgress } = useScroll(rootElement);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 6.1]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5.3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 3.9]);

  const opacity100 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity50 = useTransform(scrollYProgress, [0, 1], [0, 0.25]);
  // const moveLeft = useTransformAppend(scrollYProgress, [0, 1], [0, -100], "%");

  const images: Image[] = [
    {
      component: ImageComeOneEpCover,
      position: ["0", "0"],
      opacity: opacity100,
      scale: scale9,
    },
    {
      component: ImageComeOneEpCover,
      position: ["-20vw", "-10vh"],
      opacity: opacity100,
      scale: scale1,
    },
    {
      component: ImageComeOneEpCover,
      position: ["0vw", "-20vh"],
      opacity: opacity50,
      scale: scale5,
    },
    {
      component: ImageComeOneEpCover,
      position: ["-10vw", "20vh"],
      opacity: opacity100,
      scale: scale3,
    },
    {
      component: ImageComeOneEpCover,
      position: ["30vw", "-5vh"],
      opacity: opacity100,
      scale: scale3,
    },
    {
      component: ImageComeOneEpCover,
      position: ["20vw", "30vh"],
      opacity: opacity100,
      scale: scale5,
    },
  ];

  return (
    <div class="container" ref={rootElement}>
      <div class="gallery">
        {images.map((img, idx) => (
          <div
            class="image-wrapper"
            key={idx}
            style={{
              transform: `translate(-50%, -50%) scale(${signalValue(img.scale)})`,
            }}
          >
            <img.component
              class="image"
              style={{
                transform: `translate(${signalValue(img.position[0])}, ${signalValue(img.position[1])})`,
                opacity: signalValue(img.opacity),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
