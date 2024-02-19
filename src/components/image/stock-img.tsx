import { component$ } from "@builder.io/qwik";

// @ts-expect-error
import Image from "./stock-img.jpg?jsx&format=webp";

export default component$(() => {
  return <Image />;
});
