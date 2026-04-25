<script lang="ts">
  import PostPreviewsSection from '$lib/components/general/PostPreviewsSection.svelte';
  import { Category } from '$lib/enums/Category';
  import { content } from '$lib/store/content.svelte.js';
</script>

<h1
  class="
      col-2
      mx-auto
      w-full
      max-w-3xl
      font-raleway
      text-2xl
      font-semibold
      lg:text-4xl"
>
  Дневники велосипедиста
</h1>

{#if content.posts[Category.RIDES].length}
  <PostPreviewsSection category={Category.RIDES} posts={content.posts[Category.RIDES]} />
{/if}

{#if content.posts[Category.BLOG].length}
  <PostPreviewsSection category={Category.BLOG} posts={content.posts[Category.BLOG]} />
{/if}
