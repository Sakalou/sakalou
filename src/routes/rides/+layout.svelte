<script lang="ts">
  import { content } from '$lib/store/content.svelte.js';
  import { onDestroy, onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    content.crumbs[0] = { name: 'Велоотчеты', value: 'rides' };
  });

  onDestroy(() => {
    content.crumbs = [];
  });
</script>

{@render children()}
