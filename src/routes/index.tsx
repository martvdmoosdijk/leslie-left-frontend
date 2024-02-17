import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ScrollingGallery } from "~/components/scrolling-gallery/scrolling-gallery";

export default component$(() => {
  return (
    <>
      <div style="height: 101vh;" />
      <ScrollingGallery />
      <div style="height: 200vh;" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home page",
    },
  ],
};
