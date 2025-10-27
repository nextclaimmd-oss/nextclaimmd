import * as LucideIcons from "lucide-react";

export default function ContactUs({ contactData }) {
  return (
    <section>
      {/* Intro Section */}
      <div className="text-center py-20 mb-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
        <p className="text-orange-500 uppercase tracking-widest font-medium">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          {contactData.sectionTitle}
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {contactData.sectionSubtitle}
        </p>
      </div>

      {/* Contact Items */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center">
        {contactData.contactItems?.map((item, i) => {
          const IconComponent =
            LucideIcons[item.icon] || LucideIcons.HelpCircle;
          return (
            <div
              key={i}
              className="flex flex-col items-center font-mono space-y-2 hover:text-orange-500 transition-colors duration-300"
            >
              <div className="p-4 bg-orange-500/10 rounded-full flex items-center justify-center">
                <IconComponent className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
