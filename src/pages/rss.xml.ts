import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', (p) => p.id.startsWith('en/') && !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Xinyin Zhang',
    description: 'Writing on machine learning, LLMs, agents, and things I learn.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id.slice(3)}/`,
    })),
  });
}
