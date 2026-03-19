<script lang="ts">
  import { Category } from '$lib/enums/Category';
  import type { Ride } from '$lib/models/content/Ride';

  const { category, posts }: { category: Category; posts: Ride[] } = $props();

  const hasMore: boolean = $derived(posts.length > 5);
  const title: string = $derived(
    {
      [Category.BLOG]: 'Блог',
      [Category.RIDES]: 'Велоотчеты'
    }[category]
  );
  const moreText: string = $derived(
    {
      [Category.BLOG]: 'Другие записи в блоге',
      [Category.RIDES]: 'Другие велоотчеты'
    }[category]
  );

  function getFormattedDate(date: string) {
    return Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }
</script>

<section class="col-span-3 col-start-1 grid grid-cols-subgrid">
  <h2
    class="
      col-2
      mb-5
      font-raleway
      text-xl
      font-semibold
      lg:text-2xl"
  >
    <a href={category} class="underline underline-offset-6 hover:no-underline">{title}</a>
  </h2>

  <div class="col-span-3 col-start-1 grid grid-cols-subgrid overflow-x-auto">
    <ul class="col-span-2 col-start-2 mr-auto flex gap-8 pr-4">
      {#each posts.slice(0, 5) as { slug, title, image, category, date } (slug)}
        {@const src = `https://ik.imagekit.io/sakalou/${category}/${slug}/${image}`}
        <li
          class="w-[calc(100vw_-_var(--spacing)*20)] max-w-92 shrink sm:w-[calc(50vw_-_var(--spacing)*14)]"
        >
          <a href="{category}/{slug}" class="relative block dark:text-black">
            <img
              class="block aspect-4/3 w-full border-b-transparent"
              {src}
              sizes="(min-width: 600px) 368px, 100vw"
              srcset="{src}?tr=w-1440,h-1080,f-webp,q-70 1440w, {src}?tr=w-1080,h-810,f-webp,q-70 1080w, {src}?tr=w-736,h-552,f-webp,q-70 736w, {src}?tr=w-368,h-276,f-webp,q-70 368w"
              alt={title}
            />

            <span class="absolute bottom-0 left-0 max-w-full p-3 text-lg">
              <span class="block">
                <time datetime={date} class="bg-white/90 px-1 py-0.5 text-sm"
                  >{getFormattedDate(date)}</time
                >
              </span>
              <span class="bg-white/90 box-decoration-clone px-1 py-0.5 font-raleway font-semibold"
                >{title}</span
              >
            </span>
          </a>
        </li>
      {/each}

      {#if hasMore}
        <li
          class="flex w-[calc(100vw_-_var(--spacing)*20)] max-w-92 shrink items-center justify-center text-center sm:w-[calc(50vw_-_var(--spacing)*14)]"
        >
          <a
            href={category}
            class="relative text-xl text-sky-600 underline underline-offset-4 hover:no-underline dark:text-sky-300"
          >
            <span>{moreText} →</span>
          </a>
        </li>
      {/if}
    </ul>
  </div>
</section>
