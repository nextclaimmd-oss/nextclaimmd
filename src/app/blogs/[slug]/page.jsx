// src/app/blogs/[slug]/page.js
import BlogDetailComponent from "@/app/components/Blog/BlogDetailComponent";
import { client } from "@/sanity/lib/client";

export const dynamicParams = true;

// Generate static params for ISR fallback
export async function generateStaticParams() {
  const query = `*[_type == "blogs" && defined(slug.current)]{ "slug": slug.current }`;
  const blogs = await client.fetch(query);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;

  // Fetch current blog data
  const query = `*[_type == "blogs" && slug.current == $slug][0]`;
  const blogData = await client.fetch(query, { slug });

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  // Fetch related blogs excluding current
  const relatedQuery = `*[_type == "blogs" && slug.current != $slug]{
    title,
    "slug": slug.current
  }`;
  const relatedBlogs = await client.fetch(relatedQuery, { slug });

  return (
    <main className="bg-gradient-to-br from-sky-50 to-white md:border-2">
      <section>
        <BlogDetailComponent blogData={blogData} relatedBlogs={relatedBlogs} />
      </section>
    </main>
  );
}
