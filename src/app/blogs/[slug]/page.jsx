import BlogDetailComponent from "@/app/components/Blog/BlogDetailComponent";
import { client } from "@/sanity/lib/client";

const page = async (props) => {
  const params = await props.params;
  const query = `*[_type == "blogs" && slug.current == '${params.slug}'][0]`;
  const blogData = await client.fetch(query);

  const blogquery = `*[_type == "blogs" && slug.current != '${params.slug}']`;
  const relatedBlogs = await client.fetch(blogquery);
  return (
    <main className="bg-gradient-to-br from-sky-50 to-white md:border-2">
      <section>
        <BlogDetailComponent blogData={blogData} relatedBlogs={relatedBlogs} />
      </section>
    </main>
  );
};

export default page;
