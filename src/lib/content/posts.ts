import { Category } from '$lib/enums/Category.js';
import type { MdsvexFile } from '$lib/models/content/MdsvexFile';
import type { Ride } from '$lib/models/content/Ride.js';

function buildPosts(glob: Record<string, MdsvexFile>, category: Category): Ride[] {
  return Object.entries(glob)
    .map(([path, { metadata }]) => ({
      slug: path.split('/').pop()?.replace('.svx', '') ?? '',
      title: metadata?.title ?? '',
      date: metadata?.date || new Date().toISOString(),
      image: metadata?.image,
      description: metadata?.description,
      category
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const rides: Ride[] = buildPosts(
  import.meta.glob('$content/rides/*.svx', { eager: true }),
  Category.RIDES
);

export const blog: Ride[] = buildPosts(
  import.meta.glob('$content/blog/*.svx', { eager: true }),
  Category.BLOG
);

export const posts: Record<Category, Ride[]> = { [Category.RIDES]: rides, [Category.BLOG]: blog };
