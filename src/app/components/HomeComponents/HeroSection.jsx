import Image from "next/image";
import Link from "next/link";
import heroBg from "@/app/assets/bgimage.jpg";
import { urlFor } from "@/sanity/lib/image";

export default function HeroSections({ homeData }) {
  return (
    <section className="relative flex items-center justify-center text-white h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={urlFor(homeData.backgroundImage).url()}
          alt="Healthcare professional"
          fill
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">
            {homeData.heading}
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            {homeData.description}
          </p>

          <Link
            href="/contact"
            className="inline-block bg-cyan-700 hover:bg-cyan-800 text-white font-medium text-base sm:text-lg px-6 py-3 rounded-md shadow-md transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
