import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="w-full py-10 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-52 flex flex-col md:flex-row justify-between items-center gap-6 border-t-2 border-b-2 border-gray-300 py-8">
        {/* Call Info */}
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-green-700 text-3xl" />
          <div className="font-mono">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Schedule a Call
            </h3>
            <p className="text-gray-800 font-semibold text-lg">
              +92 300 1234567
            </p>
            <p className="text-sm text-gray-500">Call us now and get started</p>
          </div>
        </div>

        {/* Email Info */}
        <div className="flex items-center gap-4">
          <FaEnvelopeOpenText className="text-green-700 text-3xl" />
          <div className="font-mono">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Write to Us
            </h3>
            <p className="text-gray-800 font-semibold text-lg">
              info@nextclaimmd.com
            </p>
            <p className="text-sm text-gray-500">Send us a message anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
