import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function BlogCardss({ AllBlogs }) {
  if (!AllBlogs || AllBlogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 md:max-w-6xl lg:mx-auto lg:grid-cols-3 gap-6 my-12">
      {AllBlogs.map((blog) => (
        <div
          key={blog._id}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
        >
          {blog.mainImage && (
            <div className="relative w-full h-48">
              <Image
                src={urlFor(blog.mainImage).width(400).height(250).url()}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-4 flex flex-col justify-between h-full">
            <Link href={`/blogs/${blog.slug.current}`}>
              <h2 className="text-sm font-semibold mb-2 hover:text-blue-600 transition line-clamp-2">
                {blog.title}
              </h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
