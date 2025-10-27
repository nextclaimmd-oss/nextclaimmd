import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  const contactItems = [
    {
      icon: <Phone className="w-7 h-7 text-orange-500" />,
      title: "Phone",
      detail: "+92 347 5159863",
    },
    {
      icon: <Mail className="w-7 h-7 text-orange-500" />,
      title: "Email",
      detail: "support@nextclaimmd.com",
    },
    {
      icon: <MapPin className="w-7 h-7 text-orange-500" />,
      title: "Head Office",
      detail: "Islamabad, Pakistan",
    },
  ];

  return (
    <section>
      {/* Intro Section */}
      <div className="text-center py-20 mb-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
        <p className="text-orange-500 uppercase tracking-widest font-medium">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Get in Touch With Us
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We're always ready to help. Whether you have a question about our
          services or want to discuss your project, our team will get back to
          you soon.
        </p>
      </div>

      {/* Contact Details */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center">
        {contactItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center font-mono space-y-2 hover:text-orange-500 transition-colors duration-300"
          >
            <div className="p-4 bg-orange-500/10 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
