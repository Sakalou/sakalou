<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<header class="grid grid-cols-(--grid-cols-layout) pt-8 pb-4">
  <div class="col-2 text-2xl">Сакалоў</div>
</header>

<main class="py-8">
  {@render children()}
</main>
