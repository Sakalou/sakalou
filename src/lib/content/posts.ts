import generated from '$lib/content/posts.generated.json';
import { Category } from '$lib/enums/Category.js';
import type { Ride } from '$lib/models/content/Ride.js';

export const posts: Record<Category, Ride[]> = {
  [Category.RIDES]: generated.rides as Ride[],
  [Category.BLOG]: generated.blog as Ride[]
};
