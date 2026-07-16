import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (/^["'].*["']$/.test(value)) value = value.slice(1, -1);
    data[key] = value;
  }
  return data;
}

function buildCategory(dir, category) {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.svx'))
    .map((file) => {
      const data = parseFrontmatter(readFileSync(`${dir}/${file}`, 'utf-8'));
      return {
        slug: file.replace('.svx', ''),
        title: data.title ?? '',
        date: data.date || new Date().toISOString(),
        image: data.image,
        description: data.description,
        category
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const posts = {
  rides: buildCategory('src/content/rides', 'rides'),
  blog: buildCategory('src/content/blog', 'blog')
};

mkdirSync('src/lib/content', { recursive: true });
writeFileSync('src/lib/content/posts.generated.json', JSON.stringify(posts, null, 2));
