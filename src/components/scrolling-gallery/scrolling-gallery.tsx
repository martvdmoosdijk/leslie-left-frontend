import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import comeOnEpCover from "../image/come-on-ep-cover";
import stockImg from "../image/stock-img";
import { animate, scroll } from "motion";

type Image = {
  component: any;
  moveX: string;
  moveY: string;
  position: [string, string];
};

const images: Image[] = [
  {
    component: comeOnEpCover,
    moveX: "0vw",
    moveY: "-5vh",
    position: ["0vw", "-20vh"],
  },
  {
    component: comeOnEpCover,
    moveX: "-5vw",
    moveY: "5vh",
    position: ["-10vw", "20vh"],
  },
  {
    component: comeOnEpCover,
    moveX: "5vw",
    moveY: "-5vh",
    position: ["30vw", "-5vh"],
  },
  {
    component: comeOnEpCover,
    moveX: "5vw",
    moveY: "5vh",
    position: ["20vw", "30vh"],
  },
  {
    component: stockImg,
    moveX: "-5vw",
    moveY: "-5vh",
    position: ["-20vw", "-10vh"],
  },
  {
    component: comeOnEpCover,
    moveX: "0",
    moveY: "0",
    position: ["0", "0"],
  },
];

export const ScrollingGallery = component$(() => {
  const ready = useSignal(false);
  const containerElement = useSignal<HTMLDivElement>();
  const innerElement = useSignal<HTMLDivElement>();
  const imageElements = useSignal<HTMLDivElement[]>([]);

  useVisibleTask$(
    () => {
      scroll(animate(innerElement.value!, { scale: [1, 3] }), {
        target: containerElement.value!,
        offset: ["start start", "end end"],
      });

      imageElements.value.forEach((imgEl, idx) => {
        scroll(
          animate(imgEl, {
            x: [0, images[idx].moveX],
            y: [0, images[idx].moveY],
          }),
          {
            target: containerElement.value!,
            offset: ["start start", "end end"],
          }
        );
      });

      ready.value = true;
    },
    { strategy: "document-ready" }
  );

  return (
    <div class="h-[200vh]" ref={containerElement}>
      <div class="sticky top-0 h-screen overflow-hidden border border-red-900">
        <div class="size-full" ref={innerElement}>
          {images.map((img, idx) => (
            <div
              key={idx}
              class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
              style={{
                left: `calc(${img.position[0]} + 50%)`,
                top: `calc(${img.position[1]} + 50%)`,
                opacity: ready.value ? 1 : 0,
              }}
            >
              <div
                ref={(s) => imageElements.value.push(s)}
                class="h-auto w-[200px]"
              >
                <img.component />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
