import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function HeaderImage({ blogData }) {
  return (
    <section className="text-center my-12">
      {/* Blog Title */}
      {blogData?.title && (
        <h1 className="text-3xl font-mono max-w-4xl mx-auto md:text-4xl font-semibold text-gray-800 mb-6">
          {blogData.title}
        </h1>
      )}

      {/* Image */}
      {blogData?.mainImage && (
        <div className="relative mx-auto w-[90%] md:w-[80%] lg:w-[80%] h-[30vh] md:h-[40vh] lg:h-[60vh] overflow-hidden rounded-2xl shadow-md">
          <Image
            src={urlFor(blogData.mainImage).url()}
            alt={blogData.title || "Blog Image"}
            fill
            sizes="(max-width: 768px) 90vw, 70vw"
            className="object-fill md:object-cover object-center"
            loading="lazy"
            priority={false}
          />
        </div>
      )}
    </section>
  );
}
