import Image from "next/image";
import image from "@/app/assets/bgimage.jpg";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function CareersHero({ careerData }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0">
        <Image
          src={urlFor(careerData.image).url()}
          alt="Medical Billing Team"
          fill
          className="object-cover md:object-fill opacity-10"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
          {careerData.mainHeading}
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {careerData.mainDescription}
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            href="/about"
            className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
