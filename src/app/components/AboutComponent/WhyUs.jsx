import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function WhyUss({ aboutData }) {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative overflow-hidden shadow-lg">
          <Image
            src={urlFor(aboutData.image).url()}
            alt="Medical Billing Professionals"
            className="object-cover rounded-2xl"
            width={600}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-cyan-700 font-semibold tracking-wide uppercase mb-2">
            {aboutData.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-3xl font-mono font-bold text-gray-900 mb-4 leading-tight">
            {aboutData.headline}
          </h2>
          <p className="text-gray-600 mb-4 text-sm">{aboutData.subText}</p>

          {/* Two-column List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
            {aboutData?.reasons?.map((item, id) => (
              <div key={id} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 mt-1 bg-cyan-800 text-white rounded-full flex items-center justify-center text-sm">
                  ✓
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
