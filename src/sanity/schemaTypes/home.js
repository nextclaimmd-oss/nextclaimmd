export const home = {
    name: "home",
    title: "Home",
    type: "document",
    fields:[
         {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading text for the hero section",
      
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Short description or tagline for the hero section",
     
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Upload background image for the hero section",
      options: {
        hotspot: true,
      },
    },
    {
      name: "statsList",
      title: "Statistics List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Stat Number",
              type: "string",
              description: "Example: '10+', '250+', '100+'.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "title",
              title: "Stat Title",
              type: "string",
              description: "Example: 'Years of Experience', 'Satisfied Clients'.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Stat Description",
              type: "text",
              rows: 2,
              description: "A short supporting line under the title.",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "secondheading",
      title: "Second Heading",
      type: "string",
      description: "Main heading text (e.g., 'Next Claim MD Offers').",
    
    },
    {
      name: "highlightText",
      title: "Highlighted Text",
      type: "string",
      description:
        "The part of the heading highlighted in color (e.g., 'Electronic Medical Billing').",
   
    },
    
    {
      name: "seconddescription",
      title: "Intro Paragraph",
      type: "text",
      rows: 4,
      description:
        "Main paragraph text describing the billing services or introduction section.",
      
    },
    {
      name: "servicesList",
      title: "Services List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Service Title",
              type: "string",

            },
            {
              name: "description",
              title: "Service Description",
              type: "text",
              rows: 2,
              
            },
            {
              name: "icon",
              title: "Service Icon",
              type: "string",
              description:
                "Enter the icon name (e.g., 'FaFileMedical', 'FaUserMd', 'FaMoneyBillWave'). Use react-icons/fa names.",

            },
          ],
        },
      ],
    },
    {
      name: "whyChooseUsheading",
      title: "Why Choose Us Heading",
      type: "string",
      description:
        "Main title for the section (e.g., 'The Trusted Partner in Modern Medical Billing and Revenue Cycle Management').",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "highlightTextWhyChooseUs",
      title: "Why Choose Us Highlighted Text",
      type: "string",
      description:
        "Part of the heading to highlight in color (e.g., 'Medical Billing').",
    },
    {
      name: "whyChooseUsdescription",
      title: "Why Choose Us Section Description",
      type: "text",
      rows: 4,
      description:
        "A short paragraph describing the company's mission, approach, or key benefits.",
     
    },
    {
      name: "services",
      title: "Service Points",
      type: "array",
      description:
        "List of service highlights or benefits (each point appears with a check icon).",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Service Point",
              type: "string",
             
            },
          ],
        },
      ],
  
    },
    {
  name: "specialties",
  title: "Specialties",
  type: "array",
  of: [
    {
      type: "string",
      title: "Specialty",
    },
  ],
  description: "List of medical specialties shown in the homepage grid.",
},
{
  name: "phoneNumber",
  title: "Phone Number",
  type: "string",
  description: "The phone number shown in the Call to Action section."
},
{
  name: "emailAddress",
  title: "Email Address",
  type: "string",
  description: "The email shown in the Call to Action section."
}

    ]
}