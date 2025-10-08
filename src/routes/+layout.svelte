<script lang="ts">
  import '../app.css';
  import Breadcrumbs from '$lib/components/general/Breadcrumbs.svelte';
  import { content } from '$lib/store/content.svelte.js';

  let { children } = $props();
  const crumbsVisible = $derived(!!content.crumbs.length);
</script>

<header class="grid grid-cols-(--grid-cols-layout) justify-center pt-4 pb-2">
  <a href="/" class="col-2 flex items-center gap-2 font-raleway">
    <svg class="h-12 w-12">
      <use href="/sprite.svg#hat" />
    </svg>
    <span class="text-xl">Сакалоў</span>
  </a>
</header>

<main class="flex flex-col gap-8 px-4 py-8">
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
