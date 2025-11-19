import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function ServiceHeaderImages({ serviceData }) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Banner Image */}
      <div className="relative w-full h-[35vh] md:h-[70vh]">
        <Image
          src={urlFor(serviceData.image).url()}
          alt={serviceData.mainTitle}
          fill
          className="object-fill md:object-cover opacity-15"
          loading="lazy"
        />
      </div>

      {/* GRADIENT OVERLAY (Dark → Light) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl md:text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
          {serviceData.bannerTitle}
        </h1>

        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {serviceData.descriptionBanner}
        </p>
      </div>
    </section>
  );
}
