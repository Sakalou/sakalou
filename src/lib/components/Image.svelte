<script lang="ts">
  let {
    lazy = true,
    alt = '',
    src,
    figcaption
  }: { lazy: boolean; alt: string; src: string; figcaption?: string } = $props();
</script>

<figure>
  <img loading={lazy && 'lazy'} {src} {alt} />

  {#if figcaption}
    <figcaption class="text-center text-black/50">{figcaption}</figcaption>
  {/if}
</figure>
