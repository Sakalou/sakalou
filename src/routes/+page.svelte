<script lang="ts">
  import PostPreviewsSection from '$lib/components/general/PostPreviewsSection.svelte';
  import { posts } from '$lib/content/posts';
  import { Category } from '$lib/enums/Category';
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

{#if posts[Category.RIDES].length}
  <PostPreviewsSection category={Category.RIDES} posts={posts[Category.RIDES]} />
{/if}

{#if posts[Category.BLOG].length}
  <PostPreviewsSection category={Category.BLOG} posts={posts[Category.BLOG]} />
{/if}
