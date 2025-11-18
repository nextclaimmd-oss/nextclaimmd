import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs({ homeData }) {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-gradient-to-tr from-[#20c5c5]/40 to-[#1e2641]/60 blur-3xl rounded-full opacity-50"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-3xl font-bold font-mono text-gray-900 leading-tight mb-2">
            {homeData?.whyChooseUsheading}{" "}
            {homeData?.highlightTextWhyChooseUs && (
              <span className="text-[#20c5c5]">
                {homeData.highlightTextWhyChooseUs}
              </span>
            )}
          </h2>

          {homeData?.whyChooseUsdescription && (
            <p className="text-gray-600 font-inter text-sm mb-3 leading-relaxed">
              {homeData.whyChooseUsdescription}
            </p>
          )}

          {homeData?.services && homeData.services.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {homeData.services.map((item, idx) => (
                <div key={item._key || idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#20c5c5] flex-shrink-0" />
                  <span className="text-gray-800 text-sm md:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT CARDS */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="flex-1 bg-white/90 backdrop-blur-md shadow-xl p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition">
            <div className="bg-[#20c5c5]/10 inline-block px-4 py-1 rounded-full text-[#1e2641] text-sm font-semibold mb-4">
              Client Satisfaction
            </div>
            <h3 className="text-6xl font-extrabold text-[#1e2641] mb-2">97%</h3>
            <p className="text-gray-600 mb-6">
              Based on ratings from over{" "}
              <span className="font-semibold">50+</span> healthcare providers
              nationwide.
            </p>
          </div>

          {/* Card 2 */}
          {/* <div className="flex-1 bg-white/90 backdrop-blur-md shadow-xl p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition">
            <div className="bg-[#1e2641]/10 inline-block px-4 py-1 rounded-full text-[#1e2641] text-sm font-semibold mb-4">
              Expertise
            </div>
            <h3 className="text-6xl font-extrabold text-[#1e2641] mb-2">
              1.5k+
            </h3>
            <p className="text-gray-600 mb-6">
              Certified medical billers and coders delivering unmatched accuracy
              across every specialty.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
