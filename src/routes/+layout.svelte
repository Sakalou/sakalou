<script lang="ts">
  import '../app.css';
  import Breadcrumbs from '$lib/components/general/Breadcrumbs.svelte';
  import { content, crumbNames } from '$lib/store/content.svelte.js';

  let { children } = $props();
  const crumbsVisible = $derived(!!content.crumbs.length);
  const title = $derived(
    [crumbNames.postName, crumbNames.categoryName].flatMap((name) => (name ? [`${name} | `] : []))
  );
</script>

<svelte:head>
  <title>{title}Сакалоў</title>
</svelte:head>

<header class="grid grid-cols-(--grid-cols-layout) justify-center pt-4 sm:pt-6">
  <a href="/" class="col-2 flex items-center gap-2 justify-self-start font-raleway">
    <svg class="h-8 w-12">
      <use href="/sprite.svg#hat" />
    </svg>
    <span class="text-xl font-medium">Сакалоў</span>
  </a>
</header>

<main class="grid grow grid-cols-(--grid-cols-layout) content-start gap-y-8 py-8">
  {#if crumbsVisible}
    <Breadcrumbs />
  {/if}

  {@render children()}
</main>

<footer class="grid grid-cols-(--grid-cols-layout) justify-center py-4 text-sm">
  <ul class="col-2">
    <li>
      Телеграм-канал: <a
        href="https://t.me/sakalounotes"
        target="_blank"
        class="text-sky-600 underline underline-offset-4 hover:no-underline">@sakalounotes</a
      >
    </li>
    <li>
      Инстаграм: <a
        href="https://www.instagram.com/sakalou/"
        target="_blank"
        class="text-sky-600 underline underline-offset-4 hover:no-underline">@sakalou</a
      >
    </li>
  </ul>
</footer>
