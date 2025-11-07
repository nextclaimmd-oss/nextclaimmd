import { PortableText } from "@portabletext/react";
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

export default function BlogOverview({ blogData }) {
  return (
    <section className="mb-12">
      {blogData?.overview && (
        <div className="prose prose-gray max-w-none leading-10">
          <PortableText
            value={blogData.overview}
            components={PortableTextComponents}
          />
        </div>
      )}
    </section>
  );
}
