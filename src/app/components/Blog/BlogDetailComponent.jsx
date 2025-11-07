import BlogContent from "./Content";
import HeaderImage from "./HeaderImage";
import BlogOverview from "./Overview";
import RelatedBlogs from "./RelatedBlog";

const BlogDetailComponent = ({ blogData, relatedBlogs }) => {
  return (
    <main className="my-12 ">
      <div>
        <HeaderImage blogData={blogData} />
      </div>

      {/* Content + Sidebar (aligned with image width) */}
      <div className="lg:flex lg:flex-row mx-6 md:mx-6 lg:ml-24 ">
        <div className="lg:w-[65%] lg:pl-2 lg:ml-8 md:pb-20 rounded-lg ">
          <section>
            <BlogOverview blogData={blogData} />
          </section>
          <section>
            <BlogContent blogData={blogData} />
          </section>
        </div>

        <aside className="p-4 lg:w-[27%] lg:p-4 lg:sticky lg:ml-3 ">
          {" "}
          <h2 className="font-mono lg:mb-4 text-xl font-bold underline underline-offset-4">
            Related Blogs
          </h2>
          <section>
            <RelatedBlogs relatedBlogs={relatedBlogs} />
          </section>
        </aside>
      </div>
    </main>
  );
};

export default BlogDetailComponent;
