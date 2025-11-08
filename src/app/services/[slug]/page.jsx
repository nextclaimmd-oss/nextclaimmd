import ServiceDetailPage from "@/app/components/Services/ServiceDetailPage";
import { client } from "@/sanity/lib/client";

const page = async (props) => {
  const params = await props.params;
  const query = `*[_type == "services" && slug.current == '${params.slug}'][0]`;
  const serviceData = await client.fetch(query);

  const relatedquery = `*[_type == "services" && slug.current != '${params.slug}']{
  mainTitle,
    "slug": slug.current
  }`;
  const relatedServices = await client.fetch(relatedquery);
  return (
    <main>
      <ServiceDetailPage
        serviceData={serviceData}
        relatedServices={relatedServices}
      />
    </main>
  );
};

export default page;
