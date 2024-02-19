import { component$ } from "@builder.io/qwik";

// @ts-expect-error
import Image from "./come-on-ep-cover.png?jsx&format=webp";

export default component$(() => {
  return <Image />;
});
