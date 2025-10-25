"use client";
import { useState } from "react";
import {
  FaFileMedical,
  FaMoneyBillWave,
  FaUserMd,
  FaClipboardCheck,
  FaBan,
  FaRegChartBar,
  FaCheckCircle,
} from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function ServicesSection({ homeData }) {
  const services = homeData?.servicesList || [];

  // Map icon names from Sanity to actual React icons
  const iconMap = {
    FaFileMedical: <FaFileMedical className="text-cyan-700 text-3xl mb-3" />,
    FaMoneyBillWave: (
      <FaMoneyBillWave className="text-cyan-700 text-3xl mb-3" />
    ),
    FaUserMd: <FaUserMd className="text-cyan-700 text-3xl mb-3" />,
    FaClipboardCheck: (
      <FaClipboardCheck className="text-cyan-700 text-3xl mb-3" />
    ),
    FaBan: <FaBan className="text-cyan-700 text-3xl mb-3" />,
    FaRegChartBar: <FaRegChartBar className="text-cyan-700 text-3xl mb-3" />,
    FaCheckCircle: <FaCheckCircle className="text-cyan-700 text-3xl mb-3" />,
  };

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < services.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-2 pb-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 rounded-full bg-white shadow-md mr-4 hover:bg-green-100 transition ${
              startIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <IoChevronBack className="text-2xl text-green-700" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {visibleServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border-2 border-cyan-600 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center font-geist">
                  {iconMap[service.icon] || (
                    <FaFileMedical className="text-cyan-700 text-3xl mb-3" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= services.length}
            className={`p-2 rounded-full bg-white shadow-md ml-4 hover:bg-green-100 transition ${
              startIndex + itemsPerPage >= services.length
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
          >
            <IoChevronForward className="text-2xl text-green-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
