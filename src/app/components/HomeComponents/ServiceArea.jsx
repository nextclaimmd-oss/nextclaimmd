import Image from "next/image";
import mapImage from "@/app/assets/america.png";

export default function ServiceLocation() {
  return (
    <section className="py-12 px-6 text-center bg-white">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-3xl font-mono font-bold text-gray-900">
          We Provide Services Across the Entire{" "}
          <span className="text-cyan-700">United States</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto">
          From the bustling cities on the East Coast to the serene landscapes of
          the West, we proudly offer our medical billing and claim management
          services throughout America. No matter where your practice is located,
          our team is ready to support your success.
        </p>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 mt-8">
          <Image
            src={mapImage}
            alt="Map of the United States"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
