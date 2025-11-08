import Link from "next/link";

export default function ServiceAction() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-700 to-blue-600 text-white py-16 px-6 rounded-3xl my-12 mx-auto max-w-6xl shadow-lg">
      <div className="relative text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          Ready to Simplify Your Medical Billing Process?
        </h2>
        <p className="text-lg md:text-xl text-cyan-100 leading-relaxed mb-8">
          Let our team of certified billing experts help you maximize revenue,
          reduce denials, and ensure complete compliance. Partner with{" "}
          <span className="font-semibold text-white">Next ClaimMD</span>
          and focus on what truly matters — your patients.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-white text-cyan-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-cyan-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
