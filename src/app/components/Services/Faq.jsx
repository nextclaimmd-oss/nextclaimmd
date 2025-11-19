"use client";
import { ChevronDown } from "lucide-react";
import { PortableText } from "next-sanity";
import { useState } from "react";

export default function FAQSection({ serviceData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 mt-8 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get answers to some of the most common questions about our medical
          billing and revenue cycle management services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        {serviceData?.items?.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-gray-50 text-left"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="font-semibold text-gray-900">{faq.question}</h3>
              <ChevronDown
                className={`w-5 h-5 text-cyan-700 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="mt-3 text-sm text-gray-700 leading-relaxed">
                <PortableText value={faq.answer} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
