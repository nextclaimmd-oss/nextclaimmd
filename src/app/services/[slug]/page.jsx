// src/app/services/[slug]/page.js
import ServiceDetailPage from "@/app/components/Services/ServiceDetailPage";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamicParams = true;

// Generate static params for ISR fallback
export async function generateStaticParams() {
  const query = `*[_type == "services" && defined(slug.current)]{ "slug": slug.current }`;
  const services = await client.fetch(query);

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;

  const query = `*[_type == "services" && slug.current == $slug][0]{
    metaTitle,
    Metadescription,
    image,
  }`;

  const services = await client.fetch(query, { slug: params.slug });

  return {
    title: services?.metaTitle,
    description: services?.Metadescription,
    openGraph: {
      images: [
        {
          url: urlFor(services?.image).url(),
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const query = `*[_type == "services" && slug.current == $slug][0]`;
  const serviceData = await client.fetch(query, { slug });

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  // Fetch related services excluding current
  const relatedQuery = `*[_type == "services" && slug.current != $slug]{
    mainTitle,
    "slug": slug.current
  }`;
  const relatedServices = await client.fetch(relatedQuery, { slug });

  return (
    <main className="bg-gray-50">
      <ServiceDetailPage
        serviceData={serviceData}
        relatedServices={relatedServices}
      />
    </main>
  );
}
