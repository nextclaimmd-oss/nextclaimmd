export const services = {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "bannerTitle",
      title: "Title Banner Image",
      type: "string",
      description: "Title On The Banner Image",
    },
    {
      name: "descriptionBanner",
      title: "Description on the Banner",
      type: "text",
      rows: 3,
      description: "Small Text on the Banner Image",
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
      name: "mainTitle",
      title: "Main Title",
      type: "string",
      description: "Main Title of the Section",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "mainTitle",
      },
      description: "Automatically generats slug from Main Title",
    },
    {
      name: "overview",
      title: "Service Overview",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
              description: "Describe the image for accessibility and SEO.",
            },
          ],
        },
      ],
      description: "Main body content of the blog (supports text and images).",
    },
    {
      name: "listItemsTitle",
      title: "List Items Title",
      type: "string",
      description: "List Items Title",
    },
    {
      name: "listitems",
      title: "List Items",
      type: "array",
      of: [{ type: "block" }],
      description: "List Items of What is Offered in the Services",
    },
    {
      name: "items",
      title: "FAQ Items",
      type: "array",
      description: "Add frequently asked questions and their answers here.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block" }],
              description: "Answer of the Faq's",
            },
          ],
        },
      ],
    },
  ],
};
