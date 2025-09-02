<script lang="ts">
  export let data;

  const { posts } = data;
</script>

<h1>Отчеты о велопоездках</h1>
<ul>
  {#each posts as { slug, title } (slug)}
    <li><a href="rides/{slug}" class="underline">{title}</a></li>
  {/each}
</ul>
