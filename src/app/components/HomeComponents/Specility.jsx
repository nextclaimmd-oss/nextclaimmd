export default function Specialties() {
  const specialties = [
    "Laboratory Billing",
    "Urology",
    "Cardiology",
    "Behavioral Health",
    "Urgent Care",
    "Orthopedics",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#1e2641] via-[#1f3b57] to-[#20c5c5] text-white relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold font-mono mb-4">
          Serving Every Major Medical Specialty
        </h2>

        {/* Description */}
        <p className="text-white/80 text-sm  mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
          From specialized clinics to full-service hospitals, our team supports
          practices across the entire healthcare landscape with tailored billing
          and revenue cycle expertise.
        </p>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 cursor-default transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <p className="relative font-mono font-semibold tracking-wide z-10">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
