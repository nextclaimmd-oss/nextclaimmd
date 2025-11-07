export default function WhoWeAre({ aboutData }) {
  return (
    <section className="px-6 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-mono font-bold text-gray-900 mb-6">
          {aboutData.title}
        </h2>
        <p className="text-gray-700 leading-relaxed ">
          {aboutData.description}
        </p>
      </div>
    </section>
  );
}
