export default function OurProcess() {
  const steps = [
    {
      title: "Client Onboarding",
      description:
        "We start by understanding your practice, systems, and billing needs to create a tailored strategy.",
    },
    {
      title: "Data & Claim Setup",
      description:
        "Our team verifies patient, payer, and coding data to ensure accuracy before claim submission.",
    },
    {
      title: "Submission & Tracking",
      description:
        "Claims are filed promptly, monitored closely, and any denials are followed up for fast resolution.",
    },
    {
      title: "Report & Transparency",
      description:
        "You get detailed, real-time reporting to track claim status, payments, and financial performance.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-mono font-bold text-gray-900 mb-2">
          Our Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A simple, transparent, and efficient workflow designed to keep your
          billing accurate and your revenue steady.
        </p>
      </div>

      {/* Timeline / Step Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal line (desktop only) */}
        <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] bg-blue-100 z-0" />

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:text-left"
            >
              {/* Step Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700 text-white font-bold mb-4 md:mb-6 relative z-10">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="font-mono font-semibold text-gray-900 mb-2 mt-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
