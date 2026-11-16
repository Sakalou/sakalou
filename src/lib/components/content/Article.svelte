<script lang="ts">
  let {
    article,
    title,
    date,
    track
  }: {
    title: string;
    date: string;
    track?: string;
  } = $props();

  const postDate: string = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
</script>

<article
  class="
    prose-link:cursor-pointer
    prose-base
    lg:prose-lg
    prose-h1:mx-auto
    prose-h1:max-w-5xl
    prose-h1:font-raleway
    prose-h1:text-2xl
    prose-h1:font-semibold
    lg:prose-h1:text-4xl
    prose-h2:mx-auto
    prose-h2:max-w-3xl
    prose-h2:font-raleway
    prose-h2:text-xl
    prose-h2:font-semibold
    lg:prose-h2:text-2xl
    prose-p:mx-auto
    prose-p:max-w-3xl
    prose-a:text-sky-600
    prose-a:underline
    prose-a:underline-offset-4
    prose-a:visited:text-violet-800
    prose-a:hover:no-underline
    dark:prose-a:visited:text-violet-500
    prose-figure:-mx-4
    md:prose-figure:mx-0
    prose-ol:mx-auto
    prose-ol:max-w-3xl
    prose-ol:list-decimal
    prose-ul:mx-auto
    prose-ul:max-w-3xl
    prose-ul:list-disc
  "
>
  <h1>{title}</h1>

  <div class="my-5 flex gap-4 text-base sm:my-6">
    <time datetime={date} class="block text-neutral-500 dark:text-neutral-400">{postDate}</time>

    {#if track}
      <a href={track} class="ml-auto" target="_blank" rel="external">Трек маршрута</a>
    {/if}
  </div>

  {@render article()}
</article>
