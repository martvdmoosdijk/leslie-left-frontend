import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import styles from "./nav-bar.scss?inline";

export const NavBar = component$(() => {
  useStylesScoped$(styles);

  return (
    <nav class="nav-bar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
});
