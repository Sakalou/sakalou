<script lang="ts">
  export let data;

  const { posts } = data;
</script>

<svelte:head>
  <title>Велоотчеты | Сакалоў</title>
</svelte:head>

<section class="px-4">
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

  <ul class="mx-auto grid max-w-3xl list-disc gap-2 pl-6">
    {#each posts as { slug, title } (slug)}
      <li>
        <a
          href="rides/{slug}"
          class="text-sky-600 underline underline-offset-4 visited:text-violet-800 hover:no-underline"
          >{title}</a
        >
      </li>
    {/each}
  </ul>
</section>
