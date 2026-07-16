import { posts } from '$lib/content/posts';
import { Category } from '$lib/enums/Category';

interface ContentStore {
  crumbs: [Category?, string?];
}

export const content: ContentStore = $state({
  crumbs: []
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
      posts[content.crumbs[0]].find(({ slug }) => slug === content.crumbs[1])?.title
  );
}

export const crumbNames = new Crumbs();
