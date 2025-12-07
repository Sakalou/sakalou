<script lang="ts">
  import { onMount } from 'svelte';

  const THEMES = [
    { value: 'system', icon: 'computer-desktop' },
    { value: 'light', icon: 'sun' },
    { value: 'dark', icon: 'moon' }
  ];
  let selected: 'system' | 'light' | 'dark' = $state('system');

  onMount(() => {
    if (localStorage.theme) {
      selected = localStorage.theme;
    }
  });

  $effect(() => {
    ({
      system: () => localStorage.removeItem('theme'),
      light: () => (localStorage.theme = 'light'),
      dark: () => (localStorage.theme = 'dark')
    })[selected]();

    document.documentElement.classList.toggle(
      'dark',
      selected === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });
</script>

<div class="flex self-center rounded-full bg-neutral-100 p-0.5 dark:bg-neutral-800">
  {#each THEMES as { value, icon } (value)}
    {@const isSelected = value === selected}
    <label
      class={{
        'flex h-7 w-7 items-center justify-center rounded-full border text-neutral-700 dark:text-neutral-200': true,
        'cursor-pointer border-transparent': !isSelected,
        'border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-900': isSelected
      }}
    >
      <input name="theme" type="radio" class="hidden" {value} bind:group={selected} />
      <svg class="block h-5 w-5">
        <use href="/sprite.svg#{icon}" />
      </svg>
    </label>
  {/each}
</div>
