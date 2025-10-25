import { Phone, CalendarDays, MessageSquare } from "lucide-react";
import Image from "next/image";
import doctor from "@/app/assets/doctor.jpg";

export default function CallToAction() {
  return (
    <section className="relative w-full max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 my-16">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-20 blur-3xl -z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-10">
        {/* Left: Illustration */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 relative">
          <div className="relative">
            <Image
              src={doctor}
              alt="Doctor illustration"
              width={380}
              height={280}
              className="drop-shadow-md object-contain"
            />
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md animate-bounce">
              Call Us Now
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-600 mt-2 mb-6 text-base">
            Our certified billing experts are here to help you 24/7 with
            questions, claims, and appointment requests.
          </p>

          {/* Phone card */}
          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-all">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Call us at</p>
              <p className="text-lg font-semibold text-blue-700 tracking-wide">
                (305) 433-4603
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all">
              <CalendarDays className="w-5 h-5" />
              Book Appointment
            </button>
            <button className="flex items-center gap-2 bg-white text-blue-700 border border-blue-600 px-6 py-3 rounded-full font-semibold shadow-sm hover:bg-blue-50 transition-all">
              <MessageSquare className="w-5 h-5" />
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
