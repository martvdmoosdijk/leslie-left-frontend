import {
  component$,
  useSignal,
  useTask$,
  useComputed$,
} from "@builder.io/qwik";
import { isDev } from "@builder.io/qwik/build";

// https://qwik.dev/docs/cookbook/glob-import/
const images: Record<string, any> = import.meta.glob(
  "/src/components/image/*.tsx",
  {
    import: "default",
    eager: isDev ? false : true,
  }
);

export interface LocalImageProps {
  name: "come-on-ep-cover" | "stock-img";
}

export const LocalImage = component$<LocalImageProps>(({ name }) => {
  const ImageComponent = useSignal<any>();
  const imagePath = useComputed$(() => {
    return `/src/components/image/${name}.tsx`;
  });

  useTask$(async ({ track }) => {
    track(() => imagePath.value);

    const imageGlob = images[imagePath.value];

    if (!imageGlob) {
      ImageComponent.value = undefined;
    } else if (isDev) {
      // In development, imageGlob is a function, as it is `eager:false`
      ImageComponent.value = await imageGlob();
    } else {
      // In preview/production, imageGlob is a directly accessable, as it is `eager:true`
      ImageComponent.value = imageGlob;
    }
  });

  return <>{ImageComponent.value && <ImageComponent.value />}</>;
});
