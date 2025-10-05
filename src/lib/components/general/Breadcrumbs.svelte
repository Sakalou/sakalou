<script lang="ts">
  import { content } from '$lib/store/content.svelte.js';

  function getUrl(index: number): string {
    return `/${content.crumbs
      .slice(0, index + 1)
      .map(({ value }) => value)
      .join('/')}`;
  }
</script>

<ul class="mx-auto flex w-full max-w-3xl gap-3 text-neutral-500">
  <li class="flex gap-3 not-last:after:content-['›']">
    <a href="/" aria-label="Главная" class="text-black hover:text-neutral-500">
      <svg class="block h-6 w-6 fill-none">
        <use href="/sprite.svg#home" />
      </svg>
    </a>
  </li>

  {#each content.crumbs as crumb, index (index)}
    <li class="flex gap-3 not-last:after:content-['›']">
      {#if index === content.crumbs.length - 1}
        {crumb.name}
      {:else}
        <a href={getUrl(index)} class="text-black hover:text-neutral-500">
          {crumb.name}
        </a>
      {/if}
    </li>
  {/each}
</ul>
