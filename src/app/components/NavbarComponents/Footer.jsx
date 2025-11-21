import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default async function Footer() {
  const query = `*[_type == "home"][0]{
  phoneNumber,
  emailAddress,
  address,
  facebook,
  instagram,
  linkedin
}`;

  const address = await client.fetch(query);
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
            <li>Virtual Assistant </li>
            <li>Medical Billing and Coding</li>
            <li>Credentialing</li>
            <li>AR Management</li>
            <li>Healthcare Marketing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">📍 {address?.address}</p>
          <p className="text-sm mb-2">📞 {address?.phoneNumber}</p>
          <p className="text-sm">✉️ {address?.emailAddress}</p>
          <div className="flex space-x-5 mt-4">
            {/* Facebook */}
            {address?.facebook && (
              <Link
                href={address.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
              >
                <FaFacebook
                  size={24}
                  className="text-white hover:scale-110 transition-transform"
                />
              </Link>
            )}

            {/* Instagram */}
            {address?.instagram && (
              <Link
                href={address.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
              >
                <FaInstagram
                  size={24}
                  className="text-red-600 hover:scale-110 transition-transform"
                />
              </Link>
            )}

            {/* LinkedIn */}
            {address?.linkedin && (
              <Link
                href={address.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on LinkedIn"
              >
                <FaLinkedin
                  size={24}
                  className="text-blue-500 hover:scale-110 transition-transform"
                />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Next Claim MD. All rights reserved.
      </div>
    </footer>
  );
}
