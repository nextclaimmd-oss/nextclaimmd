import { Phone, Mail } from "lucide-react";
import { FiMapPin, FiClock } from "react-icons/fi";
import Link from "next/link";

export default function JobOpenings() {
  const jobs = [
    {
      id: 1,
      title: "Medical Billing Specialist",
      department: "Billing Department",
      location: "Islamabad, Pakistan",
      type: "Full-time",
    },
    {
      id: 2,
      title: "AR Follow-up Executive",
      department: "Accounts Receivable",
      location: "Islamabad, Pakistan",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Medical Coder",
      department: "Coding Department",
      location: "Islamabad, Pakistan",
      type: "Full-time",
    },
    {
      id: 4,
      title: "Client Support Representative",
      department: "Customer Success",
      location: "Islamabad, Pakistan",
      type: "Part-time",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-mono font-bold text-gray-900 text-center mb-4">
          Job Openings
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
          Join our growing team of professionals dedicated to providing the best
          medical billing and RCM solutions. Explore the opportunities below.
        </p>

        {/* Contact Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-800" />
            <span>
              You can also call us at{" "}
              <a
                href="tel:+923001234567"
                className="font-medium text-blue-700 hover:underline"
              >
                +92 300 1234567
              </a>
            </span>
          </div>
          <span className="hidden sm:block text-gray-400">|</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-800" />
            <span>
              or send your CV at{" "}
              <a
                href="mailto:careers@yourcompany.com"
                className="font-medium text-blue-700 hover:underline"
              >
                careers@yourcompany.com
              </a>
            </span>
          </div>
        </div>

        {/* Job List */}
        <div className="divide-y divide-gray-300 border border-gray-300 rounded-2xl shadow-sm">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-gray-50 transition-colors"
            >
              {/* Job Info */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="text-lg font-mono font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500">{job.department}</p>
              </div>

              {/* Location & Type */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:w-[300px] text-sm text-gray-600 justify-between">
                <span className="flex items-center gap-2 w-[150px]">
                  <FiMapPin className="text-cyan-600" size={20} />
                  {job.location}
                </span>
                <span className="flex items-center gap-2 w-[100px]">
                  <FiClock className="text-cyan-600" size={20} />
                  {job.type}
                </span>
              </div>

              {/* Button */}
              <div className="flex justify-start md:justify-end md:w-[160px]">
                <Link
                  href={"/contact"}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-cyan-800 text-white text-sm font-medium hover:bg-cyan-950 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
