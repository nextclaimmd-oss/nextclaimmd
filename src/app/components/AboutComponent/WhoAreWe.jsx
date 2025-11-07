import { PortableText } from "@portabletext/react";

export default function WhoWeAre({ aboutData }) {
  return (
    <section className="px-6 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-mono font-bold text-gray-900 mb-6">
          {aboutData.title}
        </h2>
        <div className="text-gray-700 leading-relaxed">
          <PortableText value={aboutData.description} />
        </div>
      </div>
    </section>
  );
}
