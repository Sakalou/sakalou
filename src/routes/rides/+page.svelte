<script lang="ts">
  import { Category } from '$lib/enums/Category';
  import { content } from '$lib/store/content.svelte.js';

  function getFormattedDate(date: string) {
    return Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }
</script>

<section class="col-span-3 mx-auto w-full grid-cols-subgrid">
  <h1
    class="
      mx-auto
      mb-5
      max-w-3xl
      font-raleway
      text-2xl
      font-semibold
      lg:text-4xl"
  >
    Велоотчеты
  </h1>

  <ul class="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
    {#each content.posts[Category.RIDES] as { slug, title, image, category, date } (slug)}
      {@const src = `https://ik.imagekit.io/sakalou/${category}/${slug}/${image}`}
      <li>
        <a href="rides/{slug}" class="relative block">
          <img
            class="block aspect-4/3 w-full border-b-transparent"
            {src}
            sizes="(min-width: 600px) 368px, 100vw"
            srcset="{src}?tr=w-1440,h-1080,f-webp,q-70 1440w, {src}?tr=w-1080,h-768,f-webp,q-70 1080w, {src}?tr=w-736,h-552,f-webp,q-70 736w, {src}?tr=w-368,h-276,f-webp,q-70 368w"
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
</section>
