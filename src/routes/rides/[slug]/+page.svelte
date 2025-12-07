<script lang="ts">
  import Article from '$lib/components/content/Article.svelte';

  const { data } = $props();

  const component = $derived(data.component);
  console.log(component);
  const ride = $derived(data.ride);
</script>

<svelte:head>
  {#if ride.description}
    <meta property="og:title" content={ride.description} />
  {/if}
  {#if ride.category}
    <meta property="og:url" content="https://sakalou.by/{ride.category}/{ride.slug}" />
    {#if ride.image}
      <meta
        property="og:image"
        content="https://ik.imagekit.io/sakalou/{ride.category}/{ride.slug}/{ride.image}?tr=w-1200,f-webp,q-70"
      />
    {/if}
  {/if}
  <meta property="og:type" content="article" />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<Article article={component} title={ride.title} date={ride.date} />
