import { Category } from '$lib/enums/Category.js';
import { content } from '$lib/store/content.svelte.js';

export const load = async ({ params }) => {
  try {
    const post = await import(`$content/rides/${params.slug}.svx`);
    const ride = content.posts[Category.RIDES].find(({ slug }) => slug === params.slug);

    return {
      component: post.default,
      ride
    };
  } catch {
    return {
      status: 404,
      error: 'Статья не найдена'
    };
  }
};
