import BlogDetailComponent from "@/app/components/Blog/BlogDetailComponent";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

export const dynamicParams = true;
// ✅ Generate static params for SSG
export async function generateStaticParams() {
  const query = `*[_type == "blogs"]{ "slug": slug.current }`;
  const blogs = await client.fetch(query);

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;

  const query = `*[_type == "blogs" && slug.current == '${slug}'][0]`;
  const blogData = await client.fetch(query);

  const relatedQuery = `*[_type == "blogs" && slug.current != '${slug}']`;
  const relatedBlogs = await client.fetch(relatedQuery);

  return (
    <main className="bg-gradient-to-br from-sky-50 to-white md:border-2">
      <section>
        <BlogDetailComponent blogData={blogData} relatedBlogs={relatedBlogs} />
      </section>
    </main>
  );
}
