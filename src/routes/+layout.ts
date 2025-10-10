import { Category } from '$lib/enums/Category';
import type { MdsvexFile } from '$lib/models/content/MdsvexFile';
import { content } from '$lib/store/content.svelte';

export const prerender = true;

const rides: Record<string, MdsvexFile> = import.meta.glob('$content/rides/*.svx', {
  eager: true
});

content.posts[Category.RIDES] = Object.entries(rides)
  .map(([path, { metadata }]) => ({
    slug: path.split('/').pop()?.replace('.svx', '') ?? '',
    title: metadata?.title ?? '',
    date: metadata?.date || new Date().toISOString(),
    image: metadata?.image,
    description: metadata?.description,
    category: Category.RIDES
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const load = async ({ url }) => {
  content.crumbs = url.pathname.split('/').filter((crumb) => crumb);
};
