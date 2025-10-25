export default function StatsSection({ homeData }) {
  const stats = homeData?.statsList || [];

  return (
    <section className="bg-sky-50  sm:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:divide-x divide-gray-300">
          {stats.map((item, index) => (
            <div key={index} className="flex-1 px-6 py-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-cyan-600">
                {item.number}
              </h3>
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
