import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function ServiceHeaderImages({ serviceData }) {
  return (
    <section className="relative flex items-center justify-center text-white h-[40vh] md:h-[65vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={urlFor(serviceData.image).url()}
          alt={serviceData.mainTitle}
          fill
          className="object-cover object-center scale-105"
          loading="lazy"
        />
      </div>

      {/* SAME Overlay as HeroSections */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 text-center mx-auto">
        <h1 className="text-2xl md:text-4xl font-mono font-bold tracking-tight">
          {serviceData.bannerTitle}
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          {serviceData.descriptionBanner}
        </p>
      </div>
    </section>
  );
}
