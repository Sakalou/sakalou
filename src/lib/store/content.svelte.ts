import type { Category } from '$lib/enums/Category';
import type { Ride } from '$lib/models/content/Ride';

interface ContentStore {
  [Category.RIDES]: Ride[];
}

export const content: ContentStore = $state({
  rides: []
});
