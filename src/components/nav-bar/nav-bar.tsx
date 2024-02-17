import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const NavBar = component$(() => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
});
