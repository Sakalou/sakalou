<script lang="ts">
  export let data;

  const { component, metadata } = data;

  const postDate: string = new Date(metadata.date).toLocaleDateString('ru-RU');
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
</svelte:head>

<article
  class="prose-link:cursor-pointer mx-auto prose-base max-w-3xl font-[IBM_Plex_Sans] sm:prose-lg prose-headings:font-[IBM_Plex_Serif] prose-headings:font-medium prose-figcaption:text-sm prose-img:mx-auto prose-img:max-h-[96svh]"
>
  <p><a href="/blog" class="underline">Return to blog</a></p>
  <h1>{data.metadata.title}</h1>
  <time datetime={metadata.date} class="block">{postDate}</time>
  <svelte:component this={component} />
</article>
