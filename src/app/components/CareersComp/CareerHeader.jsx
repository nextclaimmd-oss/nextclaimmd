import Image from "next/image";
import image from "@/app/assets/bgimage.jpg";

export default function CareersHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Medical Billing Team"
          fill
          className="object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
          Join Our Team of Medical Billing Professionals
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Next ClaimMd
          </span>
          , we&apos;re committed to helping healthcare providers succeed. Build
          your career in a supportive, growth-driven environment where your
          skills truly make a difference.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-4">
          <a
            href="#open-positions"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all"
          >
            View Open Positions
          </a>
          <a
            href="/about"
            className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
