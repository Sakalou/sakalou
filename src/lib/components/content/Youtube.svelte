<script lang="ts">
  const {
    id,
    title,
    horizontal = false
  }: { id: string; title: string; horizontal: boolean } = $props();
</script>

<div class="-mx-4">
  <div
    class="mx-auto max-h-[min(calc(var(--spacing)*192),100svh)] {horizontal
      ? 'aspect-16/9 max-w-5xl'
      : 'aspect-9/16 max-w-full'}"
  >
    <iframe
      {title}
      class="h-full w-full"
      src="https://www.youtube.com/embed/{id}?wmode=opaque"
      frameborder="0"
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      data-link={!horizontal && `https://www.youtube.com/shorts/${id}`}
      data-is-shorts={!horizontal}
    ></iframe>
  </div>
</div>
