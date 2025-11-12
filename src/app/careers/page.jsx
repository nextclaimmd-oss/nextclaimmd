import React from "react";
import CareersHero from "../components/CareersComp/CareerHeader";
import WhyWorkWithUs from "../components/CareersComp/CompanyBenifits";
import JobOpenings from "../components/CareersComp/Jobs";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

const page = async () => {
  const query = `*[_type == "careers"][0]`;

  const careerData = await client.fetch(query);

  return (
    <main>
      <section>
        <CareersHero careerData={careerData} />
      </section>
      <section>
        <JobOpenings careerData={careerData} />
      </section>
      {/* <section>
        <WhyWorkWithUs />
      </section> */}
    </main>
  );
};

export default page;
