import type { Signal } from "@builder.io/qwik";

export function signalValue<T>(input: T | Signal<T>): T {
  if (input && typeof input === "object" && "value" in input) return input.value;
  return input;
}