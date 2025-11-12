import React from "react";
import ContactForms from "../components/ContactForm/ContactForm";
import ContactUs from "../components/ContactForm/ContactHeading";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

const page = async () => {
  const query = `*[_type == "contact"][0]`;
  const contactData = await client.fetch(query);
  return (
    <div>
      <section>
        <ContactUs contactData={contactData} />
      </section>
      <section>
        <ContactForms contactData={contactData} />
      </section>
    </div>
  );
};

export default page;
