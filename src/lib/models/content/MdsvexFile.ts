import type { Component } from 'svelte';

export interface MdsvexFile {
  default: Component;
  metadata: Record<string, string>;
}
