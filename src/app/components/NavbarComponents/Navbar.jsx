import Image from "next/image";
import Link from "next/link";
import MobileNavToggle from "./MobileNavbar";
import logo from "@/app/assets/logonextclaim.PNG";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full shadow-md">
      {/* Top Level */}
      <div className="border-b text-white text-xs bg-cyan-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3 space-y-2 md:space-y-0">
          {/* Left: Hours */}
          <div className="flex items-center space-x-2">
            <FaClock className="text-white" />
            <p>
              Production Hours:{" "}
              <span className="font-medium">
                Monday - Saturday 09:00 AM - 04:00 AM
              </span>
            </p>
          </div>

          {/* Right: Email + Phone */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:info@nextclaimmd.com" className="hover:underline">
                info@nextclaimmd.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiHeadphones />
              <a href="tel:+923215024094" className="font-medium">
                +92 343 5105142
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src={logo}
            alt="Next Claim MD"
            width={160}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6 font-semibold font-mono">
          <Link href="/" className="hover:text-cyan-600">
            Home
          </Link>
          <Link href="/services" className="hover:text-cyan-600">
            Services
          </Link>
          <Link href="#" className="hover:text-cyan-600">
            Blogs
          </Link>

          <Link href="#" className="hover:text-cyan-600">
            Careers
          </Link>
          <Link href="/about" className="hover:text-cyan-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-cyan-600">
            Contact Us
          </Link>
        </nav>

        {/* Call-to-Action */}
        <div className="text-cyan-700 text-xs font-mono">
          <Link
            href="/contact"
            className="bg-cyan-700 text-white px-5 py-2 hover:bg-cyan-900 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Mobile Menu Component (Client Side) */}
      <div className="md:hidden">
        <MobileNavToggle />
      </div>
    </header>
  );
}
