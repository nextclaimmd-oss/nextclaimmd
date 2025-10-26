"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    practiceName: "",
    specialties: "",
    providers: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({
          name: "",
          practiceName: "",
          specialties: "",
          providers: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-500 mb-8 text-center">
          We'd love to hear from you. Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Practice Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Practice Name
            </label>
            <input
              name="practiceName"
              type="text"
              value={form.practiceName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your clinic or organization"
            />
          </div>

          {/* Specialties */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Specialties
            </label>
            <input
              name="specialties"
              type="text"
              value={form.specialties}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Cardiology, Neurology, etc."
            />
          </div>

          {/* Number of Providers */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Number of Providers
            </label>
            <input
              name="providers"
              type="number"
              value={form.providers}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter number of providers"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center text-sm mt-4 ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
