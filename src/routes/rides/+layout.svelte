<script lang="ts">
  import { content } from '$lib/store/content.svelte.js';
  import { onDestroy } from 'svelte';

  let { children } = $props();

  content.crumbs[0] = { name: 'Велоотчеты', value: 'rides' };

  onDestroy(() => {
    content.crumbs = [];
  });
</script>

{@render children()}
