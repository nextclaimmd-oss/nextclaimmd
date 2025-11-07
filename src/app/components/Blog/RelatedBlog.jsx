import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function RelatedBlogs({ relatedBlogs }) {
  if (!relatedBlogs || relatedBlogs.length === 0) return null;

  return (
    <div className="">
      <div className="space-y-4">
        {relatedBlogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blogs/${blog.slug.current}`}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition"
          >
            {blog.mainImage && (
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src={urlFor(blog.mainImage).width(100).height(100).url()}
                  alt={blog.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <span className="text-sm font-medium text-blue-600">
              {blog.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
