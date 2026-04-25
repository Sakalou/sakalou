import { Category } from '$lib/enums/Category';
import type { Ride } from '$lib/models/content/Ride';

interface ContentStore {
  crumbs: [Category?, string?];
  posts: Record<Category, Ride[]>;
  mapPoints: [number][];
}

export const content: ContentStore = $state({
  crumbs: [],
  posts: { [Category.RIDES]: [], [Category.BLOG]: [] },
  mapPoints: [],
  rideMapVisible: false
});

class Crumbs {
  categoryName: string | undefined = $derived(
    content.crumbs[0] &&
      {
        [Category.BLOG]: 'Блог',
        [Category.RIDES]: 'Велоотчеты'
      }[content.crumbs[0]]
  );
  postName: string | undefined = $derived(
    content.crumbs[0] &&
      content.crumbs[1] &&
      content.posts[content.crumbs[0]].find(({ slug }) => slug === content.crumbs[1])?.title
  );
}

export const crumbNames = new Crumbs();

interface RideMap {
  visible: boolean;
  track: string | null;
  sidebarWidth: number;
}

export const rideMap: RideMap = $state({
  visible: true,
  track: null,
  sidebarWidth: 512
});
