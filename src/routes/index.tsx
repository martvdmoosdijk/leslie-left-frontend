import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ScrollingGallery } from "~/components/scrolling-gallery/scrolling-gallery";

export default component$(() => {
  return (
    <>
      {/* <div style="height: 100vh; border: 1px solid green;">100vh</div>
      <div style="height: 100px; border: 1px solid orange;">100px</div>
      <div style="height: 100vh; border: 1px solid green;">100vh</div> */}
      {/* <div style="height: 100px; border: 1px solid orange;">100px</div> */}
      <ScrollingGallery />
      {/* <div style="height: 100px; border: 1px solid orange;">100px</div> */}
      <div style="height: 100vh; border: 1px solid green;">100vh</div>
      <div style="height: 100px; border: 1px solid orange;">100px</div>
      <div style="height: 100vh; border: 1px solid green;">100vh</div>
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
