<script lang="ts">
  let {
    article,
    title,
    date
  }: {
    title: string;
    date: string;
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
    col-span-3
    col-start-1
    prose-base
    px-4
    lg:prose-lg
    prose-h1:mx-auto
    prose-h1:max-w-3xl
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
    prose-figure:-mx-4
    prose-ol:mx-auto
    prose-ol:max-w-3xl
    prose-ul:mx-auto
    prose-ul:max-w-3xl
    prose-ul:list-disc
  "
>
  <h1>{title}</h1>

  <time datetime={date} class="mx-auto my-5 block max-w-3xl text-base text-black/50 sm:my-6"
    >{postDate}</time
  >

  {@render article()}
</article>
