export default function WhyWorkWithUs() {
  const items = [
    {
      number: "1",
      title: "Supportive Culture",
      description:
        "We foster a positive and collaborative work environment where every voice is valued and respected.",
    },
    {
      number: "2",
      title: "Growth Opportunities",
      description:
        "We invest in employee development through continuous training and career advancement programs.",
    },
    {
      number: "3",
      title: "Work-Life Balance",
      description:
        "Enjoy flexible schedules and a healthy balance between your personal life and professional goals.",
    },
    {
      number: "4",
      title: "Comprehensive Benefits",
      description:
        "We offer competitive salaries, health coverage, and performance-based incentives to reward excellence.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Work With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 border-t border-gray-200 pt-10">
          {items.map((item) => (
            <div key={item.number} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-800 text-white text-lg font-semibold mb-4">
                {item.number}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
