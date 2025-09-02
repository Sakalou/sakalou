export const load = async () => {
  const posts = import.meta.glob('$content/rides/*.svx', { eager: true });

  const articles = Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.split('/').pop()?.replace('.svx', '') || '';

      return {
        slug,
        title: post.metadata?.title || 'Без названия',
        date: post.metadata?.date || new Date()
        // description: post.metadata?.description || '',
        // Дополнительные метаданные
        // tags: post.metadata?.tags || [],
        // image: post.metadata?.image || null
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: articles
  };
};
