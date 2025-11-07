import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 font-mono text-sm text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Next Claim MD
          </h3>
          <p className="text-sm leading-relaxed">
            Empowering healthcare providers with precise, efficient, and
            transparent medical billing and revenue cycle management solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-cyan-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h4>
          <ul className="space-y-2">
            <li>Medical Billing</li>
            <li>Credentialing</li>
            <li>AR Management</li>
            <li>Healthcare Marketing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">📍 1234 HealthCare Blvd, New York, NY</p>
          <p className="text-sm mb-2">📞 (844) 212 2658</p>
          <p className="text-sm">✉️ info@nextclaimmd.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Next Claim MD. All rights reserved.
      </div>
    </footer>
  );
}
