<script lang="ts">
  import Article from '$lib/components/content/Article.svelte';
  import type { Ride } from '$lib/models/content/Ride.js';
  import { rideMap } from '$lib/store/content.svelte.js';
  import { onDestroy } from 'svelte';

  const { data } = $props();

  const component = $derived(data.component);
  const ride: Ride = $derived(data.ride);

  $effect(() => {
    if (ride.gpx) {
      rideMap.track = ride.gpx;
    } else {
      rideMap.track = null;
    }
  });

  onDestroy(() => {
    rideMap.track = null;
  });
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

{#snippet mapToggle()}
  <button
    class="inline-flex cursor-pointer items-center gap-x-1 text-base text-sky-600"
    onclick={() => (rideMap.visible = !rideMap.visible)}
  >
    <svg class="block h-5 w-5">
      <use href="/sprite.svg#map" />
    </svg>
    <span class="border-b-2 border-dotted">
      {rideMap.visible ? 'Скрыть карту' : 'Показать карту'}
    </span>
  </button>
{/snippet}

<Article
  article={component}
  title={ride.title}
  date={ride.date}
  mapToggle={rideMap.track && mapToggle}
/>
