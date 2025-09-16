<script lang="ts">
  import Article from '$lib/components/content/Article.svelte';
  import { page } from '$app/stores';

  export let data;

  const { component, metadata } = data;
</script>

<svelte:head>
  <title>{data.metadata.title}</title>

  <meta property="og:title" content={data.metadata.description} />
  {#if data.metadata.image}
    <meta
      property="og:image"
      content="https://ik.imagekit.io/sakalou{$page.url.pathname}/{data.metadata
        .image}?tr=w-1200,f-webp,q-70"
    />
  {/if}
  <meta property="og:url" content="https://sakalou.by{$page.url.pathname}" />
  <meta property="og:type" content="article" />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<Article article={component} title={data.metadata.title} date={metadata.date} />
