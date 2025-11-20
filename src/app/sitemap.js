import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  const baseUrl = "https://www.nextclaimmd.com";

  // Fetch dynamic slugs from Sanity
  const services = await client.fetch(`*[_type == "services"]{ "slug": slug.current }`);
  const blogs = await client.fetch(`*[_type == "blogs"]{ "slug": slug.current }`);

  // Dynamic service pages
  const serviceUrls = services.map((item) => ({
    url: `${baseUrl}/services/${item.slug}`,
    lastModified: new Date(),
  }));

  // Dynamic blog pages
  const blogUrls = blogs.map((item) => ({
    url: `${baseUrl}/blogs/${item.slug}`,
    lastModified: new Date(),
  }));

  // Static pages (add your own)
  const staticUrls = [
    "",
    "/about",
    "/contact",
    "/careers",
    
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...serviceUrls, ...blogUrls];
}
