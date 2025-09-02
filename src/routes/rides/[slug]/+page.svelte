<script lang="ts">
  import Article from '$lib/components/Article.svelte';

  export let data;

  const { component, metadata } = data;
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
</svelte:head>

<Article article={component} title={data.metadata.title} date={metadata.date} />
