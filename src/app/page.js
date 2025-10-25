import Image from "next/image";
import HeroSections from "./components/HomeComponents/HeroSection";
import { client } from "@/sanity/lib/client";
import BillingIntro from "./components/HomeComponents/ServiceHomeComp";
import StatsSection from "./components/HomeComponents/StatsSections";
import ServicesSection from "./components/HomeComponents/ServiceCardComp";
import WhyChooseUs from "./components/HomeComponents/WhyUs";
import CallToAction from "./components/HomeComponents/ContactUsHome";
import ServiceLocation from "./components/HomeComponents/ServiceArea";
import Specialties from "./components/HomeComponents/Specility";

export default async function Home() {
  const query = `*[_type == "home"][0]`;
  const homeData = await client.fetch(query);
  return (
    <main>
      <section>
        <HeroSections homeData={homeData} />
      </section>
      <section>
        <StatsSection homeData={homeData}/>
      </section>
      <section>
        <BillingIntro homeData={homeData}/>
      </section>
      <section>
        <ServicesSection homeData={homeData}/>
      </section>
      <section>
        <WhyChooseUs homeData={homeData}/>
      </section>
      <section>
        <ServiceLocation homeData={homeData}/>
      </section>
      <section>
        <Specialties />
      </section>
      <section>
        <CallToAction />
      </section>
      
    </main>
  );
}
