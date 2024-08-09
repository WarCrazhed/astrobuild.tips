import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
    const posts = await getCollection('tips');
    return rss({
        title: 'Astro.tips',
        description: 'My First Page',
        site: context.site,
        items: posts.map(posts => ({
            ...posts.data,
            link: `/posts/${posts.slug}/`
        })),
    });
}