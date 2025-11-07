import React from "react";
import CareersHero from "../components/CareersComp/CareerHeader";
import WhyWorkWithUs from "../components/CareersComp/CompanyBenifits";
import JobOpenings from "../components/CareersComp/Jobs";

const page = () => {
  return (
    <main>
      <section>
        <CareersHero />
      </section>
      <section>
        <JobOpenings />
      </section>
      {/* <section>
        <WhyWorkWithUs />
      </section> */}
    </main>
  );
};

export default page;
