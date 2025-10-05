import type { Ride } from '$lib/models/content/Ride';

interface ContentStore {
  crumbs: {
    name: string;
    value: string;
  }[];
  rides: Ride[];
}

export const content: ContentStore = $state({
  crumbs: [],
  rides: []
});
