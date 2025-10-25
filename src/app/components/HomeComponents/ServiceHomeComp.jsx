export default function BillingIntro({ homeData }) {
  const data = homeData || {};

  return (
    <section className="py-6 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-gray-900 mb-6">
          {data.secondheading}{" "}
          <span className="text-cyan-700">{data.highlightText}</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 font-inter text-sm leading-relaxed mb-6">
          {data.seconddescription}
        </p>
      </div>
    </section>
  );
}
