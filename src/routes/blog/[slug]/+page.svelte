<script lang="ts">
  import Article from '$lib/components/content/Article.svelte';

  const { data } = $props();

  const component = $derived(data.component);
  const blogPost = $derived(data.blogPost);
</script>

<svelte:head>
  {#if blogPost.description}
    <meta property="og:title" content={blogPost.description} />
  {/if}
  {#if blogPost.category}
    <meta property="og:url" content="https://sakalou.by/{blogPost.category}/{blogPost.slug}" />
    {#if blogPost.image}
      <meta
        property="og:image"
        content="https://ik.imagekit.io/sakalou/{blogPost.category}/{blogPost.slug}/{blogPost.image}?tr=w-1200,f-webp,q-70"
      />
    {/if}
  {/if}
  <meta property="og:type" content="article" />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<Article article={component} title={blogPost.title} date={blogPost.date} />
