import type { Ride } from '$lib/models/content/Ride';

interface ContentStore {
  rides: Ride[];
}

export const content: ContentStore = $state({
  rides: []
});
