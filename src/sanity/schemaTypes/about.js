export const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "About Title",
      type: "string",
      description: 'Main heading for the about section (e.g. "who are we")',
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Short description shown under the heading.",
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description:
        "The small heading above the main headline (e.g., 'Why Choose Us')",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: "The main headline for this section",
    },
    {
      name: "subText",
      title: "Sub Text",
      type: "text",
      description: "Paragraph describing the section",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image to display next to the text",
    },
    {
      name: "reasons",
      title: "Reasons List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Reason",
              type: "string",
              description: "Single reason to display in the list",
            },
          ],
        },
      ],
      description: "List of reasons why clients should choose you",
    },
    {
      name: "headlinesecond",
      title: "Headline",
      type: "string",
      description: "Main title of the section, e.g., 'Our Process'",
    },
    {
      name: "subTextsecond",
      title: "Sub Text",
      type: "text",
      description: "Paragraph describing the workflow or process",
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Step Title",
              type: "string",
              description: "Title of the workflow step",
            },
            {
              name: "description",
              title: "Step Description",
              type: "text",
              description: "Description explaining the workflow step",
            },
          ],
        },
      ],
      description: "List of workflow steps for the process section",
    },
  ],
};
