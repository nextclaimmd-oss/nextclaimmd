"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
// import logo from "@/app/assets/logoo.png";
import Link from "next/link";

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* <Link href="/">
          <Image
            src={logo}
            alt="Park Plaza Condos"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link> */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <nav className="bg-white shadow-lg px-6 py-4 space-y-4 text-gray-700 text-base font-medium border-t border-gray-100 animate-fadeIn">
          <Link
            href="/"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blogs"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/careers"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/about"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="block hover:text-green-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-slate-600 text-white py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </div>
  );
}
