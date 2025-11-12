import ServiceDetailPage from "@/app/components/Services/ServiceDetailPage";
import { client } from "@/sanity/lib/client";

// ✅ Generate static params for all service pages
export async function generateStaticParams() {
  const query = `*[_type == "services"]{ "slug": slug.current }`;
  const services = await client.fetch(query);

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }) {
  // ✅ Await params before destructuring
  const { slug } = await params;

  // Fetch current service data
  const query = `*[_type == "services" && slug.current == '${slug}'][0]`;
  const serviceData = await client.fetch(query);

  // Fetch related services (excluding current one)
  const relatedQuery = `*[_type == "services" && slug.current != '${slug}']{
    mainTitle,
    "slug": slug.current
  }`;
  const relatedServices = await client.fetch(relatedQuery);

  return (
    <main>
      <ServiceDetailPage
        serviceData={serviceData}
        relatedServices={relatedServices}
      />
    </main>
  );
}
