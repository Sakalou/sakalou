<script lang="ts">
  import { Category } from '$lib/enums/Category';
  import { content } from '$lib/store/content.svelte.js';

  const lastRides = $derived(content.posts[Category.RIDES].slice(0, 4));

  function getFormattedDate(date: string) {
    return Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }
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
    <a href="rides" class="underline underline-offset-6 hover:no-underline">Велоотчеты</a>
  </h2>

  <div class="col-span-3 col-start-1 grid grid-cols-subgrid overflow-x-auto">
    <ul class="col-span-2 col-start-2 mx-auto flex gap-8 pr-4">
      {#each lastRides as { slug, title, image, category, date } (slug)}
        {@const src = `https://ik.imagekit.io/sakalou/${category}/${slug}/${image}`}
        <li
          class="w-[calc(100vw_-_var(--spacing)*20)] max-w-92 shrink sm:w-[calc(50vw_-_var(--spacing)*14)]"
        >
          <a href="rides/{slug}" class="relative block dark:text-black">
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
    </ul>
  </div>
</section>
