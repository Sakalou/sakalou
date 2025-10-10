<script lang="ts">
  import { Category } from '$lib/enums/Category';
  import { content } from '$lib/store/content.svelte.js';

  const categoryName: string | undefined = $derived(
    content.crumbs[0] &&
      {
        [Category.RIDES]: 'Велоотчеты'
      }[content.crumbs[0]]
  );
  const postName: string | undefined = $derived(
    content.crumbs[1] &&
      content.posts[content.crumbs[0]].find(({ slug }) => slug === content.crumbs[1])?.title
  );
</script>

<ul class="mx-auto flex w-full max-w-3xl flex-wrap gap-x-3 gap-y-1 text-sm text-neutral-500">
  <li class="flex gap-3 not-last:after:content-['›']">
    <a href="/" aria-label="Главная" class="text-black hover:text-neutral-500">
      <svg class="block h-5 w-5 fill-none">
        <use href="/sprite.svg#home" />
      </svg>
    </a>
  </li>

  {#if categoryName}
    <li class="flex gap-3 not-last:after:content-['›']">
      {#if postName}
        <a href="/{content.crumbs[0]}" class="text-black hover:text-neutral-500">
          {categoryName}
        </a>
      {:else}
        {categoryName}
      {/if}
    </li>
  {/if}

  {#if postName}
    <li class="flex gap-3 not-last:after:content-['›']">
      {postName}
    </li>
  {/if}
</ul>
