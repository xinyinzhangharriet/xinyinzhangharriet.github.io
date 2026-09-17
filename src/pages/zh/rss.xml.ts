import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', (p) => p.id.startsWith('zh/') && !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: '张芯尹',
    description: '关于机器学习、大模型、智能体和日常所学的写作。',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/zh/blog/${p.id.slice(3)}/`,
    })),
  });
}
