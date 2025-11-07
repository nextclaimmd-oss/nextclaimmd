export const careers = {
  name: "careers",
  title: "Careers",
  type: "document",
  fields: [
    {name:"mainHeading",
      title:"Heading On Top of Image",
      type:"string",
      description:"The Heading Which is Above the Image"
    },
    {
      name: "mainDescription",
      title: "Description Below The Main Heading",
      type: "text",
      rows: 3,
      description: "Short description shown under the Main Heading.",
    },
     {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the image here.",
    },
    {
      name: "heading",
      title: "Job Opening Heading",
      type: "string",
      description: "Main heading text for the hero section",
    },
    {
      name: "description",
      title: "Description Below The Heading",
      type: "text",
      rows: 3,
      description: "Short description shown under the heading.",
    },
    {
      name: "phonedetail",
      title: "Phone Number",
      type: "string",
      description: "The Phone Number.",
    },
    {
      name: "emaildetail",
      title: "Email Address",
      type: "string",
      description: "The Email Address.",
    },
    {
      name: "jobs",
      title: "Job Openings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Job Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "department",
              title: "Department",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "location",
              title: "Location",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "type",
              title: "Job Type",
              type: "string",
              options: {
                list: [
                  { title: "Full-time", value: "Full-time" },
                  { title: "Part-time", value: "Part-time" },
                  { title: "Contract", value: "Contract" },
                ],
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "department",
            },
          },
        },
      ],
    },
  ],
};
