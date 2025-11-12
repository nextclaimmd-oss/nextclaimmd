// src/app/services/[slug]/page.js
import ServiceDetailPage from "@/app/components/Services/ServiceDetailPage";
import { client } from "@/sanity/lib/client";

export const dynamicParams = true;
export const revalidate = 0; // ✅ fully rely on on-demand revalidation

// Generate static params for ISR fallback
export async function generateStaticParams() {
  const query = `*[_type == "services" && defined(slug.current)]{ "slug": slug.current }`;
  const services = await client.fetch(query);

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params; // keep await if your setup requires it

  // Fetch current service data
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
    <main>
      <ServiceDetailPage
        serviceData={serviceData}
        relatedServices={relatedServices}
      />
    </main>
  );
}
