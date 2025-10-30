import React from "react";
import AboutHeading from "../components/AboutComponent/HomeHeader";
import WhoWeAre from "../components/AboutComponent/WhoAreWe";
import WhyUss from "../components/AboutComponent/WhyUs";
import OurProcess from "../components/AboutComponent/WorkProcess";
import CallToActions from "../components/AboutComponent/CalltoAction";

const page = () => {
  return (
    <div>
      <section>
        <AboutHeading />
      </section>
      <section>
        <WhoWeAre />
      </section>

      <section>
        <WhyUss />
      </section>
      <section>
        <OurProcess />
      </section>
      <section>
        <CallToActions />
      </section>
    </div>
  );
};

export default page;
