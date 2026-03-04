import { Category } from '$lib/enums/Category.js';
import { content } from '$lib/store/content.svelte.js';

export const load = async ({ params }) => {
  try {
    const post = await import(`$content/blog/${params.slug}.svx`);
    const blogPost = content.posts[Category.BLOG].find(({ slug }) => slug === params.slug);

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
