import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const NavBar = component$(() => {
  return (
    <nav class="fixed z-navbar w-full flex flex-row gap-2 px-4 py-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
});
