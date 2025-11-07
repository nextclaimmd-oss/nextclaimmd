export default function AboutHeading({ contactData }) {
  return (
    <section>
      {/* Intro Section */}
      <div className="text-center py-20 mb-16 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
        <p className="text-orange-500 uppercase tracking-widest font-medium">
          About
        </p>
        <h2 className="text-4xl font-mono font-bold mt-3">
          About Next Claim Md
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          To be a globally preferred healthcare organization and make a
          difference in the healthcare ecosystem.
        </p>
      </div>
    </section>
  );
}
