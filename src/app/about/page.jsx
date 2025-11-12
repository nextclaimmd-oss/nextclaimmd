import React from "react";
import AboutHeading from "../components/AboutComponent/HomeHeader";
import WhoWeAre from "../components/AboutComponent/WhoAreWe";
import WhyUss from "../components/AboutComponent/WhyUs";
import OurProcess from "../components/AboutComponent/WorkProcess";
import CallToActions from "../components/AboutComponent/CalltoAction";
import { client } from "@/sanity/lib/client";

const page = async () => {
  const query = `*[_type == "about"][0]`;
  const aboutData = await client.fetch(query);
  return (
    <div>
      <section>
        <AboutHeading />
      </section>
      <section>
        <WhoWeAre aboutData={aboutData} />
      </section>

      <section>
        <WhyUss aboutData={aboutData} />
      </section>
      <section>
        <OurProcess aboutData={aboutData} />
      </section>
      <section>
        <CallToActions />
      </section>
    </div>
  );
};

export default page;
