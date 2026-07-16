import { posts } from '$lib/content/posts';
import { Category } from '$lib/enums/Category.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params: { slug } }) => {
  const blogPost = posts[Category.BLOG].find(({ slug }) => slug === slug);

  if (!blogPost) error(404, 'Статья не найдена');

  try {
    const post = await import(`$content/blog/${slug}.svx`);

    return {
      component: post.default,
      blogPost
    };
  } catch {
    return {
      status: 404,
      error: 'Статья не найдена'
    };
  }
};
