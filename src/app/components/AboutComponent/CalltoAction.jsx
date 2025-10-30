import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToActions() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center rounded-lg shadow-md mx-4 md:mx-16">
      <h2 className="text-3xl md:text-3xl font-mono font-bold text-gray-800 mb-4">
        Simplify Your Medical Billing Today
      </h2>
      <p className="text-gray-600 mb-8 text-lg ">
        Streamline your billing process, reduce errors, and get paid faster.
        Join hundreds of satisfied clinics and practices.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center bg-cyan-800 text-white text-sm font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-cyan-900 hover:shadow-lg transition-all duration-300"
      >
        Get Started
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </section>
  );
}
