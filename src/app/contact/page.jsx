import React from "react";
import ContactForms from "../components/ContactForm/ContactForm";
import ContactUs from "../components/ContactForm/ContactHeading";

const page = () => {
  return (
    <div>
      <section>
        <ContactUs />
      </section>
      <ContactForms />
    </div>
  );
};

export default page;
