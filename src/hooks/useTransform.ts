import { type Signal, useSignal, useTask$ } from "@builder.io/qwik";

export function useTransform(input: Signal<number>, from: [number, number], to: [number, number]) {
  const output = useSignal<number>();

  useTask$(({ track }) => {
    track(() => input.value)

    output.value = (((input.value - from[0]) * (to[1] - to[0])) / (from[1] - from[0])) + to[0]
  })


  return output
}