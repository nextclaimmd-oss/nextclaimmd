import { client } from '@/sanity/lib/client';

const sitemap = async () => {
  const posts = await client.fetch(`*[_type == "services" || _type == "blogs"]{
    _type,
    _updatedAt,
    slug
  }`);

  const postEntries = posts.map((post) => {
    let basePath = '';

    if (post._type === 'services') basePath = 'services';
    else if (post._type === 'blogs') basePath = 'blogs';

    return {
      url: `https://www.nextclaimmd.com/${basePath}/${post.slug.current}`,
      lastModified: post._updatedAt, // You had `_createdAt` mistakenly
    };
  });

  return postEntries;
};

export default sitemap;
