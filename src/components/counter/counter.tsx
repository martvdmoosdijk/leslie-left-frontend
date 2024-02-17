import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./counter.scss?inline";

export const Counter = component$(() => {
  useStylesScoped$(styles);

  const count = useSignal(0);

  return (
    <div class="counter">
      <span>Count {count.value}</span>
      <button onClick$={() => count.value++}>Increment</button>
    </div>
  );
});
