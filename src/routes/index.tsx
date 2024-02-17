import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Counter } from "~/components/counter/counter";

export default component$(() => {
  return (
    <>
      <h1>Home page</h1>
      <Counter />
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