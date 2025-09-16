<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<header class="grid grid-cols-(--grid-cols-layout) justify-center pt-4 pb-2">
  <a href="/" class="col-2 flex items-center gap-2 font-argone text-2xl">
    <svg class="h-12 w-12">
      <use href="/sprite.svg#hat" />
    </svg>
    <span class="tracking-wider">sakalou</span>
  </a>
</header>

<main class="py-8">
  {@render children()}
</main>
