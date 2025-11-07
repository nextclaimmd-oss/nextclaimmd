import Image from "next/image";
import image from "@/app/assets/bgimage.jpg";

export default function BlogHeaderImages() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Medical Billing Team"
          fill
          className="object-cover md:object-fill opacity-10"
          loading="lazy"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
          Read More Blogs
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learm more about how the American Medical and Health industry works.
          Get a hands on knowledge before getting started.
        </p>
      </div>
    </section>
  );
}
