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

<footer class="grid grid-cols-(--grid-cols-layout) justify-center py-4 text-sm">
  <ul class="col-2">
    <li>
      Телеграм-канал: <a
        href="https://t.me/sakalounotes"
        target="_blank"
        class="text-sky-600 underline underline-offset-4 hover:no-underline">@sakalounotes</a
      >
    </li>
    <li>
      Инстаграм: <a
        href="https://www.instagram.com/sakalou/"
        target="_blank"
        class="text-sky-600 underline underline-offset-4 hover:no-underline">@sakalou</a
      >
    </li>
  </ul>
</footer>
