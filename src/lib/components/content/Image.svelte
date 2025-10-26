<script lang="ts">
  import { page } from '$app/stores';

  const MAX_WIDTH = 1024;
  const MAX_HEIGHT = 768;
  const WIDTHS = [720, 1024, 1080, 1440];

  let {
    file,
    alt,
    ratio,
    latlng,
    title
  }: {
    file: string;
    alt: string;
    ratio: [number, number];
    latlng?: [number, number];
    title?: string;
  } = $props();

  const src: string = `https://ik.imagekit.io/sakalou${$page.url.pathname}/${file}`;
  let minWidth: number = $derived.by(() => {
    const calculatedWidth = Math.ceil((ratio[0] * MAX_HEIGHT) / ratio[1]);

    return calculatedWidth > MAX_WIDTH ? MAX_WIDTH : calculatedWidth;
  });
  let srcset: string = $derived.by(() => {
    const widths = [...new Set([...WIDTHS, minWidth * 2])].toSorted((a, b) => a - b);

    return widths.map((width) => `${src}?tr=w-${width},f-webp,q-70 ${width}w`).join(', ');
  });
</script>

<figure class="flex flex-col items-center gap-2">
  <img
    loading="lazy"
    {src}
    {srcset}
    {alt}
    sizes="(min-width: {minWidth}px) {minWidth}px, 100vw"
    style="aspect-ratio: {ratio[0]}/{ratio[1]}"
    class="
      not-prose
      max-h-[min(100svh,var(--container-3xl))]
      max-w-5xl
      object-contain
    "
    data-latlng={latlng}
  />

  {#if title}
    <figcaption
      class="not-prose max-w-5xl px-4 text-center text-sm text-neutral-500 dark:text-neutral-400"
    >
      {title}
    </figcaption>
  {/if}
</figure>
