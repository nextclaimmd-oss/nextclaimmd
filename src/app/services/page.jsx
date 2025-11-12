import { client } from "@/sanity/lib/client";
import ServiceAction from "../components/Services/ServiceCallToAction";
import ServicesCardList from "../components/Services/ServiceCards";
import ServiceIntroduction from "../components/Services/ServicesIntro";

export const revalidate = 0;
const page = async (props) => {
  const params = props.params;
  const query = `*[_type == "services" && slug.current != '${params.slug}']{
    mainTitle,
      "slug": slug.current
    }`;
  const services = await client.fetch(query);
  return (
    <main>
      <section>
        <ServiceIntroduction />
      </section>
      <section>
        <ServicesCardList services={services} />
      </section>
      <section>
        <ServiceAction />
      </section>
    </main>
  );
};

export default page;
