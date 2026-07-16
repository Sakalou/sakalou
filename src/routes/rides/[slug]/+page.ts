import { error } from '@sveltejs/kit';
import { posts } from '$lib/content/posts.js';
import { Category } from '$lib/enums/Category.js';

export const load = async ({ params: { slug } }) => {
  const ride = posts[Category.RIDES].find((post) => post.slug === slug);

  if (!ride) error(404, 'Статья не найдена');

  try {
    const post = await import(`$content/rides/${slug}.svx`);

    return { component: post.default, ride };
  } catch {
    error(404, 'Статья не найдена');
  }
};
