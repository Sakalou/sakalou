<script lang="ts">
  const { id, title }: { id: string; title: string } = $props();
</script>

<div class="-mx-4">
  <div class="mx-auto aspect-9/16 max-h-[min(calc(var(--spacing)*192),100svh)] max-w-full">
    <iframe
      {title}
      class="h-full w-full"
      src="https://www.youtube.com/embed/{id}?wmode=opaque"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      data-link="https://www.youtube.com/shorts/{id}"
      data-is-shorts="true"
    ></iframe>
  </div>
</div>
