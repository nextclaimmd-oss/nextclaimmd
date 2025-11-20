import Image from "next/image";
import image from "@/app/assets/bgimage.jpg";

export default function BlogHeaderImages() {
  return (
    <section className="relative flex items-center justify-center text-white h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Medical Billing Team"
          fill
          className="object-cover object-center scale-105"
          loading="lazy"
        />
      </div>

      {/* SAME Overlay as HeroSections */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-white">
          Read More Blogs
        </h1>

        <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
          Learm more about how the American Medical and Health industry works.
          Get a hands on knowledge before getting started.
        </p>
      </div>
    </section>
  );
}
