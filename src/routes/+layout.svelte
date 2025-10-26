<script lang="ts">
  import '../app.css';
  import Breadcrumbs from '$lib/components/general/Breadcrumbs.svelte';
  import ThemePicker from '$lib/components/general/ThemePicker.svelte';
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
  <svelte:element
    this={crumbsVisible ? 'a' : 'div'}
    href={crumbsVisible ? '/' : undefined}
    class={{
      'col-2 flex items-center gap-2 justify-self-start font-raleway': true,
      'cursor-default': !crumbsVisible
    }}
  >
    <svg class="h-8 w-12">
      <use href="/sprite.svg#hat" />
    </svg>
    <span class="text-xl font-medium">Сакалоў</span>
  </svelte:element>
</header>

<main class="grid grow grid-cols-(--grid-cols-layout) content-start gap-y-8 py-8">
  {#if crumbsVisible}
    <Breadcrumbs />
  {/if}

  {@render children()}
</main>

<footer class="grid grid-cols-(--grid-cols-layout) justify-center py-4 text-sm sm:py-6">
  <div class="col-2 flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
    <ul class="col-2">
      <li>
        Телеграм-канал: <a
          href="https://t.me/sakalounotes"
          target="_blank"
          class="text-sky-600 underline underline-offset-4 hover:no-underline dark:text-sky-300"
          >@sakalounotes</a
        >
      </li>
      <li>
        Инстаграм: <a
          href="https://www.instagram.com/sakalou/"
          target="_blank"
          class="text-sky-600 underline underline-offset-4 hover:no-underline dark:text-sky-300"
          >@sakalou</a
        >
      </li>
    </ul>

    <ThemePicker />
  </div>
</footer>
