"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactForms({ contactData }) {
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">
        {/* LEFT SECTION */}
        <div>
          <p className="text-cyan-800 font-mono font-semibold uppercase tracking-wide">
            Get a Quote
          </p>
          <h2 className="text-4xl font-bold font-mono text-gray-900 mt-3 leading-tight">
            {contactData.secondTitle}
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            {contactData.description}
          </p>

          <div className="mt-8 space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className=" text-cyan-700 w-5 h-5" />
              <span>{contactData.number}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-700 w-5 h-5" />
              <span>{contactData.emailAddress}</span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-400 p-8">
          <h3 className="text-2xl font-semibold font-mono text-gray-900 mb-6">
            Request a Quote
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 ">
            {/* Name & Practice */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition"
              />
              <input
                name="practiceName"
                type="text"
                value={form.practiceName}
                onChange={handleChange}
                placeholder="Practice Name"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition"
              />
            </div>

            {/* Specialties & Providers */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="specialties"
                type="text"
                value={form.specialties}
                onChange={handleChange}
                placeholder="Specialties"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition"
              />
              <input
                name="providers"
                type="number"
                value={form.providers}
                onChange={handleChange}
                placeholder="Number of Providers"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition"
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="w-full border border-gray-400 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-cyan-700 focus:border-cyan-700 outline-none transition resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-800 text-white py-3 rounded-xl text-lg font-medium hover:bg-orange-600 hover:shadow-md transition-all duration-200 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send an Inquiry"}
            </button>

            {status && (
              <p
                className={`text-center text-sm mt-3 ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
