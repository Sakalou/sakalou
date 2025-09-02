<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<header class="grid grid-cols-(--grid-cols-layout) py-4">
  <div class="col-2">Сакалоў</div>
</header>

<main>
  {@render children()}
</main>
