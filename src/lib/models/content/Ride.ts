import type { Category } from '$lib/enums/Category';

export interface Ride {
  slug: string;
  title: string;
  date: string;
  image?: string;
  description?: string;
  category: Category;
}
