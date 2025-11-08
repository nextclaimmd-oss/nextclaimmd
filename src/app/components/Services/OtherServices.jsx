import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ServicesList({ relatedServices }) {
  const services = [
    { title: "Laboratory Billing" },
    { title: "Urology" },
    { title: "Cardiology" },
    { title: "Behavioral Health" },
    { title: "Urgent Care" },
    { title: "Orthopedics" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-gray-900">
          Our Specialized Medical Billing Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer tailored medical billing and revenue cycle management
          solutions across multiple specialties to help healthcare providers
          achieve accurate reimbursements and financial stability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {relatedServices.map((service, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <CheckCircle className="w-10 h-10 text-cyan-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {service.mainTitle}
            </h3>
            <Link
              href={`/services/${service.slug}`}
              className="text-cyan-700 font-medium flex items-center gap-2 hover:underline"
            >
              Read More
              <span className="text-lg">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
