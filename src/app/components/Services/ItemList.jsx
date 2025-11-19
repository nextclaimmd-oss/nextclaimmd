import image from "@/app/assets/virtual.png";
import Image from "next/image";
import { PortableText } from "next-sanity";

const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-bold font-mono mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold font-mono text-slate-800 mt-6 mb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-mono text-slate-700 mt-5 mb-1">{children}</h3>
    ),
    normal: ({ children }) => (
      <div>
        <p className="mb-4 ">{children}</p>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-4 md:pl-8 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-4 md:pl-8 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

export default function SimpleTaskList({ serviceData }) {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-gradient-to-tr from-[#20c5c5]/40 to-[#1e2641]/60 blur-3xl rounded-full opacity-50"></div>
      <div className="max-w-6xl mx-auto md:ml-16 flex flex-col lg:flex-row items-center gap-8 relative z-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-2xl md:mb-6 font-bold font-mono text-gray-900 leading-tight mb-2">
            {serviceData?.listItemsTitle}
          </h2>

          <div className="text-sm">
            <PortableText
              value={serviceData.listitems}
              components={PortableTextComponents}
            />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="w-full lg:w-1/2  gap-6">
          <Image
            src={image}
            alt="virtual assistant"
            className="h-340 w-290 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
