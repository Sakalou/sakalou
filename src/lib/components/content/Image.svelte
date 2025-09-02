<script lang="ts">
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

  let src: string = $derived(`https://ik.imagekit.io/sakalou/rides/lake-bike-ride/${file}`);
  let minWidth: number = $derived.by(() => {
    const calculatedWidth = Math.ceil((ratio[0] * MAX_HEIGHT) / ratio[1]);

    return calculatedWidth > MAX_WIDTH ? MAX_WIDTH : calculatedWidth;
  });
  let srcset: string = $derived.by(() => {
    const widths = [...new Set([...WIDTHS, minWidth * 2])].toSorted((a, b) => a - b);

    return widths.map((width) => `${src}?tr=w-${width},f-webp,q-70 ${width}w`).join(', ');
  });
</script>

<figure class="flex flex-col gap-2 align-middle">
  <img
    loading="lazy"
    {src}
    {srcset}
    {alt}
    sizes="(min-width: {minWidth}px) {minWidth}px, 100vw"
    class="not-prose aspect-[{ratio[0]}/{ratio[1]}] max-h-[min(100svh,{MAX_HEIGHT}px)] max-w-[{MAX_WIDTH}px] object-contain"
  />

  {#if title}
    <figcaption class="not-prose text-center text-sm text-black/50">{title}</figcaption>
  {/if}
</figure>
