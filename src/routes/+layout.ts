import { content } from '$lib/store/content.svelte';

export const prerender = true;

export const load = async ({ url }) => {
  content.crumbs = url.pathname.split('/').filter(Boolean);
};
