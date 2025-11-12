import { client } from "@/sanity/lib/client";
import BlogHeaderImages from "../components/Blog/BlogHeaderImage";
import BlogCardss from "../components/Blog/BlogCards";
import BlogIntroduction from "../components/Blog/BlogIntro";
export const revalidate = 0;

const page = async () => {
  const query = `*[_type =="blogs"]`;
  const AllBlogs = await client.fetch(query);
  return (
    <main>
      <section>
        <BlogHeaderImages />
      </section>
      <section>
        <BlogIntroduction />
      </section>
      <section>
        <BlogCardss AllBlogs={AllBlogs} />
      </section>
    </main>
  );
};

export default page;
