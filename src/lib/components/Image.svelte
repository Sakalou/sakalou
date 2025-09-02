<script lang="ts">
  let {
    lazy = true,
    alt = '',
    src,
    title
  }: { lazy: boolean; alt: string; src: string; title?: string } = $props();
</script>

<figure>
  <img
    loading={lazy && 'lazy'}
    {src}
    {alt}
    class={[
      'mx-auto',
      'max-h-[min(100svh,_var(--container-3xl))]',
      'w-full',
      'max-w-5xl',
      'object-contain',
      'block'
    ]}
  />

  {#if title}
    <figcaption class="text-center text-black/50">{title}</figcaption>
  {/if}
</figure>
