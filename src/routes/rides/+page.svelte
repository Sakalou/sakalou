<script lang="ts">
  import { content } from '$lib/store/content.svelte.js';
</script>

<svelte:head>
  <title>Велоотчеты | Сакалоў</title>
</svelte:head>

<section class="mx-auto w-full">
  <h1
    class="
      mx-auto
      mb-5
      max-w-3xl
      font-ibm-plex-serif
      text-2xl
      font-medium
      lg:text-4xl"
  >
    Велоотчеты
  </h1>

  <ul class="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
    {#each content.rides as { slug, title, image, category } (slug)}
      {@const src = `https://ik.imagekit.io/sakalou/${category}/${slug}/${image}`}
      <li>
        <a href="rides/{slug}" class="text-black underline-offset-4 hover:underline">
          <img
            class="aspect-4/3 w-full border-b-8 border-b-transparent"
            {src}
            sizes="(min-width: 600px) 368px, 100vw"
            srcset="{src}?tr=w-1440,h-1080,f-webp,q-70 1440w, {src}?tr=w-1080,h-768,f-webp,q-70 1080w, {src}?tr=w-736,h-552,f-webp,q-70 736w, {src}?tr=w-368,h-276,f-webp,q-70 368w"
            alt={title}
          />
          {title}
        </a>
      </li>
    {/each}
  </ul>
</section>
