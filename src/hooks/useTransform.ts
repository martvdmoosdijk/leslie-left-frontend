import { type Signal, useSignal, useTask$, useComputed$ } from "@builder.io/qwik";

/**
 * Transforms a value from one range to another
 */
export function useTransform(input: Signal<number>, from: [number, number], to: [number, number]) {
  const output = useSignal<number>(to[0]);

  useTask$(({ track }) => {
    track(() => input.value)

    output.value = (((input.value - from[0]) * (to[1] - to[0])) / (from[1] - from[0])) + to[0]
  })


  return output
}

/**
 * Transforms a value from one range to another and appends a string
 * 
 * Can be used to create a string with a unit, like "px" or "%"
 */
export function useTransformAppend(input: Signal<number>, from: [number, number], to: [number, number], append: string) {
  const output = useTransform(input, from, to)

  return useComputed$(() => output.value + append)
}