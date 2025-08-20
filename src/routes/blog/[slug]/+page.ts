// import type { EntryGenerator } from './$types';

// import { error } from '@sveltejs/kit';

// interface MdsvexFile {
// 	default: import('svelte/internal').SvelteComponent;
// 	metadata: Record<string, string>;
// }

// const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svx)/i)?.[1] ?? null;

export const entries = async () => {
  const slugs = Object.keys(await import.meta.glob('$content/*.{svx}')).map((path) =>
    path
      .split('/')
      .pop()
      .replace(/\.(svx)$/, '')
  );

  return slugs.map((slug) => ({
    slug
  }));
};

export const load = async ({ params }) => {
  try {
    const post = await import(`$content/${params.slug}.svx`);

    return {
      component: post.default,
      metadata: post.metadata
    };
  } catch {
    return {
      status: 404,
      error: 'Статья не найдена'
    };
  }
};
