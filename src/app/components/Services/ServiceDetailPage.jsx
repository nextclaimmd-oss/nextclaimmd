import ServiceOverviews from "./ServiceOverview";
import ServiceHeaderImages from "./ServiceBannerImage";
import ServicesList from "./OtherServices";
import ServiceContent from "./ServiceContentComp";
import FAQSection from "./Faq";
import SimpleTaskList from "./ItemList";

const ServiceDetailPage = ({ serviceData, relatedServices }) => {
  return (
    <div>
      <section>
        <ServiceHeaderImages serviceData={serviceData} />
      </section>
      <section>
        <ServiceOverviews serviceData={serviceData} />
      </section>
      <section>
        <SimpleTaskList serviceData={serviceData} />
      </section>
      <section>
        <ServicesList relatedServices={relatedServices} />
      </section>
      {/* <section>
        <ServiceContent serviceData={serviceData} />
      </section> */}
      <section>
        <FAQSection serviceData={serviceData} />
      </section>
    </div>
  );
};

export default ServiceDetailPage;
